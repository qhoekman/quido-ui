<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva("q-label", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;

export interface LabelProps {
  size?: LabelVariants["size"];
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<LabelProps>(), {
  size: "md",
  asChild: false,
  as: "label",
});

const classes = computed(() => {
  return labelVariants({
    size: props.size,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
label {
  display: inline-block;
  color: var(--color-background-fg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
}

.size--sm {
  font-size: var(--font-size-sm);
}

.size--md {
  font-size: var(--font-size-md);
}

/* Disabled state when label contains or is adjacent to disabled input/textarea */
label:has(input:disabled),
label:has(textarea:disabled),
label:has(+ input:disabled),
label:has(+ textarea:disabled) {
  cursor: not-allowed;
  opacity: 0.7;
}

/* Support for peer pattern: .peer:disabled ~ label */
:deep(.peer:disabled ~ .q-label) {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
