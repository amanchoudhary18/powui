const WORDS = ["POW!", "BAM!", "ZAP!", "BOOM!", "KAPOW!"];

/** A comic sound-effect burst near the clicked element. No deps, just DOM + inline styles. */
export function comicBurst(event: { currentTarget: HTMLElement }) {
  const rect = event.currentTarget.getBoundingClientRect();
  const el = document.createElement("div");
  el.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];

  const hue = Math.floor(Math.random() * 360);
  const rotate = Math.random() * 24 - 12;

  Object.assign(el.style, {
    position: "fixed",
    left: `${rect.left + rect.width / 2}px`,
    top: `${rect.top}px`,
    transform: `translate(-50%, -50%) scale(0.3) rotate(${rotate}deg)`,
    fontFamily: "Anton, Impact, sans-serif",
    fontSize: "56px",
    color: `hsl(${hue} 90% 50%)`,
    textShadow: "3px 3px 0 #000",
    pointerEvents: "none",
    zIndex: "9999",
    opacity: "0",
    transition:
      "transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 300ms ease-out",
  });

  // Appended to <html>, not <body>: a transformed ancestor becomes the
  // containing block for position:fixed descendants, so if body ever gets a
  // CSS transform (e.g. a zoom effect), a burst parented to it would be
  // mispositioned relative to that transform instead of the real viewport.
  document.documentElement.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = `translate(-50%, -90px) scale(1.3) rotate(${rotate}deg)`;
  });

  setTimeout(() => {
    el.style.opacity = "0";
  }, 550);
  setTimeout(() => el.remove(), 900);
}
