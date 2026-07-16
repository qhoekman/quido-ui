<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const tabNavigationVariants = cva("q-tab-navigation", {
  variants: {
    variant: {
      default: "variant--default",
      inset: "variant--inset",
    },
    gap: {
      none: "gap--none",
      sm: "gap--sm",
      md: "gap--md",
      lg: "gap--lg",
    },
  },
  defaultVariants: {
    variant: "default",
    gap: "none",
  },
});

export type TabNavigationVariants = VariantProps<
  typeof tabNavigationVariants
>;

export interface TabNavigationProps {
  variant?: TabNavigationVariants["variant"];
  gap?: TabNavigationVariants["gap"];
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationProps>(), {
  variant: "default",
  gap: "none",
  asChild: false,
  as: "ul",
});

const classes = computed(() => {
  return tabNavigationVariants({
    variant: props.variant,
    gap: props.gap,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    role="menubar"
    data-testid="qui-tab-navigation"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tab-navigation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  gap: 0;
}

.variant--inset {
  background-color: var(--color-card);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2) var(--spacing-3);
}

.gap--sm {
  gap: var(--spacing-1);
}

.gap--md {
  gap: var(--spacing-2);
}

.gap--lg {
  gap: var(--spacing-3);
}
</style>
