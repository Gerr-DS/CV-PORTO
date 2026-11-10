(() => {
  const root = document.documentElement;
  const themeKey = "gerry-cv-theme";
  const enterKey = "gerry-cv-page-enter";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let themeTimer;

  const syncThemeButtons = () => {
    const isLight = root.dataset.theme === "light";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const icon = button.querySelector("i");
      const label = isLight
        ? "Aktifkan tema gelap / Switch to dark theme"
        : "Aktifkan tema terang / Switch to light theme";

      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", String(isLight));
      if (icon) icon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
    });
  };

  const setTheme = (theme, persist = true) => {
    root.dataset.theme = theme;
    root.classList.add("theme-changing");
    window.clearTimeout(themeTimer);
    themeTimer = window.setTimeout(() => root.classList.remove("theme-changing"), 420);

    if (persist) {
      try {
        localStorage.setItem(themeKey, theme);
      } catch (_) {
        // The current page still switches even if storage is unavailable.
      }
    }
    syncThemeButtons();
  };

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(root.dataset.theme === "light" ? "dark" : "light");
    });
  });
  syncThemeButtons();

  window.addEventListener("storage", (event) => {
    if (event.key === themeKey) setTheme(event.newValue === "light" ? "light" : "dark", false);
  });

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const cursor = document.createElement("div");
  cursor.className = "fx-cursor";
  cursor.setAttribute("aria-hidden", "true");
  document.body.append(cursor);

  if (canHover && !reducedMotion) {
    window.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      root.classList.add("fx-pointer");
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.toggle(
        "is-hover",
        Boolean(event.target instanceof Element && event.target.closest("a, button, [role='button'], .project-card, .certificate-card")),
      );
    }, { passive: true });

    document.addEventListener("pointerout", (event) => {
      if (!event.relatedTarget) {
        root.classList.remove("fx-pointer");
        cursor.classList.remove("is-hover");
      }
    });

    document.querySelectorAll(".project-card, .certificate-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        card.style.setProperty("--spot-x", `${x * 100}%`);
        card.style.setProperty("--spot-y", `${y * 100}%`);
        card.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
      }, { passive: true });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--spot-x", "50%");
        card.style.setProperty("--spot-y", "50%");
      });
    });

    const magneticItems = document.querySelectorAll(
      'a[class*="bg-cyanGlow"], a[class*="border-cyanGlow"], .theme-toggle-btn, .lang-toggle-btn, #menuButton, #scrollTopBtn',
    );
    magneticItems.forEach((item) => {
      item.classList.add("fx-magnetic");
      item.addEventListener("pointermove", (event) => {
        const bounds = item.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
        item.style.setProperty("--mag-x", `${Math.max(-7, Math.min(7, x))}px`);
        item.style.setProperty("--mag-y", `${Math.max(-7, Math.min(7, y))}px`);
      }, { passive: true });
      item.addEventListener("pointerleave", () => {
        item.style.setProperty("--mag-x", "0px");
        item.style.setProperty("--mag-y", "0px");
      });
    });
  }

  const curtain = document.createElement("div");
  curtain.className = "fx-curtain";
  curtain.setAttribute("aria-hidden", "true");
  for (let index = 0; index < 8; index += 1) {
    const column = document.createElement("span");
    column.style.setProperty("--leave-delay", `${index * 38}ms`);
    column.style.setProperty("--enter-delay", `${(7 - index) * 36}ms`);
    curtain.append(column);
  }
  document.body.append(curtain);

  if (!reducedMotion) {
    let entering = false;
    try {
      entering = sessionStorage.getItem(enterKey) === "1";
      if (entering) sessionStorage.removeItem(enterKey);
    } catch (_) {
      entering = false;
    }

    if (entering) {
      root.classList.add("fx-page-enter");
      requestAnimationFrame(() => root.classList.add("fx-page-enter-ready"));
      window.setTimeout(() => root.classList.remove("fx-page-enter", "fx-page-enter-ready"), 1050);
    }

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      let destination;
      try {
        destination = new URL(link.href, window.location.href);
      } catch (_) {
        return;
      }
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.hash) return;

      event.preventDefault();
      try {
        sessionStorage.setItem(enterKey, "1");
      } catch (_) {
        // Navigation still proceeds without the entry animation.
      }
      root.classList.add("fx-page-leaving");
      window.setTimeout(() => window.location.assign(destination.href), 700);
    });
  }
})();
