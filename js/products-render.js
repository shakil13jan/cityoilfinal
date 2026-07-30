// ============================================================
// Renders brand tabs + product grids on products.html
// Renders popular-only grid on popular.html (looks for [data-popular-page])
// ============================================================

function productCardHTML(item, brandName) {
  const ribbon = item.popular
    ? `<span class="badge-popular">Popular</span>`
    : "";
  return `
    <article class="product-card">
      ${ribbon}
      <div class="product-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy"
             onerror="this.src='images/placeholder.svg'">
      </div>
      <div class="product-body">
        <span class="product-brand">${brandName}</span>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-spec">${item.spec}</p>
        <div class="product-foot">
          <span class="product-tag">${item.tag}</span>
        </div>
      </div>
    </article>`;
}

function renderProductsPage() {
  const tabsEl = document.querySelector(".brand-tabs");
  const gridEl = document.querySelector(".product-grid");
  if (!tabsEl || !gridEl) return;

  const brands = PRODUCT_DATA.brands;

  tabsEl.innerHTML =
    `<button class="brand-tab active" data-brand="all">All Brands</button>` +
    brands
      .map(b => `<button class="brand-tab" data-brand="${b.id}">${b.name}</button>`)
      .join("");

  function draw(brandId) {
    let items = [];
    brands.forEach(b => {
      if (brandId === "all" || b.id === brandId) {
        b.items.forEach(it => items.push({ ...it, brandName: b.name }));
      }
    });
    gridEl.innerHTML = items.length
      ? items.map(it => productCardHTML(it, it.brandName)).join("")
      : `<div class="empty-state">No products added for this brand yet.<br>Add photos to the images/ folder and list them in js/data.js.</div>`;
  }

  tabsEl.addEventListener("click", e => {
    const btn = e.target.closest(".brand-tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".brand-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    draw(btn.dataset.brand);
  });

  // deep link support: products.html?brand=mobil
  const params = new URLSearchParams(location.search);
  const requested = params.get("brand");
  if (requested && brands.some(b => b.id === requested)) {
    tabsEl.querySelectorAll(".brand-tab").forEach(b =>
      b.classList.toggle("active", b.dataset.brand === requested)
    );
    draw(requested);
  } else {
    draw("all");
  }
}

function renderPopularPage() {
  const gridEl = document.querySelector("[data-popular-page]");
  if (!gridEl) return;
  let items = [];
  PRODUCT_DATA.brands.forEach(b => {
    b.items.forEach(it => {
      if (it.popular) items.push({ ...it, brandName: b.name });
    });
  });
  gridEl.innerHTML = items.length
    ? items.map(it => productCardHTML(it, it.brandName)).join("")
    : `<div class="empty-state">No products marked popular yet. Set "popular: true" on an item in js/data.js.</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductsPage();
  renderPopularPage();
});
