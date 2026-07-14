<script setup lang="ts">
import { computed } from "vue";
import { RadioGroupItem, RadioGroupItemIndicator } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-vue-next";

const radioGroupItemVariants = cva("q-radio-group-item", {
  variants: {},
  defaultVariants: {},
});

export type RadioGroupItemVariants = VariantProps<typeof radioGroupItemVariants>;

export interface RadioGroupItemProps {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
}

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  disabled: false,
  asChild: false,
});

const classes = computed(() => {
  return radioGroupItemVariants({});
});
</script>

<template>
  <RadioGroupItem
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
    <RadioGroupItemIndicator :class="['q-radio-group-item-indicator']">
      <Check :size="14" />
    </RadioGroupItemIndicator>
  </RadioGroupItem>
</template>

<style scoped>
.q-radio-group-item {
  aspect-ratio: 1 / 1;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  color: var(--color-primary);
  box-shadow: var(--box-shadow-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: 0;
  background-color: transparent;
  transition: background-color 0.2s;
}

.q-radio-group-item:focus {
  outline: none;
}

.q-radio-group-item:focus-visible {
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-radio-group-item[data-state="checked"] {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.q-radio-group-item:disabled,
.q-radio-group-item[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-radio-group-item-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}
</style>
