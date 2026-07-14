<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const tabNavigationLinkVariants = cva("q-tab-navigation-link", {
  variants: {
    variant: {
      link: "variant--link",
      border: "variant--border",
      pill: "variant--pill",
    },
    state: {
      default: "state--default",
      active: "state--active",
    },
  },
  defaultVariants: {
    variant: "link",
    state: "default",
  },
});

export type TabNavigationLinkVariants = VariantProps<
  typeof tabNavigationLinkVariants
>;

export interface TabNavigationLinkProps {
  variant?: TabNavigationLinkVariants["variant"];
  state?: TabNavigationLinkVariants["state"];
  asChild?: boolean;
  as?: "a" | "button";
  disabled?: boolean;
}

const props = withDefaults(defineProps<TabNavigationLinkProps>(), {
  variant: "link",
  state: "default",
  asChild: false,
  as: "a",
  disabled: false,
});

const classes = computed(() => {
  return tabNavigationLinkVariants({
    variant: props.variant,
    state: props.state,
  });
});

const isDisabled = computed(() => props.disabled);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    data-testid="qui-tab-navigation-link"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a,
button,
[role="menuitem"] {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  z-index: var(--z-index-10);
}

/* Link variant */
.variant--link {
  display: flex;
  flex-shrink: 0;
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-foreground);
  border-bottom: 2px solid transparent;
}

.variant--link:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--color-primary);
}

.variant--link[aria-expanded="true"],
.variant--link.state--active {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.variant--link:disabled,
.variant--link[aria-disabled="true"] {
  pointer-events: none;
  color: var(--color-muted-fg);
  opacity: 0.5;
}

/* Pill variant */
.variant--pill {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-1) var(--spacing-3);
  background-color: var(--color-background);
  color: var(--color-card-fg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.3s;
  outline: none;
}

.variant--pill:hover:not(:disabled):not([aria-disabled="true"]) {
  background-color: hsl(from var(--color-background) h s l / 66%);
  color: var(--color-foreground);
}

.variant--pill[aria-expanded="true"],
.variant--pill.state--active {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--pill:disabled,
.variant--pill[aria-disabled="true"] {
  pointer-events: none;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  opacity: 0.5;
}

/* Border variant */
.variant--border {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  padding: var(--spacing-1) var(--spacing-3);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.3s;
  outline: none;
}

.variant--border:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--color-muted-fg);
}

.variant--border.state--active {
  color: var(--color-primary);
  background-color: var(--color-background);
  border: var(--border-width-default) solid var(--color-border);
  border-bottom: 0 none;
}

.variant--border.state--active:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--color-muted-fg);
}

.variant--border[aria-expanded="true"] {
  border: var(--border-width-default) solid var(--color-border);
}

.variant--border[aria-expanded="true"]:hover:not(:disabled):not([aria-disabled="true"]) {
  border-color: var(--color-foreground);
}

.variant--border:disabled,
.variant--border[aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}

/* Focus states */
a:focus-visible,
button:focus-visible,
[role="menuitem"]:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
