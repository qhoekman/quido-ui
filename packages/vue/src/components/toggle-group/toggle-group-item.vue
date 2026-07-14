<script setup lang="ts">
import { computed, inject } from "vue";
import { ToggleGroupItem } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva("q-toggle", {
  variants: {
    variant: {
      primary: "variant--primary",
      outline: "variant--outline",
      default: "variant--default",
    },
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ToggleGroupItemVariants = VariantProps<typeof toggleVariants>;

export interface ToggleGroupItemProps {
  value: string;
  variant?: ToggleGroupItemVariants["variant"];
  size?: ToggleGroupItemVariants["size"];
  disabled?: boolean;
  asChild?: boolean;
}

const props = withDefaults(defineProps<ToggleGroupItemProps>(), {
  disabled: false,
  asChild: false,
});

const toggleGroupContext = inject<{
  variant: ReturnType<typeof computed<ToggleGroupItemVariants["variant"]>>;
  size: ReturnType<typeof computed<ToggleGroupItemVariants["size"]>>;
}>("toggleGroupContext");

const classes = computed(() => {
  return toggleVariants({
    variant: toggleGroupContext?.variant.value || props.variant,
    size: toggleGroupContext?.size.value || props.size,
  });
});
</script>

<template>
  <ToggleGroupItem
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </ToggleGroupItem>
</template>

<style scoped>
button,
[role="button"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border: 0;
  margin: 0;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);
  transition: colors 0.3s;
  outline: none;
}

button:hover:not(:disabled),
[role="button"]:hover:not(:disabled) {
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

button:focus-visible,
[role="button"]:focus-visible {
  outline: none;
  box-shadow: 0 0 0 1px var(--color-ring);
}

button:disabled,
[role="button"][aria-disabled="true"],
button[data-disabled],
[role="button"][data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

/* Variant modifiers */
.variant--default {
  background-color: var(--color-card);
  color: var(--color-card-fg);
  box-shadow: var(--box-shadow-sm);
}

.variant--default[data-state="on"] {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--primary {
  background-color: transparent;
  border: var(--border-width-default) solid var(--color-muted);
}

.variant--primary:not([data-state="on"]) {
  background-color: transparent;
  border: var(--border-width-default) solid var(--color-muted);
}

.variant--primary[data-state="on"] {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.variant--outline {
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  box-shadow: var(--box-shadow-sm);
}

.variant--outline:not([data-state="on"]) {
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  box-shadow: var(--box-shadow-sm);
}

.variant--outline[data-state="on"] {
  border: var(--border-width-default) solid var(--color-primary);
}

/* Size modifiers */
.size--sm {
  height: var(--spacing-8);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
}

.size--md {
  height: var(--spacing-9);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
}

.size--lg {
  height: var(--spacing-10);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
}
</style>
