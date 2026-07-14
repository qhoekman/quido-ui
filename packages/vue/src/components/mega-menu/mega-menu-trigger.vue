<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
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

const handlePointerMove = (event: PointerEvent) => {
  event.preventDefault();
};

const handlePointerLeave = (event: PointerEvent) => {
  event.preventDefault();
};
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="disabled"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown :size="12" aria-hidden="true" class="chevron-icon" />
  </Primitive>
</template>

<style scoped>
button,
[role="button"] {
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

button:hover:not(:disabled),
[role="button"]:hover:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

button:focus:not(:disabled),
[role="button"]:focus:not([aria-disabled="true"]) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  outline: none;
}

button:focus-visible:not(:disabled),
[role="button"]:focus-visible:not([aria-disabled="true"]) {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

button:disabled,
[role="button"][aria-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}

button[data-active],
[role="button"][data-active] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

button[data-state="open"],
[role="button"][data-state="open"] {
  background-color: hsl(from var(--color-muted) h s l / 50%);
}

button[data-state="open"] .chevron-icon,
[role="button"][data-state="open"] .chevron-icon {
  transform: rotate(180deg);
}

.chevron-icon {
  position: relative;
  top: 1px;
  margin-left: var(--spacing-1);
  height: var(--spacing-3);
  width: var(--spacing-3);
  transition: transform 300ms;
}
</style>
