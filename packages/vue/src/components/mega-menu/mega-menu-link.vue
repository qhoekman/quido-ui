<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuLink } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const megaMenuLinkVariants = cva("q-mega-menu-link", {
  variants: {
    variant: {
      nav: "variant--nav",
      plain: "variant--plain",
    },
  },
  defaultVariants: {
    variant: "nav",
  },
});

export type MegaMenuLinkVariants = VariantProps<typeof megaMenuLinkVariants>;

export interface MegaMenuLinkProps {
  asChild?: boolean;
  as?: string;
  href?: string;
  active?: boolean;
  variant?: MegaMenuLinkVariants["variant"];
}

const props = withDefaults(defineProps<MegaMenuLinkProps>(), {
  asChild: false,
  active: false,
  variant: "nav",
});

const classes = computed(() =>
  megaMenuLinkVariants({
    variant: props.variant,
  })
);
</script>

<template>
  <NavigationMenuLink
    :as="as"
    :as-child="asChild"
    :class="classes"
    :href="href"
    :active="active"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuLink>
</template>

<style>
/*
 * Global class selectors: NavigationMenuLink may portal / fragment in ways
 * that drop scoped data attributes, and list-item needs a plain variant
 * without nav trigger chrome.
 */
.q-mega-menu-link.variant--nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--spacing-9);
  width: max-content;
  border-radius: var(--border-radius-md);
  background-color: var(--color-background);
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  text-decoration: none;
  color: inherit;
}

.q-mega-menu-link.variant--nav:hover {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-mega-menu-link.variant--nav:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-mega-menu-link.variant--nav[data-active],
.q-mega-menu-link.variant--nav[data-state="open"] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

.q-mega-menu-link.variant--plain {
  display: block;
  text-decoration: none;
  color: inherit;
  outline: none;
}
</style>
