import { addons } from "storybook/manager-api";
import "@quido-ui/styles/storybook-manager.css";
import yourTheme from "./theme";

addons.setConfig({
  theme: yourTheme,
});
