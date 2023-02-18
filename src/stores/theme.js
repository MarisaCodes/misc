import { persistentAtom } from "@nanostores/persistent";

export const theme = persistentAtom(
  "theme",
  {
    colorClass: "astro-color",
    bgClass: "astro-background",
    secondaryBgClass: "astro-secondary-background",
    secondaryColorClass: "astro-secondary-color",
    darkBtnClass: "astro-btn-dark",
    lightBtnClass: "astro-btn-light",
    orangeBtnClass: "astro-orange-btn",
    linkColorClass: "astro-link",
    navbarItemClass: "astro-navbar-item",
    thumbHex: "rgb(210, 106, 45)",
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
