import "../src/index.css";
import 'alpinejs';
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    storySort: (a, b) =>
      a.id === b.id
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
