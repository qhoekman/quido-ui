<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const megaMenuTriggerVariants = cva("q-mega-menu-trigger", {
  variants: {},
  defaultVariants: {},
});

export type MegaMenuLinkVariants = VariantProps<
  typeof megaMenuTriggerVariants
>;

export interface MegaMenuLinkProps {
  asChild?: boolean;
  as?: string;
  href?: string;
}

const props = withDefaults(defineProps<MegaMenuLinkProps>(), {
  asChild: false,
  as: "a",
});

const classes = computed(() => megaMenuTriggerVariants());
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :href="href"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a,
[role="link"] {
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
}

a:hover:not(:disabled),
[role="link"]:hover:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

a:focus:not(:disabled),
[role="link"]:focus:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  outline: none;
}

a:focus-visible:not(:disabled),
[role="link"]:focus-visible:not([aria-disabled="true"]) {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

a:disabled,
[role="link"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}

a[data-active],
[role="link"][data-active] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

a[data-state="open"],
[role="link"][data-state="open"] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}
</style>
