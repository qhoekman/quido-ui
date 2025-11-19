import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import "./preview.css";

const preview: Preview = {
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
