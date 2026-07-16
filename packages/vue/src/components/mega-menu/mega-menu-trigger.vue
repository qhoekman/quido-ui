<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuTrigger } from "reka-ui";
import { ChevronDown } from "lucide-vue-next";
import { cva, type VariantProps } from "class-variance-authority";

const megaMenuTriggerVariants = cva("q-mega-menu-trigger", {
  variants: {},
  defaultVariants: {},
});

export type MegaMenuTriggerVariants = VariantProps<
  typeof megaMenuTriggerVariants
>;

export interface MegaMenuTriggerProps {
  asChild?: boolean;
  as?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<MegaMenuTriggerProps>(), {
  asChild: false,
  as: "button",
  disabled: false,
});

const classes = computed(() => megaMenuTriggerVariants());
</script>

<template>
  <NavigationMenuTrigger
    :as="as"
    :as-child="asChild"
    :class="classes"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown :size="12" aria-hidden="true" class="chevron-icon" />
  </NavigationMenuTrigger>
</template>

<style scoped>
.chevron-icon {
  position: relative;
  top: 1px;
  margin-left: var(--spacing-1);
  height: var(--spacing-3);
  width: var(--spacing-3);
  transition: transform 300ms;
}
</style>

<style>
/*
 * reka-ui's NavigationMenuTrigger renders a multi-root Fragment (the
 * trigger button plus a conditional VisuallyHidden focus proxy) with
 * inheritAttrs: false, so Vue's scoped-CSS data-v-* attribute never lands
 * on the actual button element (nor any of its ancestors within this
 * component's own render). :deep() cannot help here since it still
 * requires the attribute to exist on *some* ancestor. These rules must be
 * global, scoped only by the q-mega-menu-trigger class instead of a bare
 * tag selector.
 */
.q-mega-menu-trigger {
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
  border: none;
  cursor: pointer;
}

.q-mega-menu-trigger:hover:not(:disabled) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-mega-menu-trigger:focus:not(:disabled) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  outline: none;
}

.q-mega-menu-trigger:focus-visible:not(:disabled) {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-mega-menu-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.q-mega-menu-trigger[data-active] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

.q-mega-menu-trigger[data-state="open"] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

.q-mega-menu-trigger[data-state="open"] .chevron-icon {
  transform: rotate(180deg);
}
</style>
