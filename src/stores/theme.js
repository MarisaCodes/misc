import { persistentAtom } from "@nanostores/persistent";

export const theme = persistentAtom(
  "theme",
  {
    color: "is-link",
    bg: "has-background-link",
    hex: "#485fc7",
    text: "rgba(0, 0, 0, 0.7)",
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
