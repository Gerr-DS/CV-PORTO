(() => {
  const canvas = document.createElement("canvas");
  canvas.className = "touch-particle-layer";
  canvas.setAttribute("aria-hidden", "true");
  document.body.append(canvas);

  const ctx = canvas.getContext("2d");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let activePointer = null;
  let heldSince = 0;
  let pointer = { x: 0, y: 0 };
  let particles = [];
  let frame = 0;
  let lastSpawn = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function addParticles(now) {
    if (!activePointer || now - heldSince < 170 || now - lastSpawn < 24) return;
    lastSpawn = now;
    const count = reducedMotion ? 1 : 2;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: pointer.x + (Math.random() - 0.5) * 12,
        y: pointer.y + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: 1 + Math.random() * 1.8,
        life: 22 + Math.random() * 14,
        maxLife: 36,
      });
    }
  }

  function render(now) {
    frame = 0;
    ctx.clearRect(0, 0, width, height);
    addParticles(now);

    const lightTheme = document.documentElement.dataset.theme === "light";
    particles = particles.filter(particle => particle.life > 0);
    for (const particle of particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 1;
      ctx.globalAlpha = Math.min(1, particle.life / particle.maxLife);
      ctx.fillStyle = lightTheme ? "#18181b" : "#ffffff";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (activePointer || particles.length) frame = requestAnimationFrame(render);
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  window.addEventListener("pointerdown", event => {
    activePointer = event.pointerId;
    pointer = { x: event.clientX, y: event.clientY };
    heldSince = performance.now();
    particles = [];
    schedule();
  }, { passive: true });

  window.addEventListener("pointermove", event => {
    if (activePointer !== event.pointerId) return;
    pointer = { x: event.clientX, y: event.clientY };
    schedule();
  }, { passive: true });

  function releasePointer(event) {
    if (activePointer !== event.pointerId) return;
    activePointer = null;
    particles = [];
    schedule();
  }

  window.addEventListener("pointerup", releasePointer, { passive: true });
  window.addEventListener("pointercancel", releasePointer, { passive: true });
  window.addEventListener("resize", resize, { passive: true });
  resize();
})();
