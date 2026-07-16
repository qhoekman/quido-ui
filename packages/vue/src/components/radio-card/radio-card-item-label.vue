<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const radioCardItemLabelVariants = cva("q-radio-card-item-label", {
  variants: {},
  defaultVariants: {},
});

export type RadioCardItemLabelVariants = VariantProps<
  typeof radioCardItemLabelVariants
>;

export interface RadioCardItemLabelProps {
  htmlFor?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<RadioCardItemLabelProps>(), {
  asChild: false,
  as: "label",
});

const classes = computed(() => {
  return radioCardItemLabelVariants({});
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :for="htmlFor"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-radio-card-item-label {
  font-size: var(--font-size-sm);
}
</style>
