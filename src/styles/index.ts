import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors, fontSizes, fonts, space } from "./tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    maxWidth: "space",
  },

  theme: {
    colors,
    fontSizes,
    fonts,
    space,
  },

  media: {
    bp1: "(max-width: 420px)",
    bp2: "(max-width: 720px)",
    bp3: "(max-width: 1086px)",
    bp4: "(max-width: 560px)",
  },
});
