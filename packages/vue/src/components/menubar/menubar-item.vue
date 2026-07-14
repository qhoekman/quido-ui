<script setup lang="ts">
import { computed } from "vue";
import { MenuItem as RekaMenuItem } from "reka-ui";

export interface MenubarItemProps {
  disabled?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarItemProps>(), {
  disabled: false,
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-menubar-item"]);
</script>

<template>
  <RekaMenuItem
    :disabled="disabled"
    :as-child="asChild"
    :as="as"
    :class="classes"
    data-testid="qui-menubar-item"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuItem>
</template>

<style scoped>
div,
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

div:hover:not(:disabled),
[role="menuitem"]:hover:not(:disabled) {
  background-color: hsl(from var(--color-background) h s l / 66%);
}

div:focus,
[role="menuitem"]:focus {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

div:focus-visible,
[role="menuitem"]:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

div > svg,
[role="menuitem"] > svg {
  width: var(--size-4);
  height: var(--size-4);
  flex-shrink: 0;
}

div[data-disabled],
[role="menuitem"][data-disabled],
div:disabled,
[role="menuitem"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
