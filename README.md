# City Oil Agency — Website

Plain HTML / CSS / JS. No backend, no admin panel — you manage products
by editing one file and dropping in images.

## Folder structure
```
city-oil-agency/
├─ index.html        (home page, animated hero)
├─ products.html      (all products, brand tabs)
├─ popular.html        (popular products only)
├─ contact.html         (contact info + form)
├─ css/style.css
├─ js/
│  ├─ data.js         ← YOU EDIT THIS to add/change products
│  ├─ main.js
│  └─ products-render.js
└─ images/
   ├─ amirath/
   ├─ mobil/
   ├─ bp/
   └─ castrol/
```

## How to add a new product (no admin panel required)
1. Save the product photo into the right brand folder, e.g.
   `images/mobil/mobil-1-esp.jpg`
2. Open `js/data.js`, find that brand's `items` array, and add a new
   entry, copying the pattern already there:
   ```js
   {
     name: "Mobil 1 ESP",
     spec: "5W-30 · 1L · Fully Synthetic",
     tag: "1L",
     image: "images/mobil/mobil-1-esp.jpg",
     popular: false
   }
   ```
3. Set `popular: true` if it should also appear on the Popular
   Products page.
4. Save and refresh the browser — no build step needed.

## Adding a whole new brand
Add a new object to the `brands` array in `js/data.js` (give it an
`id`, `name`, `tagline`, and an `items` array), then create a matching
folder under `images/` for its photos. It will automatically appear
as a new tab on the Products page and in the header/footer brand
links style already used.

## Notes
- Product images use `object-fit: contain`, so any photo size/ratio
  displays fully without being cropped.
- If an image path is wrong or missing, a "photo coming soon"
  placeholder shows automatically instead of a broken image icon.
- Update the phone/email/address placeholders in `contact.html` with
  your real details.
