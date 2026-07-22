import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Storybook evals storySort without a TS transform — keep params untyped.
      // @ts-expect-error storySort typing varies across Storybook versions
      storySort: (a, b) => {
        if (a.title === "Readme") return -1;
        if (b.title === "Readme") return 1;
        return a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { numeric: true });
      },
    },
  },
};

export default preview;
