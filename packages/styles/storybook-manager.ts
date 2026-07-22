import { addons } from "storybook/manager-api";
import type { ThemeVars } from "storybook/theming";

/** Shared Storybook manager setup: theme + disable search ⌘K / Ctrl+K. */
export function configureSquidManager(theme: ThemeVars) {
  addons.setConfig({ theme });

  addons.register("quido-ui/disable-search-shortcut", (api) => {
    void api.setShortcut("search", []);
  });
}
