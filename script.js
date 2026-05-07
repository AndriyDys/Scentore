const defaultPerfumes = [
  {
    id: "tobacco-vanille",
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    rating: 4.6,
    release: 2007,
    gender: "Unisex",
    notes: ["Tobacco", "Vanilla", "Cacao", "Tonka Bean", "Dried Fruits", "Woody Notes", "Warm Spices"],
    accords: ["Vanilla", "Tobacco", "Sweet", "Warm Spicy", "Fruity", "Woody"],
    seasons: ["Autumn", "Winter"],
    occasions: ["Date Night", "Formal Event", "Special Occasion", "Luxury Feel", "Dark & Mysterious"],
    vibe: "Bold, warm, expensive, sweet, and sensual.",
    description: "A warm, rich, and spicy vanilla-tobacco fragrance with a luxurious and confident character.",
    longevity: "Very Long Lasting",
    projection: "Strong",
    sillage: "Heavy",
    versatility: "Medium",
    compliment: "High",
    price: "Luxury",
    tone: "#4a151e",
    pyramid: {
      top: "Tobacco Leaf, Spicy Notes",
      middle: "Vanilla, Cacao, Tonka Bean, Tobacco Blossom",
      base: "Dried Fruits, Woody Notes"
    }
  },
  {
    id: "angels-share",
    brand: "Kilian",
    name: "Angels' Share",
    rating: 4.5,
    release: 2020,
    gender: "Unisex",
    notes: ["Cognac", "Cinnamon", "Tonka Bean", "Oak", "Vanilla", "Praline", "Amber"],
    accords: ["Warm Spicy", "Sweet", "Boozy", "Vanilla", "Woody", "Amber"],
    seasons: ["Autumn", "Winter"],
    occasions: ["Date Night", "Special Occasion", "Party", "Luxury Feel", "Sweet & Addictive"],
    vibe: "Warm, boozy, polished, sweet, and seductive.",
    description: "A rich and addictive fragrance with cognac, cinnamon, tonka bean, oak, vanilla, and praline.",
    longevity: "Long Lasting",
    projection: "Moderate to Strong",
    sillage: "Moderate",
    versatility: "Medium",
    compliment: "Very High",
    price: "Luxury",
    tone: "#7a3d24",
    pyramid: {
      top: "Cognac, Cinnamon",
      middle: "Tonka Bean, Oak",
      base: "Vanilla, Praline, Sandalwood"
    }
  },
  {
    id: "naxos",
    brand: "Xerjoff",
    name: "Naxos",
    rating: 4.7,
    release: 2015,
    gender: "Unisex",
    notes: ["Honey", "Tobacco", "Vanilla", "Lavender", "Bergamot", "Cinnamon", "Tonka Bean"],
    accords: ["Sweet", "Tobacco", "Citrus", "Lavender", "Warm Spicy", "Vanilla"],
    seasons: ["Spring", "Autumn", "Winter"],
    occasions: ["Date Night", "Formal Event", "Signature Scent", "Luxury Feel", "Compliment Getter"],
    vibe: "Luxurious, smooth, sweet, confident, and elegant.",
    description: "A smoother tobacco-vanilla profile brightened by honey, lavender, citrus, and spices.",
    longevity: "Very Long Lasting",
    projection: "Strong",
    sillage: "Strong",
    versatility: "High",
    compliment: "Very High",
    price: "Luxury",
    tone: "#a77638",
    pyramid: {
      top: "Bergamot, Lemon, Lavender",
      middle: "Honey, Cinnamon, Jasmine",
      base: "Tobacco, Vanilla, Tonka Bean"
    }
  },
  {
    id: "by-the-fireplace",
    brand: "Maison Margiela",
    name: "By the Fireplace",
    rating: 4.3,
    release: 2015,
    gender: "Unisex",
    notes: ["Smoke", "Chestnut", "Vanilla", "Clove", "Cashmere Wood", "Orange Blossom", "Pink Pepper"],
    accords: ["Smoky", "Woody", "Vanilla", "Warm Spicy", "Sweet", "Balsamic"],
    seasons: ["Autumn", "Winter"],
    occasions: ["Cozy Evening", "Date Night", "Vacation", "Dark & Mysterious"],
    vibe: "Cozy, smoky, sweet, warm, and nostalgic.",
    description: "A smoky chestnut and vanilla scent that feels like cold weather, sweaters, and glowing wood.",
    longevity: "Long Lasting",
    projection: "Moderate",
    sillage: "Moderate",
    versatility: "Medium",
    compliment: "High",
    price: "Designer",
    tone: "#5c2d1d",
    pyramid: {
      top: "Pink Pepper, Orange Blossom, Clove",
      middle: "Chestnut, Guaiac Wood, Juniper",
      base: "Vanilla, Peru Balsam, Cashmere Wood"
    }
  },
  {
    id: "sauvage",
    brand: "Dior",
    name: "Sauvage",
    rating: 4.1,
    release: 2015,
    gender: "Masculine",
    notes: ["Bergamot", "Pepper", "Ambroxan", "Lavender", "Vetiver", "Patchouli"],
    accords: ["Fresh Spicy", "Citrus", "Amber", "Aromatic", "Woody", "Clean"],
    seasons: ["Spring", "Summer", "All Year"],
    occasions: ["Everyday", "Office", "School / University", "Gym", "Compliment Getter"],
    vibe: "Fresh, sharp, clean, modern, and high-energy.",
    description: "A bright fresh spicy fragrance with bergamot, pepper, ambroxan, and clean woods.",
    longevity: "Long Lasting",
    projection: "Strong",
    sillage: "Strong",
    versatility: "Very High",
    compliment: "High",
    price: "Designer",
    tone: "#1f3345",
    pyramid: {
      top: "Calabrian Bergamot, Pepper",
      middle: "Lavender, Sichuan Pepper, Patchouli",
      base: "Ambroxan, Cedar, Labdanum"
    }
  },
  {
    id: "libre",
    brand: "YSL",
    name: "Libre",
    rating: 4.2,
    release: 2019,
    gender: "Feminine",
    notes: ["Lavender", "Orange Blossom", "Vanilla", "Musk", "Jasmine", "Mandarin Orange"],
    accords: ["White Floral", "Lavender", "Vanilla", "Citrus", "Musky", "Sweet"],
    seasons: ["Spring", "Autumn", "All Year"],
    occasions: ["Office", "Formal Event", "Signature Scent", "Luxury Feel", "Everyday"],
    vibe: "Elegant, clean, floral, confident, and polished.",
    description: "A modern floral vanilla fragrance with lavender, orange blossom, musk, and a confident designer finish.",
    longevity: "Long Lasting",
    projection: "Moderate to Strong",
    sillage: "Moderate",
    versatility: "High",
    compliment: "High",
    price: "Designer",
    tone: "#7c6a95",
    pyramid: {
      top: "Mandarin Orange, Lavender, Blackcurrant",
      middle: "Orange Blossom, Jasmine, Lavender",
      base: "Madagascar Vanilla, Musk, Cedar"
    }
  },
  {
    id: "baccarat-rouge-540",
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    rating: 4.4,
    release: 2015,
    gender: "Unisex",
    notes: ["Saffron", "Amberwood", "Jasmine", "Cedar", "Fir Resin", "Musk"],
    accords: ["Amber", "Woody", "Sweet", "Musky", "Fresh Spicy", "Resin"],
    seasons: ["Spring", "Autumn", "Winter", "All Year"],
    occasions: ["Special Occasion", "Luxury Feel", "Compliment Getter", "Signature Scent", "Party"],
    vibe: "Airy, expensive, radiant, sweet, and unmistakable.",
    description: "A luminous amber-woody fragrance with saffron, jasmine, cedar, amberwood, and a crystal-sweet aura.",
    longevity: "Very Long Lasting",
    projection: "Strong",
    sillage: "Heavy",
    versatility: "High",
    compliment: "Very High",
    price: "Luxury",
    tone: "#8c2638",
    pyramid: {
      top: "Saffron, Jasmine",
      middle: "Amberwood, Ambergris",
      base: "Fir Resin, Cedar"
    }
  },
  {
    id: "coco-mademoiselle",
    brand: "Chanel",
    name: "Coco Mademoiselle",
    rating: 4.3,
    release: 2001,
    gender: "Feminine",
    notes: ["Orange", "Rose", "Jasmine", "Patchouli", "Vetiver", "Vanilla", "Musk"],
    accords: ["Citrus", "Patchouli", "Rose", "Woody", "Sweet", "Elegant"],
    seasons: ["Spring", "Autumn", "All Year"],
    occasions: ["Office", "Formal Event", "Everyday", "Signature Scent", "Luxury Feel"],
    vibe: "Elegant, sparkling, polished, floral, and timeless.",
    description: "A bright citrus rose-patchouli fragrance with a clean, chic, and expensive feeling.",
    longevity: "Long Lasting",
    projection: "Moderate",
    sillage: "Moderate",
    versatility: "Very High",
    compliment: "High",
    price: "Designer",
    tone: "#c39183",
    pyramid: {
      top: "Orange, Mandarin, Bergamot",
      middle: "Rose, Jasmine, Mimosa",
      base: "Patchouli, Vetiver, Vanilla, Musk"
    }
  },
  {
    id: "herod",
    brand: "Parfums de Marly",
    name: "Herod",
    rating: 4.4,
    release: 2012,
    gender: "Masculine",
    notes: ["Tobacco", "Vanilla", "Cinnamon", "Pepper", "Incense", "Osmanthus", "Cedar"],
    accords: ["Tobacco", "Vanilla", "Warm Spicy", "Sweet", "Woody", "Incense"],
    seasons: ["Autumn", "Winter"],
    occasions: ["Date Night", "Cozy Evening", "Formal Event", "Dark & Mysterious"],
    vibe: "Smooth, masculine-leaning, warm, smoky, and refined.",
    description: "A smooth tobacco vanilla scent with cinnamon, incense, pepper, and polished woods.",
    longevity: "Long Lasting",
    projection: "Moderate",
    sillage: "Moderate",
    versatility: "Medium",
    compliment: "High",
    price: "Luxury",
    tone: "#3e2321",
    pyramid: {
      top: "Cinnamon, Pepper",
      middle: "Tobacco Leaf, Incense, Osmanthus",
      base: "Vanilla, Iso E Super, Cedar"
    }
  },
  {
    id: "gris-charnel",
    brand: "BDK",
    name: "Gris Charnel",
    rating: 4.5,
    release: 2019,
    gender: "Unisex",
    notes: ["Fig", "Black Tea", "Cardamom", "Sandalwood", "Tonka Bean", "Iris", "Vetiver"],
    accords: ["Tea", "Woody", "Powdery", "Spicy", "Creamy", "Fig"],
    seasons: ["Spring", "Autumn", "Winter", "All Year"],
    occasions: ["Office", "Date Night", "Signature Scent", "Luxury Feel", "Everyday"],
    vibe: "Soft, intimate, creamy, elegant, and slightly mysterious.",
    description: "A creamy black tea, fig, cardamom, iris, sandalwood, and tonka scent with quiet magnetism.",
    longevity: "Long Lasting",
    projection: "Moderate",
    sillage: "Moderate",
    versatility: "High",
    compliment: "High",
    price: "Luxury",
    tone: "#56615e",
    pyramid: {
      top: "Cardamom, Fig, Black Tea",
      middle: "Iris, Bourbon Vetiver",
      base: "Sandalwood, Tonka Bean"
    }
  },
  {
    id: "lost-cherry",
    brand: "Tom Ford",
    name: "Lost Cherry",
    rating: 4.1,
    release: 2018,
    gender: "Unisex",
    notes: ["Cherry", "Almond", "Tonka Bean", "Vanilla", "Cinnamon", "Rose", "Peru Balsam"],
    accords: ["Cherry", "Sweet", "Almond", "Fruity", "Vanilla", "Warm Spicy"],
    seasons: ["Autumn", "Winter", "Spring"],
    occasions: ["Date Night", "Party", "Special Occasion", "Sweet & Addictive"],
    vibe: "Juicy, playful, decadent, sweet, and seductive.",
    description: "A dark cherry-almond gourmand wrapped in vanilla, tonka, rose, and warm balsamic notes.",
    longevity: "Moderate",
    projection: "Moderate",
    sillage: "Moderate",
    versatility: "Medium",
    compliment: "High",
    price: "Luxury",
    tone: "#741b2c",
    pyramid: {
      top: "Cherry, Bitter Almond, Liquor",
      middle: "Sour Cherry, Plum, Turkish Rose",
      base: "Tonka Bean, Vanilla, Cinnamon, Peru Balsam"
    }
  },
  {
    id: "light-blue",
    brand: "Dolce & Gabbana",
    name: "Light Blue",
    rating: 4.0,
    release: 2001,
    gender: "Feminine",
    notes: ["Lemon", "Apple", "Cedar", "Bamboo", "Jasmine", "Musk", "Amber"],
    accords: ["Citrus", "Fresh", "Woody", "Green", "Clean", "Musky"],
    seasons: ["Spring", "Summer"],
    occasions: ["Everyday", "Vacation", "Gym", "Office", "School / University"],
    vibe: "Fresh, sunny, clean, casual, and easy.",
    description: "A crisp citrus-apple fragrance with cedar, bamboo, jasmine, musk, and a breezy summer feel.",
    longevity: "Moderate",
    projection: "Soft to Moderate",
    sillage: "Soft",
    versatility: "High",
    compliment: "Medium",
    price: "Designer",
    tone: "#8fb7bb",
    pyramid: {
      top: "Lemon, Apple, Cedar, Bellflower",
      middle: "Bamboo, Jasmine, White Rose",
      base: "Cedar, Musk, Amber"
    }
  }
];

const placeholderImage = "assets/perfumes/placeholder.svg";
const externalPerfumes = Array.isArray(window.SCENTMATCH_PERFUME_DATABASE) ? window.SCENTMATCH_PERFUME_DATABASE : [];
const douglasPerfumes = Array.isArray(window.SCENTMATCH_DOUGLAS_CATALOG) ? window.SCENTMATCH_DOUGLAS_CATALOG : [];
const focusedBrandPerfumes = Array.isArray(window.SCENTMATCH_FOCUSED_BRAND_CATALOG) ? window.SCENTMATCH_FOCUSED_BRAND_CATALOG : [];
const brandDirectory = Array.isArray(window.SCENTMATCH_BRAND_DIRECTORY) ? window.SCENTMATCH_BRAND_DIRECTORY : [];
const perfumes = mergePerfumeDatabases([...defaultPerfumes, ...externalPerfumes, ...douglasPerfumes, ...focusedBrandPerfumes]);

const noteCategories = {
  "Sweet & Gourmand": ["Vanilla", "Caramel", "Chocolate", "Honey", "Tonka Bean", "Almond", "Coffee", "Marshmallow", "Praline"],
  Fresh: ["Bergamot", "Lemon", "Orange", "Mint", "Green Tea", "Aquatic Notes", "Sea Salt", "Cucumber"],
  Floral: ["Rose", "Jasmine", "Iris", "Peony", "Lavender", "Orange Blossom", "Tuberose", "Violet"],
  "Warm & Spicy": ["Cinnamon", "Cardamom", "Clove", "Pink Pepper", "Saffron", "Nutmeg", "Ginger"],
  Woody: ["Sandalwood", "Cedar", "Oud", "Vetiver", "Patchouli", "Cashmere Wood"],
  "Dark & Sensual": ["Leather", "Tobacco", "Incense", "Amber", "Musk", "Rum", "Smoke", "Resin"],
  Fruity: ["Cherry", "Peach", "Apple", "Pear", "Raspberry", "Blackcurrant", "Coconut", "Plum"]
};

const avoidOptions = [
  "Too much musk",
  "Heavy oud",
  "Powdery notes",
  "Strong rose",
  "Animalic notes",
  "Very sweet perfumes",
  "Soapy scents",
  "Smoky scents",
  "Sharp citrus",
  "Heavy patchouli",
  "Old-fashioned floral scents",
  "Synthetic smell",
  "Very strong projection",
  "Aquatic notes",
  "Green notes"
];

const seasons = ["Spring", "Summer", "Autumn", "Winter", "All Year"];
const occasions = [
  "Everyday",
  "Office",
  "Date Night",
  "Party",
  "Formal Event",
  "School / University",
  "Gym",
  "Vacation",
  "Cozy Evening",
  "Special Occasion",
  "Signature Scent",
  "Compliment Getter",
  "Luxury Feel",
  "Clean Girl / Clean Boy Aesthetic",
  "Dark & Mysterious",
  "Sweet & Addictive"
];

const avoidMap = {
  "Too much musk": ["Musk", "Musky"],
  "Heavy oud": ["Oud"],
  "Powdery notes": ["Powdery", "Iris"],
  "Strong rose": ["Rose"],
  "Animalic notes": ["Animalic"],
  "Very sweet perfumes": ["Sweet", "Caramel", "Praline", "Marshmallow", "Honey"],
  "Soapy scents": ["Soapy", "Clean"],
  "Smoky scents": ["Smoke", "Smoky", "Incense"],
  "Sharp citrus": ["Bergamot", "Lemon", "Orange", "Citrus"],
  "Heavy patchouli": ["Patchouli"],
  "Old-fashioned floral scents": ["Rose", "Jasmine", "White Floral"],
  "Synthetic smell": ["Ambroxan"],
  "Very strong projection": ["Strong", "Heavy"],
  "Aquatic notes": ["Aquatic Notes"],
  "Green notes": ["Green", "Vetiver"]
};

const state = {
  selectedSentiment: "love",
  collection: [],
  wantedNotes: new Set(["Vanilla", "Tobacco", "Amber"]),
  avoidedNotes: new Set(),
  seasons: new Set(["Autumn", "Winter"]),
  occasions: new Set(["Date Night", "Special Occasion"]),
  wishlist: new Set(JSON.parse(localStorage.getItem("scentmatchWishlist") || "[]")),
  scores: new Map(),
  showLoadedBrandsOnly: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const generatedImageCache = new Map();

function mergePerfumeDatabases(items) {
  const merged = new Map();

  items.filter(Boolean).forEach((item) => {
    const normalized = normalizePerfumeRecord(item);
    if (!normalized.id) return;
    const current = merged.get(normalized.id) || {};
    merged.set(normalized.id, normalizePerfumeRecord({ ...current, ...normalized }));
  });

  return [...merged.values()];
}

function normalizePerfumeRecord(item) {
  const brand = String(item.brand || "Unknown Brand").trim();
  const name = String(item.name || "Unnamed Perfume").trim();
  const fallbackPyramid = item.pyramid || {};

  return {
    id: item.id || slugify(`${brand}-${name}`),
    brand,
    name,
    rating: Number(item.rating || 4),
    release: item.release || "Unknown",
    gender: item.gender || "Unisex",
    notes: ensureArray(item.notes),
    accords: ensureArray(item.accords),
    seasons: ensureArray(item.seasons),
    occasions: ensureArray(item.occasions),
    vibe: item.vibe || "Balanced, wearable, and worth exploring.",
    description: item.description || "A fragrance profile ready for richer notes, image, and performance data.",
    longevity: item.longevity || "Moderate",
    projection: item.projection || "Moderate",
    sillage: item.sillage || "Moderate",
    versatility: item.versatility || "Medium",
    compliment: item.compliment || "Medium",
    price: item.price || "Unknown",
    tone: item.tone || "#4a151e",
    image: item.image || "",
    source: item.source || "ScentMatch starter database",
    buyLinks: normalizeBuyLinks(item.buyLinks, brand, name),
    pyramid: {
      top: fallbackPyramid.top || ensureArray(item.notes).slice(0, 3).join(", ") || "To be added",
      middle: fallbackPyramid.middle || ensureArray(item.notes).slice(3, 6).join(", ") || "To be added",
      base: fallbackPyramid.base || ensureArray(item.notes).slice(6).join(", ") || "To be added"
    }
  };
}

function ensureArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return String(value).split(",").map((item) => item.trim()).filter(Boolean);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeAttr(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeSvg(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeBuyLinks(links, brand, name) {
  if (Array.isArray(links) && links.length) {
    return links
      .filter((link) => link && link.url)
      .map((link) => ({
        label: link.label || "Buy",
        url: link.url
      }));
  }

  return createDefaultBuyLinks(brand, name);
}

function createDefaultBuyLinks(brand, name) {
  const query = encodeURIComponent(`${brand} ${name} perfume`);
  return [
    {
      label: "Douglas NL",
      url: `https://www.douglas.nl/nl/search?q=${query}`
    },
    {
      label: "Douglas BE",
      url: `https://www.douglas.be/nl/search?q=${query}`
    },
    {
      label: "Notino",
      url: `https://www.notino.nl/search.asp?exps=${query}`
    },
    {
      label: "Google Shopping",
      url: `https://www.google.com/search?tbm=shop&q=${query}`
    }
  ];
}

function perfumeImageMarkup(perfume) {
  const src = escapeAttr(perfume.image || generatedBottleDataUri(perfume));
  const alt = escapeAttr(`${perfume.brand} ${perfume.name} bottle image`);
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderImage}';">`;
}

function generatedBottleDataUri(perfume) {
  if (generatedImageCache.has(perfume.id)) {
    return generatedImageCache.get(perfume.id);
  }

  const tone = escapeSvg(perfume.tone || "#4a151e");
  const brand = splitSvgLabel(perfume.brand, 18).slice(0, 2);
  const name = splitSvgLabel(perfume.name, 18).slice(0, 3);
  const initials = escapeSvg(getInitials(perfume));
  const brandText = brand.map((line, index) => `<text x="360" y="${586 + index * 32}" text-anchor="middle" fill="#f4efe7" font-family="Arial, sans-serif" font-size="24" font-weight="700">${escapeSvg(line)}</text>`).join("");
  const nameText = name.map((line, index) => `<text x="360" y="${646 + index * 34}" text-anchor="middle" fill="#e1c88e" font-family="Georgia, serif" font-size="28" font-weight="700">${escapeSvg(line)}</text>`).join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 920" role="img">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fffaf2"/>
          <stop offset="0.48" stop-color="#d8c3a5"/>
          <stop offset="1" stop-color="${tone}"/>
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.52"/>
          <stop offset="0.32" stop-color="#f2dfb8" stop-opacity="0.3"/>
          <stop offset="1" stop-color="${tone}" stop-opacity="0.86"/>
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f4dd9f"/>
          <stop offset="1" stop-color="#b5853f"/>
        </linearGradient>
      </defs>
      <rect width="720" height="920" fill="url(#bg)"/>
      <circle cx="612" cy="152" r="210" fill="#ffffff" opacity="0.18"/>
      <circle cx="110" cy="756" r="240" fill="#000000" opacity="0.12"/>
      <ellipse cx="360" cy="805" rx="210" ry="55" fill="#000000" opacity="0.24"/>
      <rect x="305" y="118" width="110" height="76" rx="12" fill="#191512" stroke="#f2dfb8" stroke-opacity="0.45" stroke-width="5"/>
      <rect x="270" y="184" width="180" height="48" rx="12" fill="url(#gold)"/>
      <rect x="176" y="228" width="368" height="540" rx="54" fill="url(#glass)" stroke="#fffaf2" stroke-opacity="0.42" stroke-width="6"/>
      <path d="M220 262c45 28 88 38 138 34" fill="none" stroke="#ffffff" stroke-opacity="0.38" stroke-width="13" stroke-linecap="round"/>
      <circle cx="360" cy="414" r="102" fill="#17100f" fill-opacity="0.48" stroke="#f2dfb8" stroke-opacity="0.56" stroke-width="5"/>
      <text x="360" y="438" text-anchor="middle" fill="#fffaf2" font-family="Georgia, serif" font-size="72" font-weight="700">${initials}</text>
      <rect x="226" y="548" width="268" height="174" rx="18" fill="#17100f" fill-opacity="0.58" stroke="#f2dfb8" stroke-opacity="0.46" stroke-width="4"/>
      ${brandText}
      ${nameText}
    </svg>
  `.trim();

  const uri = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  generatedImageCache.set(perfume.id, uri);
  return uri;
}

function splitSvgLabel(value, maxLength) {
  const words = String(value || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.length ? lines : [String(value || "")];
}

function getInitials(perfume) {
  const letters = `${perfume.brand} ${perfume.name}`.match(/\b[A-Za-z0-9]/g) || ["S", "M"];
  return letters.slice(0, 2).join("").toUpperCase();
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function findPerfume(query) {
  const cleaned = normalize(query);
  return perfumes.find((perfume) => normalize(`${perfume.brand} ${perfume.name}`).includes(cleaned) || normalize(perfume.name) === cleaned);
}

function hasOverlap(source, targets) {
  return source.some((item) => targets.includes(item));
}

function saveWishlist() {
  localStorage.setItem("scentmatchWishlist", JSON.stringify([...state.wishlist]));
}

function renderDatalist() {
  const datalist = $("#perfumeOptions");
  datalist.innerHTML = perfumes.map((perfume) => `<option value="${perfume.brand} ${perfume.name}"></option>`).join("");
}

function renderBrandFilter() {
  const select = $("#catalogBrand");
  const brands = [...new Set(perfumes.map((perfume) => perfume.brand))].sort((a, b) => a.localeCompare(b));
  select.innerHTML = `<option value="">All brands</option>${brands.map((brand) => `<option value="${escapeAttr(brand)}">${brand}</option>`).join("")}`;
}

function renderNoteButtons() {
  $("#wantedNotes").innerHTML = Object.entries(noteCategories).map(([category, notes]) => `
    <div class="note-category">
      <h4>${category}</h4>
      <div class="note-list">
        ${notes.map((note) => `<button type="button" data-note="${note}" class="${state.wantedNotes.has(note) ? "active" : ""}">${note}</button>`).join("")}
      </div>
    </div>
  `).join("");

  $("#avoidNotes").innerHTML = avoidOptions.map((option) => `
    <button type="button" data-avoid="${option}" class="${state.avoidedNotes.has(option) ? "active" : ""}">${option}</button>
  `).join("");
}

function renderChoiceButtons() {
  $("#seasonChoices").innerHTML = seasons.map((season) => `
    <button type="button" data-season="${season}" class="${state.seasons.has(season) ? "active" : ""}">${season}</button>
  `).join("");

  $("#occasionChoices").innerHTML = occasions.map((occasion) => `
    <button type="button" data-occasion="${occasion}" class="${state.occasions.has(occasion) ? "active" : ""}">${occasion}</button>
  `).join("");
}

function renderCollection() {
  const list = $("#collectionList");
  if (!state.collection.length) {
    list.innerHTML = `<p class="empty-state">You have not added any perfumes yet. Add at least three fragrances you love to create your Scent DNA.</p>`;
    return;
  }

  list.innerHTML = state.collection.map((item, index) => `
    <div class="collection-item">
      <span class="mini-bottle" style="--tone:${item.perfume.tone}">${perfumeImageMarkup(item.perfume)}</span>
      <div>
        <strong>${item.perfume.name}</strong>
        <span>${item.perfume.brand} / ${sentimentLabel(item.sentiment)}</span>
      </div>
      <button class="icon-button" type="button" aria-label="Remove ${item.perfume.name}" data-remove="${index}">x</button>
    </div>
  `).join("");
}

function sentimentLabel(value) {
  const labels = {
    love: "Love",
    like: "Like",
    okay: "Okay",
    dislike: "Dislike",
    similar: "Similar",
    different: "Different"
  };
  return labels[value] || value;
}

function collectionWeights() {
  return state.collection.reduce((weights, item) => {
    const multiplier = {
      love: 1.15,
      like: 0.9,
      okay: 0.25,
      dislike: -1,
      similar: 1,
      different: -0.45
    }[item.sentiment] || 0;

    [...item.perfume.notes, ...item.perfume.accords, ...item.perfume.seasons, ...item.perfume.occasions].forEach((trait) => {
      weights[trait] = (weights[trait] || 0) + multiplier;
    });
    return weights;
  }, {});
}

function scorePerfume(perfume) {
  const weights = collectionWeights();
  let score = 48;
  const reasons = [];
  const allTraits = [...perfume.notes, ...perfume.accords, ...perfume.seasons, ...perfume.occasions, perfume.projection];

  const wantedMatches = perfume.notes.filter((note) => state.wantedNotes.has(note));
  const accordMatches = perfume.accords.filter((accord) => state.wantedNotes.has(accord));
  score += (wantedMatches.length * 10) + (accordMatches.length * 7);

  if (wantedMatches.length) {
    reasons.push(`it features ${wantedMatches.slice(0, 3).join(", ")}`);
  }

  const seasonMatches = perfume.seasons.filter((season) => state.seasons.has(season));
  if (seasonMatches.length) {
    score += 14;
    reasons.push(`it fits ${seasonMatches.join(" / ")}`);
  } else if (state.seasons.size) {
    score -= 12;
  }

  const occasionMatches = perfume.occasions.filter((occasion) => state.occasions.has(occasion));
  if (occasionMatches.length) {
    score += 12;
    reasons.push(`it works for ${occasionMatches.slice(0, 2).join(" and ")}`);
  } else if (state.occasions.size) {
    score -= 8;
  }

  Object.entries(weights).forEach(([trait, weight]) => {
    if (allTraits.includes(trait)) {
      score += weight * 5;
    }
  });

  const blocked = [...state.avoidedNotes].flatMap((option) => avoidMap[option] || [option]);
  const avoidHits = blocked.filter((blockedTrait) => allTraits.includes(blockedTrait));
  if (avoidHits.length) {
    score -= 22 + avoidHits.length * 6;
    reasons.push(`watch out: it includes ${avoidHits.slice(0, 2).join(", ")}`);
  }

  if (state.collection.some((item) => item.perfume.id === perfume.id && ["love", "like", "similar"].includes(item.sentiment))) {
    score -= 8;
  }

  score += Math.round((perfume.rating - 4) * 10);

  const finalScore = Math.max(5, Math.min(99, Math.round(score)));
  if (!reasons.length) {
    reasons.push("its balance of notes, season, and vibe makes it a flexible discovery");
  }

  return { score: finalScore, reason: reasons };
}

function getRecommendations() {
  const ranked = perfumes.map((perfume) => {
    const result = scorePerfume(perfume);
    state.scores.set(perfume.id, result.score);
    return { perfume, ...result };
  }).sort((a, b) => b.score - a.score).slice(0, 10);
  return ranked;
}

function renderRecommendations() {
  const recommendations = getRecommendations();
  $("#matchList").innerHTML = recommendations.map((item, index) => matchCard(item, index)).join("");
  $("#recommendationIntro").textContent = recommendations.length
    ? "Your matches are ready. We found fragrances that match your favorite notes, seasons, and scent style."
    : "We could not find a perfect match with these filters. Try removing one avoided note or choosing another season.";
}

function matchCard({ perfume, score, reason }, index) {
  const notes = perfume.accords.slice(0, 5).join(" / ");
  const bestFor = perfume.occasions.slice(0, 3).join(", ");
  return `
    <article class="match-card">
      <div class="rank-visual perfume-photo" style="--tone:${perfume.tone}">${perfumeImageMarkup(perfume)}<span>#${index + 1}</span></div>
      <div>
        <div class="match-meta"><span class="score-pill">${score}% Match</span><span>${perfume.seasons.join(" / ")}</span><span>${perfume.longevity}</span></div>
        <h3>${perfume.brand} - ${perfume.name}</h3>
        <p><strong>${notes}</strong></p>
        <p>Why you may love it: ${sentenceCase(reason[0])}. ${perfume.description}</p>
        <p><strong>Best for:</strong> ${bestFor}. <strong>Vibe:</strong> ${perfume.vibe}</p>
      </div>
      <div class="match-actions">
        <button class="secondary-button" type="button" data-view="${perfume.id}">View Details</button>
        <button class="secondary-button" type="button" data-wishlist="${perfume.id}">${state.wishlist.has(perfume.id) ? "Saved" : "Add to Wishlist"}</button>
        <button class="secondary-button" type="button" data-not-style="${perfume.id}">Not My Style</button>
      </div>
    </article>
  `;
}

function sentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderCatalog() {
  const query = normalize($("#catalogSearch").value || "");
  const brand = $("#catalogBrand").value;
  const season = $("#catalogSeason").value;
  const filtered = perfumes.filter((perfume) => {
    const haystack = normalize([perfume.brand, perfume.name, perfume.notes.join(" "), perfume.accords.join(" "), perfume.vibe].join(" "));
    const matchesSearch = !query || haystack.includes(query);
    const matchesBrand = !brand || perfume.brand === brand;
    const matchesSeason = !season || perfume.seasons.includes(season);
    return matchesSearch && matchesBrand && matchesSeason;
  });

  const douglasCount = perfumes.filter((perfume) => perfume.source === "Douglas-ready catalog").length;
  $("#catalogStats").textContent = `${filtered.length} of ${perfumes.length} fragrances shown, including ${douglasCount} Douglas-ready entries. Add legal product photos by setting the image field in the data files.`;

  $("#catalogGrid").innerHTML = filtered.map((perfume) => {
    const score = state.scores.get(perfume.id) || scorePerfume(perfume).score;
    return `
      <article class="catalog-card">
        <div class="catalog-top">
          <div class="catalog-visual perfume-photo" style="--tone:${perfume.tone}">${perfumeImageMarkup(perfume)}</div>
          <div>
            <span class="brand-name">${perfume.brand}</span>
            <h3>${perfume.name}</h3>
          </div>
        </div>
        <div class="match-meta">
          <span>${perfume.accords.slice(0, 4).join(" / ")}</span>
          <span>${perfume.seasons.join(" / ")}</span>
          <span>${score}% Match</span>
          <span>${perfume.source}</span>
        </div>
        <p>${perfume.description}</p>
        <div class="catalog-actions">
          <button class="secondary-button" type="button" data-view="${perfume.id}">View Perfume</button>
          <button class="secondary-button" type="button" data-wishlist="${perfume.id}">${state.wishlist.has(perfume.id) ? "Saved" : "Add to Wishlist"}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderWishlist() {
  const saved = perfumes.filter((perfume) => state.wishlist.has(perfume.id));
  if (!saved.length) {
    $("#wishlistGrid").innerHTML = `<p class="empty-state">Your wishlist is empty. Save a fragrance from Top Matches or Explore Popular Scents.</p>`;
    return;
  }

  $("#wishlistGrid").innerHTML = saved.map((perfume) => `
    <article class="wishlist-card">
      <span class="mini-bottle" style="--tone:${perfume.tone}">${perfumeImageMarkup(perfume)}</span>
      <div>
        <strong>${perfume.brand} - ${perfume.name}</strong>
        <span>${perfume.accords.slice(0, 4).join(" / ")}</span>
      </div>
      <button class="icon-button" type="button" aria-label="Remove ${perfume.name} from wishlist" data-wishlist="${perfume.id}">x</button>
    </article>
  `).join("");
}

function renderBrands() {
  if (!$("#brandGrid")) return;
  const query = normalize($("#brandSearch").value || "");
  const loadedMap = countLoadedPerfumesByBrand();
  const rows = getBrandDirectoryRows(loadedMap)
    .filter((brand) => {
      const haystack = normalize([brand.name, brand.displayName || "", ...(brand.aliases || [])].join(" "));
      const matchesSearch = !query || haystack.includes(query);
      const matchesLoaded = !state.showLoadedBrandsOnly || brand.loaded > 0;
      return matchesSearch && matchesLoaded;
    })
    .sort((a, b) => b.total - a.total);

  const totalListed = getBrandDirectoryRows(loadedMap).reduce((sum, brand) => sum + brand.total, 0);
  const totalLoadedBrands = getBrandDirectoryRows(loadedMap).filter((brand) => brand.loaded > 0).length;
  $("#brandStats").textContent = `${rows.length} brands shown. Directory total: ${totalListed.toLocaleString()} perfumes. Local database currently covers ${totalLoadedBrands} brands and ${perfumes.length} perfume records.`;
  $("#brandGrid").innerHTML = rows.map((brand) => brandCard(brand)).join("");
}

function countLoadedPerfumesByBrand() {
  return perfumes.reduce((map, perfume) => {
    const key = normalizeBrand(perfume.brand);
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());
}

function getBrandDirectoryRows(loadedMap) {
  const directoryRows = brandDirectory.map((brand) => {
    const keys = [brand.name, ...(brand.aliases || [])].map(normalizeBrand);
    const loaded = keys.reduce((sum, key) => sum + (loadedMap.get(key) || 0), 0);
    return {
      ...brand,
      displayName: brand.displayName || brand.name,
      loaded
    };
  });

  const knownKeys = new Set(directoryRows.flatMap((brand) => [brand.name, ...(brand.aliases || [])].map(normalizeBrand)));
  perfumes.forEach((perfume) => {
    const key = normalizeBrand(perfume.brand);
    if (!knownKeys.has(key)) {
      directoryRows.push({
        name: perfume.brand,
        displayName: perfume.brand,
        total: loadedMap.get(key) || 0,
        loaded: loadedMap.get(key) || 0,
        aliases: []
      });
      knownKeys.add(key);
    }
  });

  return directoryRows;
}

function normalizeBrand(value) {
  return normalize(String(value || "").replace(/&/g, "and").replace(/\s+/g, " "));
}

function brandCard(brand) {
  const percent = brand.total > 0 ? Math.min(100, Math.round((brand.loaded / brand.total) * 100)) : 100;
  const label = escapeAttr(brand.displayName);
  return `
    <article class="brand-card">
      <div>
        <span class="brand-count">${brand.total.toLocaleString()} listed</span>
        <h3>${brand.displayName}</h3>
        <p>${brand.loaded} perfumes currently available in ScentMatch.</p>
      </div>
      <div class="brand-progress" aria-label="${label} local coverage">
        <span style="--value:${percent}%"></span>
      </div>
      <div class="brand-actions">
        <button class="secondary-button" type="button" data-filter-brand="${label}">Show perfumes</button>
        <a class="secondary-button" href="https://www.google.com/search?q=${encodeURIComponent(`${brand.displayName} perfumes official`)}" target="_blank" rel="noreferrer">Find official data</a>
      </div>
    </article>
  `;
}

function renderDna() {
  const weights = collectionWeights();

  [...state.wantedNotes].forEach((note) => {
    weights[note] = (weights[note] || 0) + 2.4;
  });

  [...state.seasons].forEach((season) => {
    weights[season] = (weights[season] || 0) + 1.1;
  });

  [...state.occasions].forEach((occasion) => {
    weights[occasion] = (weights[occasion] || 0) + 1.2;
  });

  const ranked = Object.entries(weights)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 9);

  const display = ranked.length ? ranked : [["Vanilla", 4], ["Amber", 3.5], ["Warm Spicy", 3.2], ["Woods", 2.8], ["Tobacco", 2.3], ["Sweet Notes", 2.1]];
  const max = Math.max(...display.map(([, value]) => value), 1);
  const tags = display.slice(0, 5).map(([label]) => label);

  $("#dnaTitle").textContent = tags.slice(0, 3).join(" ");
  $("#dnaDescription").textContent = createDnaDescription(tags);
  $("#styleTags").innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
  $("#dnaBars").innerHTML = display.map(([label, value]) => {
    const percent = Math.max(8, Math.round((value / max) * 92));
    return `
      <div class="bar-row">
        <span class="bar-label">${label}</span>
        <span class="bar-track"><span class="bar-fill" style="--value:${percent}%"></span></span>
        <span class="bar-value">${percent}%</span>
      </div>
    `;
  }).join("");
}

function createDnaDescription(tags) {
  if (!tags.length) {
    return "Add perfumes, notes, seasons, and occasions to reveal a sharper fragrance profile.";
  }

  const warm = tags.some((tag) => ["Vanilla", "Amber", "Warm Spicy", "Tobacco", "Cinnamon", "Tonka Bean"].includes(tag));
  const fresh = tags.some((tag) => ["Bergamot", "Lemon", "Fresh", "Citrus", "Summer", "Clean"].includes(tag));
  const floral = tags.some((tag) => ["Rose", "Jasmine", "Iris", "Orange Blossom", "White Floral"].includes(tag));

  if (warm) {
    return `Your fragrance taste leans warm, smooth, and sensual. You seem drawn to ${tags.slice(0, 4).join(", ")} profiles, so your best matches are likely cozy, long-lasting scents for evenings, autumn, and winter.`;
  }

  if (fresh) {
    return `Your Scent DNA feels fresh, bright, and wearable. You seem to enjoy ${tags.slice(0, 4).join(", ")} profiles, with best matches in spring, summer, office, vacation, and everyday settings.`;
  }

  if (floral) {
    return `Your Scent DNA is elegant, polished, and expressive. You seem drawn to ${tags.slice(0, 4).join(", ")} profiles with a refined signature-scent feeling.`;
  }

  return `Your Scent DNA is centered on ${tags.slice(0, 4).join(", ")}. ScentMatch will favor fragrances that preserve that mood while avoiding the notes you filtered out.`;
}

function openDialog(id) {
  const perfume = perfumes.find((item) => item.id === id);
  if (!perfume) return;

  const score = state.scores.get(perfume.id) || scorePerfume(perfume).score;
  $("#dialogContent").innerHTML = `
    <div class="dialog-grid">
      <div class="dialog-bottle perfume-photo" style="--tone:${perfume.tone}">${perfumeImageMarkup(perfume)}</div>
      <div>
        <p class="eyebrow">${perfume.brand}</p>
        <h2>${perfume.name}</h2>
        <div class="match-meta">
          <span class="score-pill">${score}% Match</span>
          <span>${perfume.rating} rating</span>
          <span>${perfume.release}</span>
          <span>${perfume.gender}</span>
          <span>${perfume.source}</span>
        </div>
        <p>${perfume.description}</p>
        <div class="detail-section">
          <h3>Match for you</h3>
          <p>This perfume matches your current profile because it shares ${perfume.accords.slice(0, 4).join(", ")} with your selected taste signals. It is best suited for ${perfume.seasons.join(" / ")} and moments like ${perfume.occasions.slice(0, 3).join(", ")}.</p>
        </div>
        <div class="detail-section">
          <h3>Main accords</h3>
          <div class="match-meta">${perfume.accords.map((accord) => `<span>${accord}</span>`).join("")}</div>
        </div>
        <div class="detail-section detail-pyramid">
          <div class="detail-box"><strong>Top Notes</strong>${perfume.pyramid.top}</div>
          <div class="detail-box"><strong>Middle Notes</strong>${perfume.pyramid.middle}</div>
          <div class="detail-box"><strong>Base Notes</strong>${perfume.pyramid.base}</div>
          <div class="detail-box"><strong>Best Time</strong>${perfume.seasons.join(" / ")} / ${perfume.occasions.slice(0, 2).join(" / ")}</div>
        </div>
        <div class="detail-section performance-grid">
          <div class="detail-box"><strong>Longevity</strong>${perfume.longevity}</div>
          <div class="detail-box"><strong>Projection</strong>${perfume.projection}</div>
          <div class="detail-box"><strong>Sillage</strong>${perfume.sillage}</div>
          <div class="detail-box"><strong>Compliment Factor</strong>${perfume.compliment}</div>
        </div>
        <div class="detail-section buy-panel">
          <h3>Where to buy</h3>
          <p>These links open search results. Check the retailer page for current price, size, delivery, and stock before buying.</p>
          <div class="buy-link-grid">
            ${perfume.buyLinks.map((link) => `<a class="buy-link" href="${escapeAttr(link.url)}" target="_blank" rel="noreferrer">${escapeAttr(link.label)}</a>`).join("")}
          </div>
        </div>
        <div class="detail-section dialog-actions">
          <button class="secondary-button" type="button" data-collect="${perfume.id}" data-sentiment-add="love">Like</button>
          <button class="secondary-button" type="button" data-collect="${perfume.id}" data-sentiment-add="dislike">Dislike</button>
          <button class="secondary-button" type="button" data-wishlist="${perfume.id}">${state.wishlist.has(perfume.id) ? "Saved" : "Add to Wishlist"}</button>
        </div>
      </div>
    </div>
  `;

  $("#perfumeDialog").showModal();
}

function updateProfileHint() {
  const count = state.collection.length;
  const notes = state.wantedNotes.size;
  const avoid = state.avoidedNotes.size;
  $("#profileHint").textContent = `${count} perfumes / ${notes} liked notes / ${avoid} avoided notes. Open any match to see buying links.`;
}

function addPerfume(perfume, sentiment = state.selectedSentiment) {
  if (!perfume) return;
  const existing = state.collection.find((item) => item.perfume.id === perfume.id);
  if (existing) {
    existing.sentiment = sentiment;
  } else {
    state.collection.push({ perfume, sentiment });
  }
  renderAll();
}

function toggleSet(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

function useSampleProfile() {
  state.collection = [];
  ["tobacco-vanille", "angels-share", "naxos", "by-the-fireplace"].forEach((id) => {
    const perfume = perfumes.find((item) => item.id === id);
    if (perfume) {
      state.collection.push({ perfume, sentiment: "love" });
    }
  });
  state.wantedNotes = new Set(["Vanilla", "Tobacco", "Amber", "Cinnamon", "Tonka Bean"]);
  state.avoidedNotes = new Set(["Aquatic notes", "Sharp citrus"]);
  state.seasons = new Set(["Autumn", "Winter"]);
  state.occasions = new Set(["Date Night", "Cozy Evening", "Special Occasion"]);
  renderAll();
}

function resetProfile() {
  state.collection = [];
  state.wantedNotes = new Set();
  state.avoidedNotes = new Set();
  state.seasons = new Set();
  state.occasions = new Set();
  renderAll();
}

function bindEvents() {
  $("#heroSearch").addEventListener("submit", (event) => {
    event.preventDefault();
    const perfume = findPerfume($("#heroPerfume").value);
    if (perfume) {
      addPerfume(perfume, "love");
    }
    $("#builder").scrollIntoView({ behavior: "smooth" });
  });

  $("#addPerfumeBtn").addEventListener("click", () => {
    const input = $("#perfumeSearch");
    const perfume = findPerfume(input.value);
    if (!perfume) {
      input.focus();
      input.placeholder = "Choose a perfume from the suggestions...";
      return;
    }
    addPerfume(perfume);
    input.value = "";
  });

  $("#sentimentGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-sentiment]");
    if (!button) return;
    state.selectedSentiment = button.dataset.sentiment;
    $$("#sentimentGrid button").forEach((item) => item.classList.toggle("active", item === button));
  });

  $("#collectionList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    state.collection.splice(Number(button.dataset.remove), 1);
    renderAll();
  });

  $("#wantedNotes").addEventListener("click", (event) => {
    const button = event.target.closest("[data-note]");
    if (!button) return;
    toggleSet(state.wantedNotes, button.dataset.note);
    renderAll();
  });

  $("#avoidNotes").addEventListener("click", (event) => {
    const button = event.target.closest("[data-avoid]");
    if (!button) return;
    toggleSet(state.avoidedNotes, button.dataset.avoid);
    renderAll();
  });

  $("#seasonChoices").addEventListener("click", (event) => {
    const button = event.target.closest("[data-season]");
    if (!button) return;
    toggleSet(state.seasons, button.dataset.season);
    renderAll();
  });

  $("#occasionChoices").addEventListener("click", (event) => {
    const button = event.target.closest("[data-occasion]");
    if (!button) return;
    toggleSet(state.occasions, button.dataset.occasion);
    renderAll();
  });

  $(".quick-tags").addEventListener("click", (event) => {
    const noteButton = event.target.closest("[data-note]");
    const occasionButton = event.target.closest("[data-occasion]");
    if (noteButton) toggleSet(state.wantedNotes, noteButton.dataset.note);
    if (occasionButton) toggleSet(state.occasions, occasionButton.dataset.occasion);
    renderAll();
    $("#builder").scrollIntoView({ behavior: "smooth" });
  });

  $("#clearWanted").addEventListener("click", () => {
    state.wantedNotes.clear();
    renderAll();
  });

  $("#clearAvoided").addEventListener("click", () => {
    state.avoidedNotes.clear();
    renderAll();
  });

  $("#generateBtn").addEventListener("click", () => {
    renderAll();
    $("#matches").scrollIntoView({ behavior: "smooth" });
  });

  $("#sampleProfileBtn").addEventListener("click", () => {
    useSampleProfile();
    $("#matches").scrollIntoView({ behavior: "smooth" });
  });

  $("#resetProfileBtn").addEventListener("click", () => {
    resetProfile();
    $("#builder").scrollIntoView({ behavior: "smooth" });
  });

  $("#catalogSearch").addEventListener("input", renderCatalog);
  $("#catalogBrand").addEventListener("change", renderCatalog);
  $("#catalogSeason").addEventListener("change", renderCatalog);
  $("#brandSearch").addEventListener("input", renderBrands);
  $("#showLoadedBrandsBtn").addEventListener("click", () => {
    state.showLoadedBrandsOnly = true;
    renderBrands();
  });
  $("#showAllBrandsBtn").addEventListener("click", () => {
    state.showLoadedBrandsOnly = false;
    renderBrands();
  });

  document.body.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    const wishlistButton = event.target.closest("[data-wishlist]");
    const notStyleButton = event.target.closest("[data-not-style]");
    const collectButton = event.target.closest("[data-collect]");
    const filterBrandButton = event.target.closest("[data-filter-brand]");

    if (viewButton) {
      openDialog(viewButton.dataset.view);
    }

    if (wishlistButton) {
      const id = wishlistButton.dataset.wishlist;
      if (state.wishlist.has(id)) {
        state.wishlist.delete(id);
      } else {
        state.wishlist.add(id);
      }
      saveWishlist();
      renderAll();
    }

    if (notStyleButton) {
      const perfume = perfumes.find((item) => item.id === notStyleButton.dataset.notStyle);
      addPerfume(perfume, "different");
    }

    if (collectButton) {
      const perfume = perfumes.find((item) => item.id === collectButton.dataset.collect);
      addPerfume(perfume, collectButton.dataset.sentimentAdd);
    }

    if (filterBrandButton) {
      const brand = findLoadedBrandForDirectoryName(filterBrandButton.dataset.filterBrand);
      $("#catalogBrand").value = brand || "";
      $("#catalogSearch").value = brand ? "" : filterBrandButton.dataset.filterBrand;
      renderCatalog();
      $("#discover").scrollIntoView({ behavior: "smooth" });
    }
  });

  $("#closeDialog").addEventListener("click", () => $("#perfumeDialog").close());
  $("#perfumeDialog").addEventListener("click", (event) => {
    if (event.target.id === "perfumeDialog") {
      $("#perfumeDialog").close();
    }
  });
}

function findLoadedBrandForDirectoryName(name) {
  const directoryBrand = brandDirectory.find((brand) => brand.displayName === name || brand.name === name);
  const names = directoryBrand ? [directoryBrand.name, ...(directoryBrand.aliases || [])] : [name];
  return perfumes.find((perfume) => names.some((candidate) => normalizeBrand(candidate) === normalizeBrand(perfume.brand)))?.brand || "";
}

function renderAll() {
  renderNoteButtons();
  renderChoiceButtons();
  renderCollection();
  renderDna();
  renderRecommendations();
  renderCatalog();
  renderBrands();
  renderWishlist();
  updateProfileHint();
}

function init() {
  renderDatalist();
  renderBrandFilter();
  bindEvents();
  renderAll();
}

init();
