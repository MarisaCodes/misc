import { persistentAtom } from "@nanostores/persistent";

export const theme = persistentAtom(
  "theme",
  {
    color: "is-dark",
    bg: "has-background-dark",
    hex: "#363636",
    secondaryBg: "has-secondary-dark-bg",
    text: "whitesmoke",
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
