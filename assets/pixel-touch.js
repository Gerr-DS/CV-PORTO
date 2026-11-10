(() => {
  const frame = document.querySelector(".portrait-frame");
  const image = frame?.querySelector("img");
  if (!frame || !image) return;

  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const overlay = document.createElement("canvas");
  overlay.className = "portrait-pixel-canvas";
  frame.append(overlay);
  const back = document.createElement("div");
  back.className = "portrait-back";
  back.setAttribute("aria-hidden", "true");
  const silhouette = document.createElement("img");
  silhouette.src = "assets/porto-silhouette.png";
  silhouette.alt = "";
  back.append(silhouette);
  frame.append(back);
  frame.setAttribute("role", "button");
  frame.setAttribute("tabindex", "0");
  frame.setAttribute("aria-label", "Balik foto profil untuk melihat siluet");
  frame.setAttribute("aria-pressed", "false");
  const ctx = overlay.getContext("2d");
  const sample = document.createElement("canvas");
  const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
  let pixels = null;
  let cols = 0;
  let rows = 0;
  let cell = 6;
  let pointer = null;
  let pointerType = "mouse";
  let pointerDown = false;
  let held = false;
  let shards = [];
  let dots = [];
  let lastBurst = 0;
  let pressAt = 0;
  let flipTimer = 0;
  let holdTimer = 0;
  let raf = 0;

  const particleLayer = document.createElement("canvas");
  particleLayer.className = "touch-particle-layer";
  document.body.append(particleLayer);
  const particleCtx = particleLayer.getContext("2d");
  let dpr = Math.min(devicePixelRatio || 1, 2);

  function resize() {
    const rect = frame.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    dpr = Math.min(devicePixelRatio || 1, 2);
    overlay.width = Math.round(width * dpr);
    overlay.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sample.width = Math.max(1, Math.ceil(width / cell));
    sample.height = Math.max(1, Math.ceil(height / cell));
    cols = sample.width;
    rows = sample.height;
    if (image.complete && image.naturalWidth) {
      sampleCtx.clearRect(0, 0, cols, rows);
      const scale = Math.max(cols / image.naturalWidth, rows / image.naturalHeight);
      const sourceWidth = cols / scale;
      const sourceHeight = rows / scale;
      const sourceX = (image.naturalWidth - sourceWidth) / 2;
      const sourceY = (image.naturalHeight - sourceHeight) * 0.3;
      sampleCtx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, cols, rows);
      try { pixels = sampleCtx.getImageData(0, 0, cols, rows).data; } catch { pixels = null; }
    }
    const w = innerWidth;
    const h = innerHeight;
    particleLayer.width = Math.round(w * dpr);
    particleLayer.height = Math.round(h * dpr);
    particleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (prefersReducedMotion) particleLayer.classList.add("reduced-motion");
  }

  function colorAt(x, y) {
    if (!pixels) return "#d6d6d6";
    const index = (Math.max(0, Math.min(rows - 1, y)) * cols + Math.max(0, Math.min(cols - 1, x))) * 4;
    return `rgba(${pixels[index]},${pixels[index + 1]},${pixels[index + 2]},${pixels[index + 3] / 255})`;
  }

  function burst(x, y, count = 24) {
    const rect = frame.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 4.6;
      const gx = Math.floor((x - rect.left) / cell);
      const gy = Math.floor((y - rect.top) / cell);
      shards.push({
        x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - 0.7,
        size: 3 + Math.random() * 7, life: 28 + Math.random() * 28,
        color: colorAt(gx + Math.round((Math.random() - 0.5) * 5), gy + Math.round((Math.random() - 0.5) * 5)),
      });
    }
  }

  function drawLens() {
    ctx.clearRect(0, 0, overlay.width / dpr, overlay.height / dpr);
    if (!pointer || !pixels) return;
    const rect = frame.getBoundingClientRect();
    const x = pointer.x - rect.left;
    const y = pointer.y - rect.top;
    const radius = held ? 104 : 78;
    const cutout = held ? 58 : 0;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.clip();
    for (let py = Math.max(0, Math.floor((y - radius) / cell)); py < Math.min(rows, Math.ceil((y + radius) / cell)); py++) {
      for (let px = Math.max(0, Math.floor((x - radius) / cell)); px < Math.min(cols, Math.ceil((x + radius) / cell)); px++) {
        const cx = px * cell + cell / 2;
        const cy = py * cell + cell / 2;
        const dist = Math.hypot(cx - x, cy - y);
        if (dist > radius || (cutout && dist < cutout)) continue;
        ctx.fillStyle = colorAt(px, py);
        ctx.fillRect(px * cell, py * cell, cell + 0.4, cell + 0.4);
      }
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(x, y, held ? 60 : 78, 0, Math.PI * 2);
    ctx.strokeStyle = held ? "rgba(255,255,255,.75)" : "rgba(255,255,255,.35)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function animate() {
    raf = 0;
    drawLens();
    particleCtx.clearRect(0, 0, innerWidth, innerHeight);
    shards = shards.filter(p => p.life > 0);
    for (const p of shards) {
      p.x += p.vx; p.y += p.vy; p.vx *= 0.985; p.vy = p.vy * 0.985 + 0.045; p.life--;
      particleCtx.globalAlpha = Math.min(1, p.life / 18);
      particleCtx.fillStyle = p.color;
      particleCtx.fillRect(p.x, p.y, p.size, p.size);
    }
    if (held && pointer && !prefersReducedMotion) {
      for (let i = 0; i < 2; i++) dots.push({ x: pointer.x + (Math.random() - .5) * 24, y: pointer.y + (Math.random() - .5) * 24, life: 18, r: 1 + Math.random() * 2 });
    }
    dots = dots.filter(p => p.life > 0);
    for (const p of dots) {
      p.life--; particleCtx.globalAlpha = p.life / 22; particleCtx.fillStyle = "rgba(255,255,255,.8)";
      particleCtx.beginPath(); particleCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2); particleCtx.fill();
    }
    particleCtx.globalAlpha = 1;
    if (held || shards.length || dots.length) raf = requestAnimationFrame(animate);
  }

  function schedule() { if (!raf) raf = requestAnimationFrame(animate); }
  function setPointer(event) {
    const rect = frame.getBoundingClientRect();
    pointerType = event.pointerType || pointerType;
    pointer = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom
      ? { x: event.clientX, y: event.clientY, type: pointerType }
      : null;
    if (pointer) {
      frame.style.setProperty("--hold-x", `${pointer.x - rect.left}px`);
      frame.style.setProperty("--hold-y", `${pointer.y - rect.top}px`);
    }
    frame.classList.toggle("is-hovered", !!pointer);
    frame.classList.toggle("is-held", !!pointer && held);
    if (pointerDown && !held && performance.now() - pressAt >= 450) beginHold();
    if (held && pointer && performance.now() - lastBurst > 90) { burst(pointer.x, pointer.y, 7); lastBurst = performance.now(); }
    schedule();
  }

  function beginHold() {
    if (!pointerDown || held || !pointer) return;
    held = true;
    frame.classList.add("is-held");
    burst(pointer.x, pointer.y, 34);
    lastBurst = performance.now();
    schedule();
  }

  frame.addEventListener("pointerenter", setPointer);
  frame.addEventListener("pointermove", setPointer);
  frame.addEventListener("pointerdown", event => {
    pressAt = performance.now();
    pointerDown = true;
    setPointer(event);
    clearTimeout(holdTimer);
    holdTimer = setTimeout(beginHold, 450);
    schedule();
  });
  window.addEventListener("pointerup", () => {
    pointerDown = false;
    clearTimeout(holdTimer);
    held = false; frame.classList.remove("is-held");
    if (pointerType === "touch") { pointer = null; frame.classList.remove("is-hovered"); }
    schedule();
  });
  function flipPortrait() {
    const alreadyFlipped = frame.classList.contains("is-flipped");
    frame.classList.add("is-flipped");
    frame.setAttribute("aria-pressed", "true");
    clearTimeout(flipTimer);
    if (alreadyFlipped) scheduleFlipReturn();
    overlay.style.visibility = "hidden";
  }
  function scheduleFlipReturn() {
    clearTimeout(flipTimer);
    flipTimer = setTimeout(() => {
      frame.classList.remove("is-flipped");
      frame.setAttribute("aria-pressed", "false");
    }, 500);
  }
  frame.addEventListener("click", () => {
    // A quick click/tap flips the portrait; a longer hold stays with the pixel effect.
    if (performance.now() - pressAt <= 450) {
      shards = [];
      dots = [];
      flipPortrait();
    }
  });
  frame.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipPortrait();
    }
  });
  frame.addEventListener("transitionend", event => {
    if (event.propertyName === "transform") {
      if (frame.classList.contains("is-flipped")) scheduleFlipReturn();
      else overlay.style.visibility = "";
    }
  });
  frame.addEventListener("pointerleave", () => {
    pointer = null; frame.classList.remove("is-hovered", "is-held"); schedule();
  });
  window.addEventListener("resize", () => { resize(); schedule(); });
  image.addEventListener("load", () => { resize(); schedule(); });
  resize();
})();
