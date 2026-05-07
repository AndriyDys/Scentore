# ScentMatch Perfume Database

Add more perfumes in `perfume-database.js` by pushing objects into `window.SCENTMATCH_PERFUME_DATABASE`.

Douglas-style entries live in `douglas-catalog.js` under `window.SCENTMATCH_DOUGLAS_CATALOG`. Keep that file for products you want to label as `Douglas-ready catalog`.

Popular designer brand counts live in `brand-directory.js` under `window.SCENTMATCH_BRAND_DIRECTORY`. This file is a directory/index only. It does not mean every perfume name from every brand is already in the local perfume database.

Focused brand entries for Acqua di Parma, Creed, and Louis Vuitton live in `focused-brand-catalog.js` under `window.SCENTMATCH_FOCUSED_BRAND_CATALOG`.

Each perfume can have:

```js
{
  id: "unique-slug",
  brand: "Brand",
  name: "Perfume Name",
  image: "assets/perfumes/brand-perfume.jpg",
  notes: ["Vanilla", "Amber"],
  accords: ["Sweet", "Warm Spicy"],
  seasons: ["Autumn", "Winter"],
  occasions: ["Date Night", "Special Occasion"]
}
```

Put licensed product photos in `assets/perfumes/` and reference them with the `image` field. Do not scrape Fragrantica, Douglas, or another store's images/database content unless you have written permission, a supplier feed, or a valid commercial license.
