import { createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const [theme, themeVars] = createTheme({
  color: {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      25: "#FCFCFD",
      50: "#F9FAFB",
      100: "#F2F4F7",
      200: "#EAECF0",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1D2939",
      900: "#101828",
    },
    primary: {
      25: "#FCFAFF",
      50: "#F9F5FF",
      100: "#F4EBFF",
      200: "#E9D7FE",
      300: "#D6BBFB",
      400: "#B692F6",
      500: "#9E77ED",
      600: "#7F56D9",
      700: "#6941C6",
      800: "#53389E",
      900: "#42307D",
    },
    success: {
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      700: "#027A48",
    },
    error: {
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
    },
    warning: {
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      700: "#B54708",
    },
  },
  gradients: {
    primary: "linear-gradient(315deg, #F5C8F5 0%, #DADDFA 83.85%)",
    primarySemiTransparent:
      "linear-gradient(315deg, rgba(245, 200, 245, 0.80) 0%, rgba(218, 221, 250, 0.80) 83.85%);",
    textBg:
      "linear-gradient(180deg, rgba(66, 66, 66, 0.0001) 0%, rgba(66, 66, 66, 0.0553901) 11.38%, rgba(66, 66, 66, 0.107699) 20.49%, rgba(66, 66, 66, 0.157431) 27.7%, rgba(66, 66, 66, 0.204989) 33.38%, rgba(66, 66, 66, 0.250776) 37.89%, rgba(66, 66, 66, 0.295196) 41.61%, rgba(66, 66, 66, 0.338652) 44.9%, rgba(66, 66, 66, 0.381547) 48.13%, rgba(66, 66, 66, 0.424286) 51.67%, rgba(66, 66, 66, 0.46727) 55.88%, rgba(66, 66, 66, 0.510903) 61.14%, rgba(66, 66, 66, 0.55559) 67.82%, rgba(65, 65, 65, 0.601733) 76.27%, rgba(65, 65, 65, 0.649735) 86.88%, rgba(65, 65, 65, 0.7) 100%)",
    gradientOutline: "linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%)"
  },
});

export const shadow = styleVariants({
  xs: { boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" },
  sm: {
    boxShadow:
      "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
  },
  md: {
    boxShadow:
      "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
  },
  lg: {
    boxShadow:
      "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
  },
  xl: {
    boxShadow:
      "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
  },
  xxl: {
    boxShadow: "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
  },
  xxxl: {
    boxShadow: "0px 32px 64px -12px rgba(16, 24, 40, 0.14);",
  },
});

export const typography = {
  display: recipe({
    base: { fontFamily: "Inter" },
    variants: {
      size: {
        xxl: { fontSize: 72, lineHeight: "90px", letterSpacing: -1.44 },
        xl: { fontSize: 60, lineHeight: "72px", letterSpacing: -1.2 },
        lg: { fontSize: 48, lineHeight: "60px", letterSpacing: -0.96 },
        md: { fontSize: 36, lineHeight: "44px", letterSpacing: -0.72 },
        sm: { fontSize: 30, lineHeight: "38px" },
        xs: { fontSize: 24, lineHeight: "32px" },
        ms: { fontSize: 10, lineHeight: "12px" },
      },
      weight: {
        regular: {},
        medium: { fontWeight: 500 },
        semibold: { fontWeight: 600 },
        bold: { fontWeight: 700 },
      },
    },
    defaultVariants: {
      size: "md",
      weight: "regular",
    },
  }),
  text: recipe({
    base: { fontFamily: "Inter", whiteSpace: "pre-line" },
    variants: {
      weight: {
        regular: {
          fontWeight: 400,
        },
        medium: { fontWeight: 500 },
        semibold: { fontWeight: 600 },
        bold: { fontWeight: 700 },
      },
      size: {
        xl: { fontSize: 20, lineHeight: "30px" },
        lg: { fontSize: 18, lineHeight: "28px" },
        md: { fontSize: 16, lineHeight: "24px" },
        sm: { fontSize: 14, lineHeight: "20px" },
        xs: { fontSize: 12, lineHeight: "18px" },
        ms: { fontSize: 10, lineHeight: "16px" },
      },
    },
    defaultVariants: {
      size: "md",
      weight: "regular",
    },
  }),
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const screens = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `screen and (min-width: ${value})`,
  ])
) as Record<keyof typeof breakpoints, string>;
