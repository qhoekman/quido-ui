import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // @ts-ignore - storySort is not typed in storybook v7+
      storySort: (a, b) => {
        if (a.title === 'Documentation/Readme') return -1;
        if (b.title === 'Documentation/Readme') return 1;
        return a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { numeric: true });
      },
    },
  },
};

// Set background color for stories in the docs
const style = document.createElement('style');
style.innerHTML = `
  .sbdocs .docs-story {
    background-color: var(--color-background);
    color: var(--color-background-fg);
  }
`;
document.head.appendChild(style);

export default preview;
