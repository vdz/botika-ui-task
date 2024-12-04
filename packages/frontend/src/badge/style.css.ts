import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "../theme.css.ts";

export const container = recipe({
  base: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    gap: 4,
  },
  variants: {
    size: {
      xs: {
        padding: "2px 6px",
      },
      sm: {
        padding: "2px 8px",
      },
      md: {
        padding: "4px 12px",
      },
    },
    color: {
      gray: {
        background: themeVars.color.gray["200"],
        color: themeVars.color.gray["700"],
        border: `1px solid ${themeVars.color.gray["400"]}`,
      },
    },
  },
});

export const text = style({
  textAlign: "center",
});
