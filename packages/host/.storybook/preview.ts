import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

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
      // @ts-expect-error storySort typing varies across Storybook versions
      storySort: (a: { title: string }, b: { title: string }) => {
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
