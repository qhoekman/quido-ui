import { create } from "storybook/theming/create";

/** Shared squid·ware Storybook manager theme. Pass brandImage for nested bases. */
export function createSquidTheme(brandImage = "/logo.svg") {
  return create({
    base: "light",
    brandTitle: "squid·ware UI",
    brandUrl: "https://ui.squid-ware.nl",
    brandImage,
    brandTarget: "_self",
    colorPrimary: "#f1592a",
    colorSecondary: "#53a0c6",
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#e8e8ec",
    appBorderRadius: 6,
    barBg: "#ffffff",
    barTextColor: "#4d6972",
    barSelectedColor: "#f1592a",
    barHoverColor: "#53a0c6",
    textColor: "#1b333e",
    textMutedColor: "#4d6972",
    inputBg: "#ebf4f8",
    inputBorder: "#e8e8ec",
    inputTextColor: "#1b333e",
    inputBorderRadius: 6,
    buttonBg: "#ebf4f8",
    buttonBorder: "#e8e8ec",
    booleanBg: "#ebf4f8",
    booleanSelectedBg: "#53a0c6",
    fontBase: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    fontCode: '"JetBrains Mono", ui-monospace, monospace',
  });
}

export default createSquidTheme();
