// ============================================================
// Shared behaviour: nav toggle, scroll-reveal, brand marquee
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // Mark active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Build brand marquee from data (duplicated once for seamless loop)
  const marquee = document.querySelector(".marquee");
  if (marquee && typeof PRODUCT_DATA !== "undefined") {
    const names = PRODUCT_DATA.brands.map(b => b.name);
    const html = names.map(n => `<span class="chip">${n}</span>`).join("");
    marquee.innerHTML = html + html; // duplicate for infinite scroll illusion
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }
});
