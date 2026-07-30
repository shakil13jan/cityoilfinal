/* ============================================================
   PRODUCT DATA
   ------------------------------------------------------------
   HOW TO ADD A NEW PRODUCT (no admin panel needed):
   1. Put the product photo inside:  images/<brand-folder>/yourfile.jpg
      Brand folders already created: images/amirath, images/mobil,
      images/bp, images/castrol
   2. Copy one object below and paste it inside the matching
      brand's "items" array. Fill in the fields.
   3. Save the file and refresh products.html — that's it.

   Fields:
     name    -> product name shown on the card
     spec    -> short spec line, e.g. "20W-50 · 4L · Mineral"
     tag     -> small label, e.g. "4L", "1L", "Diesel", "Synthetic"
     image   -> path to the photo you added in step 1
     popular -> true/false, shows a "Popular" ribbon and lists it
                on the Popular Products page
   ============================================================ */

const PRODUCT_DATA = {
  brands: [
    {
      id: "amirath",
      name: "Amirath Lube",
      tagline: "Trusted engine protection, everyday value.",
      items: [
        {
          name: "Amirath Oil Treatment",
          spec: "20W-50 · 4L · Mineral · Petrol & Diesel Engines",
          tag: "4L",
          image: "images/amirath/amirath_oil_treatment.png",
          popular: true
        },
        {
          name: "Amirath Diesel Power",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/Diesel-Power-5L.png",
          popular: false
        },
        {
          name: "Amirath HD 50",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/HD-50-5L.png",
          popular: false
        },
        {
          name: "Amirath Max King",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/max-king-4L.png",
          popular: false
        },
        {
          name: "Amirath Max Power",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/max-Power-5L.png",
          popular: false
        },
        {
          name: "Amirath SEO 1000",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/seo1000.png",
          popular: false
        },
        {
          name: "Amirath Speed 4T Plus",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/speed-4t-plus-20w50.png",
          popular: false
        },
        {
          name: "Amirath Super Max",
          spec: "15W-40 · 4L · Mineral · Heavy Duty",
          tag: "4L",
          image: "images/amirath/Super-Max-5L.png",
          popular: false
        }
      ]
    },
    {
      id: "mobil",
      name: "Mobil",
      tagline: "British engineering, dependable performance.",
      items: [
        {
          name: "Mobil 4 AT",
          spec: "15W-40 · 4L · Diesel Engine Oil",
          tag: "4L",
          image: "images/mobil/Mobil-4-AT.png",
          popular: false
        },
         {
          name: "Mobil 5W 30 ",
          spec: "15W-40 · 4L · Triple Action Power",
          tag: "4L",
          image: "images/mobil/MObil-5W-30.png",
          popular: false
        },
         {
          name: "Mobil Delvac",
          spec: "15W-40 · 4L · Diesel Engine Oil",
          tag: "4L",
          image: "images/mobil/MobilDelvac.png",
          popular: false
        },
         {
          name: "Mobil Delvac 5W 40",
          spec: "15W-40 · 4L · Diesel Engine Oil",
          tag: "4L",
          image: "images/mobil/mobil-devac 5w-40.png",
          popular: false
        }
      ]
    },
    {
      id: "bp",
      name: "BP",
      tagline: "British engineering, dependable performance.",
      items: [
        {
          name: "BP Visco 2000",
          spec: "15W-40 · 4L · Diesel Engine Oil",
          tag: "4L",
          image: "images/bp/bp-visco-2000.png",
          popular: false
        },
        {
          name: "BP Visco 3000",
          spec: "20W-50 · 4L · Diesel Engine Oil",
          tag: "4L",
          image: "images/bp/BP-VISCO-3000-20W-50.png",
          popular: false
        }
      ]
    },
    {
      id: "castrol",
      name: "Castrol",
      tagline: "Engineered for performance, built to last.",
      items: [
        {
          name: "Castrol GTX 20W-50",
          spec: "0W-20 · 4L · Mineral",
          tag: "4L",
          image: "images/castrol/castrol-0w20.png",
          popular: true
        },
        {
          name: "Castrol GTX Magenet",
          spec: "5W-30 · 4L · Semi Synthetic",
          tag: "4L",
          image: "images/castrol/castrol-5w-30.png",
          popular: false
        },
        {
          name: "Castrol Magnatec 10W-30",
          spec: "10W-30 · 4L · Semi Synthetic",
          tag: "4L",
          image: "images/castrol/castrol-10w30.png",
          popular: false
        },
        {
          name: "Castrol Power 1",
          spec: "5W-30 · 4L · Semi Synthetic",
          tag: "4L",
          image: "images/castrol/castrol-20w-50.png",
          popular: false
        },
        {
          name: "Castrol GTX 20W-50",
          spec: "20W-50 · 4L · Semi Synthetic",
          tag: "4L",
          image: "images/castrol/castrol-gtx-20w50.png",
          popular: false
        }
      ]
    }
  ]
};
