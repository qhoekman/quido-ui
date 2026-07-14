<script setup lang="ts">
import { computed } from "vue";
import { MenuItem as RekaMenuItem } from "reka-ui";

export interface TabNavigationMenuitemProps {
  disabled?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationMenuitemProps>(), {
  disabled: false,
  asChild: false,
  as: "li",
});

const classes = computed(() => ["q-tab-navigation-menuitem"]);
</script>

<template>
  <RekaMenuItem
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="classes"
    role="menuitem"
    data-testid="qui-tab-navigation-menuitem"
    tabindex="0"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuItem>
</template>

<style scoped>
li,
[role="menuitem"] {
  position: relative;
  display: flex;
  cursor: pointer;
  user-select: none;
  list-style: none;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-1-5) var(--spacing-2);
  font-size: var(--font-size-sm);
  outline: none;
  transition: background-color 0.2s, color 0.2s;
}

li:hover:not(:disabled):not([data-disabled]),
[role="menuitem"]:hover:not(:disabled):not([data-disabled]) {
  background-color: hsl(from var(--color-background) h s l / 66%);
}

li:focus,
[role="menuitem"]:focus {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

li > svg,
[role="menuitem"] > svg {
  width: var(--size-4);
  height: var(--size-4);
  flex-shrink: 0;
}
</style>
