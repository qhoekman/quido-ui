<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva("q-tag", {
  variants: {
    variant: {
      primary: "variant--primary",
      secondary: "variant--secondary",
      destructive: "variant--destructive",
      outline: "variant--outline",
    },
    size: {
      xs: "size--xs",
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
    shape: {
      pill: "shape--pill",
      plate: "shape--plate",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "plate",
  },
});

export type TagVariants = VariantProps<typeof tagVariants>;

export interface TagProps {
  variant?: TagVariants["variant"];
  size?: TagVariants["size"];
  shape?: TagVariants["shape"];
  asChild?: boolean;
  as?: "span" | "div";
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: "primary",
  size: "md",
  shape: "plate",
  asChild: false,
  as: "div",
});

const classes = computed(() => {
  return tagVariants({
    variant: props.variant,
    size: props.size,
    shape: props.shape,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-tag"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div,
span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: var(--border-width-default) solid var(--color-background-fg);
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-semibold);
  transition: colors 0.3s;
  outline: none;
}

div:focus-visible,
span:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.variant--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
  box-shadow: var(--box-shadow-default);
  border-color: transparent;
}

.variant--primary:hover:not(:disabled) {
  background-color: hsl(from var(--color-primary) h s l / 80%);
}

.variant--secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-fg);
  border-color: transparent;
}

.variant--secondary:hover:not(:disabled) {
  background-color: hsl(from var(--color-secondary) h s l / 80%);
}

.variant--destructive {
  background-color: var(--color-danger);
  color: var(--color-danger-fg);
  box-shadow: var(--box-shadow-default);
  border-color: transparent;
}

.variant--destructive:hover:not(:disabled) {
  background-color: hsl(from var(--color-danger) h s l / 80%);
}

.variant--outline {
  color: var(--color-background-fg);
}

.size--xs {
  padding: var(--spacing-0-5);
  gap: var(--spacing-1);
}

.size--sm {
  padding: var(--spacing-0-5) var(--spacing-1);
  gap: var(--spacing-1);
}

.size--md {
  padding: var(--spacing-1) var(--spacing-2);
  gap: var(--spacing-2);
}

.size--lg {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  padding: var(--spacing-2) var(--spacing-3);
  gap: var(--spacing-2);
}

.shape--pill {
  border-radius: var(--border-radius-full);
}

.shape--plate {
  border-radius: var(--border-radius-md);
}
</style>
