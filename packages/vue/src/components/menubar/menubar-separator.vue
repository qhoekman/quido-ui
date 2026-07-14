<script setup lang="ts">
import { MenuSeparator as RekaMenuSeparator } from "reka-ui";

export interface MenubarSeparatorProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarSeparatorProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <RekaMenuSeparator
    :as-child="asChild"
    :as="as"
    class="q-menubar-separator"
    role="separator"
    data-testid="qui-menubar-separator"
    aria-orientation="horizontal"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-menubar-separator {
  background-color: var(--color-border);
  height: var(--spacing-px);
  margin: var(--spacing-1) calc(-1 * var(--spacing-1));
}
</style>
