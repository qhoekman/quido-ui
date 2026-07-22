// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/angular';
import { squidManagerHead } from '@quido-ui/styles/storybook-manager-head';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  staticDirs: ['../public'],
  managerHead: (head) =>
    squidManagerHead(head, {
      faviconHref: './favicon.svg',
      title: 'squid·ware UI · Angular',
    }),
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
