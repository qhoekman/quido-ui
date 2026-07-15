<script setup lang="ts">
import { computed } from "vue";
import { RadioGroupIndicator } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-vue-next";

const radioGroupItemIndicatorVariants = cva("q-radio-group-item-indicator", {
  variants: {},
  defaultVariants: {},
});

export type RadioGroupItemIndicatorVariants = VariantProps<
  typeof radioGroupItemIndicatorVariants
>;

export interface RadioGroupItemIndicatorProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<RadioGroupItemIndicatorProps>(), {
  asChild: false,
});

const classes = computed(() => {
  return radioGroupItemIndicatorVariants({});
});
</script>

<template>
  <RadioGroupIndicator :as-child="asChild" :class="classes" v-bind="$attrs">
    <slot>
      <Check :size="14" />
    </slot>
  </RadioGroupIndicator>
</template>

<style scoped>
.q-radio-group-item-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}
</style>
