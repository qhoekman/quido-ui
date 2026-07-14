<script setup lang="ts">
import { computed } from "vue";
import { MenuTrigger as RekaMenuTrigger } from "reka-ui";
import { ChevronUp, ChevronDown } from "lucide-vue-next";
import { cva, type VariantProps } from "class-variance-authority";

const menubarTriggerVariants = cva("q-menubar-trigger", {
  variants: {
    variant: {
      default: "variant--default",
      active: "variant--active",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type MenubarTriggerVariants = VariantProps<
  typeof menubarTriggerVariants
>;

export interface MenubarTriggerProps {
  variant?: MenubarTriggerVariants["variant"];
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarTriggerProps>(), {
  variant: "default",
  asChild: false,
  as: "button",
});

const classes = computed(() => {
  return menubarTriggerVariants({
    variant: props.variant,
  });
});
</script>

<template>
  <RekaMenuTrigger
    :as-child="asChild"
    :as="as"
    :class="classes"
    data-testid="qui-menubar-trigger"
    v-bind="$attrs"
  >
    <slot />
    <ChevronUp class="chevron-up" :size="16" aria-hidden="true" />
    <ChevronDown class="chevron-down" :size="16" aria-hidden="true" />
  </RekaMenuTrigger>
</template>

<style scoped>
button,
[role="menuitem"] {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-1);
  margin: var(--spacing-0);
  padding: var(--spacing-1) var(--spacing-2);
  border: none;
  user-select: none;
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  font-family: var(--font-family-sans);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  cursor: pointer;
  outline: none;
}

button:hover:not(:disabled),
[role="menuitem"]:hover:not(:disabled) {
  background-color: hsl(from var(--color-popover-fg) h s l / 12%);
}

button svg,
[role="menuitem"] svg {
  width: var(--spacing-4);
  height: var(--spacing-4);
}

button .chevron-up,
[role="menuitem"] .chevron-up {
  display: none;
}

button[aria-expanded="true"] .chevron-up,
[role="menuitem"][aria-expanded="true"] .chevron-up {
  display: block;
}

button .chevron-down,
[role="menuitem"] .chevron-down {
  display: block;
}

button[aria-expanded="true"] .chevron-down,
[role="menuitem"][aria-expanded="true"] .chevron-down {
  display: none;
}

button[aria-expanded="true"],
button.variant--active,
[role="menuitem"][aria-expanded="true"],
[role="menuitem"].variant--active {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  border-bottom: 2px solid var(--color-primary);
}

button:focus-visible,
[role="menuitem"]:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:disabled,
[role="menuitem"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
