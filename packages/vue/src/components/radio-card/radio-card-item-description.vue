<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const radioCardItemDescriptionVariants = cva(
  "q-radio-card-item-description",
  {
    variants: {},
    defaultVariants: {},
  }
);

export type RadioCardItemDescriptionVariants = VariantProps<
  typeof radioCardItemDescriptionVariants
>;

export interface RadioCardItemDescriptionProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<RadioCardItemDescriptionProps>(), {
  asChild: false,
  as: "p",
});

const classes = computed(() => {
  return radioCardItemDescriptionVariants({});
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
.q-radio-card-item-description {
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  text-align: left;
}
</style>
