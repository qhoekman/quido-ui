import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "@storybook/addon-mdx-gfm",
  ],
  core: {},
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.base = "/react";
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "../src"),
    };
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
