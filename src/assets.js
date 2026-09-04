// Media asset URLs hosted on GitHub repo Ren-Jacob-John/StevePortfolio2
// Served via fast global CDN (jsDelivr) with proper video streaming (Accept-Ranges: bytes) and caching.

const CDN_BASE = "https://cdn.jsdelivr.net/gh/Ren-Jacob-John/StevePortfolio2@main";
const RAW_BASE = "https://raw.githubusercontent.com/Ren-Jacob-John/StevePortfolio2/main";

export const getAssetUrl = (path) => `${CDN_BASE}/${encodeURI(path)}`;
export const getRawAssetUrl = (path) => `${RAW_BASE}/${encodeURI(path)}`;

// Helper to handle video/image fallback if CDN ever fails
export const handleMediaError = (e) => {
  const currentSrc = e.target.src;
  if (currentSrc && currentSrc.includes("cdn.jsdelivr.net")) {
    const rawSrc = currentSrc.replace(
      "cdn.jsdelivr.net/gh/Ren-Jacob-John/StevePortfolio2@main",
      "raw.githubusercontent.com/Ren-Jacob-John/StevePortfolio2/main"
    );
    e.target.src = rawSrc;
    if (e.target.tagName === "VIDEO") {
      e.target.load();
    }
  }
};

// Cafe Content Videos
export const cafe1 = getAssetUrl("Cafe Content/cafe1.mp4");
export const cafe2 = getAssetUrl("Cafe Content/cafe2.mp4");
export const cafe3 = getAssetUrl("Cafe Content/cafe3.mp4");
export const cafe4 = getAssetUrl("Cafe Content/cafe4.mp4");
export const cafe5 = getAssetUrl("Cafe Content/cafe5.mp4");

// Intro Video
export const introVideo = getAssetUrl("Intro/intro.mp4");

// Fashion Content Videos
export const fashion1 = getAssetUrl("Fashion Content/v1.mp4");
export const fashion2 = getAssetUrl("Fashion Content/v2.mp4");
export const fashion3 = getAssetUrl("Fashion Content/v3.mp4");
export const fashion4 = getAssetUrl("Fashion Content/v4.mp4");
export const fashion5 = getAssetUrl("Fashion Content/v5.mp4");
export const fashion6 = getAssetUrl("Fashion Content/v6.mp4");
export const fashion7 = getAssetUrl("Fashion Content/v7.mp4");
export const fashion8 = getAssetUrl("Fashion Content/v8.mp4");
export const fashion9 = getAssetUrl("Fashion Content/v9.mp4");
export const fashion10 = getAssetUrl("Fashion Content/v10.mp4");
export const fashion11 = getAssetUrl("Fashion Content/v11.mp4");
export const fashion12 = getAssetUrl("Fashion Content/v12.mp4");

// Home Decor Content Videos
export const decor1 = getAssetUrl("Home Decor Content/Vid1.mp4");
export const decor2 = getAssetUrl("Home Decor Content/Vid2.mp4");
export const decor3 = getAssetUrl("Home Decor Content/Vid3.mp4");
export const decor4 = getAssetUrl("Home Decor Content/Vid4.mp4");
export const decor5 = getAssetUrl("Home Decor Content/vid5.mp4");
export const decor6 = getAssetUrl("Home Decor Content/Vid6.mp4");

// Profile / Stills Pictures
export const steveHero = getAssetUrl("Pictures/steve_hero.png");
export const steveAesthetic = getAssetUrl("Pictures/steve_aesthetic.png");

// Brand Logos
export const brand1 = getAssetUrl("Brands/boulangerie_art_cafe.png");
export const brand2 = getAssetUrl("Brands/crows.png");
export const brand3 = getAssetUrl("Brands/crumbz.png");
export const brand4 = getAssetUrl("Brands/FARWEST_IN.png");
export const brand5 = getAssetUrl("Brands/FEJI.png");
export const brand6 = getAssetUrl("Brands/futuresaints.png");
export const brand7 = getAssetUrl("Brands/havn.png");
export const brand8 = getAssetUrl("Brands/HIIQIFY.png");
export const brand9 = getAssetUrl("Brands/izf.png");
export const brand10 = getAssetUrl("Brands/JUST_LOAF.png");
export const brand11 = getAssetUrl("Brands/knyari.png");
export const brand12 = getAssetUrl("Brands/LEWKK_IN.png");
export const brand13 = getAssetUrl("Brands/LUXE_BISTRO.png");
export const brand14 = getAssetUrl("Brands/midnight_gothics.png");
export const brand15 = getAssetUrl("Brands/2.png");
export const brand16 = getAssetUrl("Brands/Picsart_26-02-20_13-16-12-487 (1).png");
export const brand17 = getAssetUrl("Brands/Picsart_26-02-20_13-55-47-859 (1).png");
export const brand18 = getAssetUrl("Brands/Picsart_26-02-20_13-56-24-761.png");
export const brand19 = getAssetUrl("Brands/Picsart_26-02-20_13-57-57-901 (1).png");
export const brand20 = getAssetUrl("Brands/qb.png");
export const brand21 = getAssetUrl("Brands/sc.png");
export const brand22 = getAssetUrl("Brands/reawaken.png");
export const brand23 = getAssetUrl("Brands/REDCAARD.png");
export const brand24 = getAssetUrl("Brands/roastown.png");
export const brand25 = getAssetUrl("Brands/SHAKESPEARESLIVE.png");
export const brand26 = getAssetUrl("Brands/STORE_AOZORA.png");
export const brand27 = getAssetUrl("Brands/the_lazy_buns.png");
export const brand28 = getAssetUrl("Brands/UNIT01LABS.png");
export const brand29 = getAssetUrl("Brands/WEARE_NOTICE.png");
export const brand30 = getAssetUrl("Brands/sin.png");

export const brandLogos = [
  brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
  brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20,
  brand21, brand22, brand23, brand24, brand25, brand26, brand27, brand28, brand29, brand30
];
