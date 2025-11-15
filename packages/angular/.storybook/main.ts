// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import type { StorybookConfig } from '@storybook/angular';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/angular',
    options: {},
  },

  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '../src'),
    };

    return config;
  }
};
export default config;
