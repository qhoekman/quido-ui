<script setup lang="ts">
import { computed } from "vue";
import { RadioGroupItem, RadioGroupItemIndicator } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const radioCardItemVariants = cva("q-radio-card-item", {
  variants: {},
  defaultVariants: {},
});

export type RadioCardItemVariants = VariantProps<typeof radioCardItemVariants>;

export interface RadioCardItemProps {
  value: string;
  disabled?: boolean;
  asChild?: boolean;
}

const props = withDefaults(defineProps<RadioCardItemProps>(), {
  disabled: false,
  asChild: false,
});

const classes = computed(() => {
  return radioCardItemVariants({});
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
    <RadioGroupItemIndicator :class="['q-radio-card-item-indicator']">
      <div />
    </RadioGroupItemIndicator>
  </RadioGroupItem>
</template>

<style scoped>
.q-radio-card-item {
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid var(--color-border);
  box-shadow: var(--box-shadow-sm);
}

.q-radio-card-item:focus {
  outline: none;
}

.q-radio-card-item:focus-visible {
  box-shadow: 0 0 0 1px var(--color-ring);
}

.q-radio-card-item:disabled,
.q-radio-card-item[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}

.q-radio-card-item-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--spacing-4);
  border: var(--border-width-2) solid var(--color-primary);
  border-radius: var(--border-radius-lg);
  pointer-events: none;
}
</style>
