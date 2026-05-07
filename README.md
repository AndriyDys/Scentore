# Scentora

Scentora is a personalized perfume recommendation website. The project helps users find fragrances that match their real taste by combining perfume preferences, favorite notes, avoided notes, season, occasion, and match scoring.

The website works like a small fragrance stylist: users add perfumes they like or dislike, build a personal Scent DNA profile, and receive ranked perfume matches with descriptions, performance details, generated bottle visuals, wishlist actions, and buying links.

## Features

- Personalized perfume recommendation system
- Scent DNA profile with note and style breakdown
- Perfume catalog with search, brand filter, and season filter
- Brand browser with 120 popular perfume brands
- Current local database with 216 perfume records
- Focused catalog for Acqua di Parma, Creed, and Louis Vuitton
- Douglas-ready catalog section
- Notes users like and notes users want to avoid
- Top match cards with match score and explanation
- Perfume detail modal with notes, performance, and Where to buy links
- Wishlist saved in localStorage
- Automatically generated bottle images for perfumes without real product photos
- Light, clean, easy-to-use interface

## Project Structure

```text
Scentora/
  index.html
  styles.css
  script.js
  package.json
  assets/
    perfumes/
      placeholder.svg
  data/
    perfume-database.js
    douglas-catalog.js
    focused-brand-catalog.js
    brand-directory.js
    README.md
```

## Main Files

`index.html` contains the page structure: hero, matching builder, Scent DNA, recommendations, catalog, brands, comparison, wishlist, and perfume detail dialog.

`styles.css` contains the full visual design, responsive layout, light theme, cards, buttons, catalog styling, and modal styling.

`script.js` contains the app logic: perfume scoring, rendering, filtering, wishlist, Scent DNA generation, generated bottle images, and buy links.

`data/perfume-database.js` contains the starter perfume database.

`data/douglas-catalog.js` contains Douglas-ready perfume entries.

`data/focused-brand-catalog.js` contains additional perfume entries for Acqua di Parma, Creed, and Louis Vuitton.

`data/brand-directory.js` contains the popular brand directory and perfume counts.

## How to Run

This is a static website. You can open `index.html` directly in a browser.

In WebStorm, open the project folder and run the page using the built-in browser preview or open:

```text
C:\Users\andri\GitHub\Scentora\index.html
```

No build step is required.

## How Recommendations Work

Scentora scores perfumes using:

- perfumes the user loves, likes, dislikes, or wants something similar to
- selected favorite notes
- avoided notes
- selected seasons
- selected occasions
- perfume accords, notes, performance, and rating

The final result is shown as a match percentage from 0 to 100.

## How to Add a Perfume

Add a new object to one of the data files, for example `data/perfume-database.js`:

```js
{
  id: "brand-perfume-name",
  brand: "Brand Name",
  name: "Perfume Name",
  rating: 4.3,
  release: 2024,
  gender: "Unisex",
  notes: ["Vanilla", "Amber", "Bergamot"],
  accords: ["Sweet", "Amber", "Fresh"],
  seasons: ["Autumn", "Winter"],
  occasions: ["Date Night", "Special Occasion"],
  description: "Short perfume description.",
  longevity: "Long Lasting",
  projection: "Moderate",
  tone: "#b8863f",
  source: "ScentMatch starter database"
}
```

If no image is provided, the website automatically creates a local generated bottle visual.

## How to Add Real Perfume Photos

Put image files inside:

```text
assets/perfumes/
```

Then add an `image` field to the perfume:

```js
image: "assets/perfumes/dior-sauvage-elixir.webp"
```

Recommended image format:

- WebP
- 400-600 px height
- 50-150 KB per image if possible

Do not copy images or databases from Fragrantica, Douglas, or other websites unless you have permission, a licensed feed, or rights to use those assets.

## Current Database Size

- 216 perfume records
- 120 brand directory entries
- 64 Douglas-ready entries
- 103 focused entries for Acqua di Parma, Creed, and Louis Vuitton

## Future Ideas

- User accounts
- CSV or JSON import for large perfume databases
- Real product photos from licensed sources
- Price comparison
- Dupe finder
- Similar but cheaper recommendations
- AI perfume assistant
- Reviews and ratings
- Better mobile navigation

## Project Goal

The goal of Scentora is to make perfume discovery easier, more personal, and less risky than blind-buying. Instead of only showing popular fragrances, the website focuses on the question:

Will this perfume match my taste?
