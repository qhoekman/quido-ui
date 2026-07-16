<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionContentProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<CallToActionContentProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-content"
    data-testid="qui-cta-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  margin: 0 auto;
  max-width: var(--max-width-7xl);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

@media (width >= 640px) {
  div {
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }
}

@media (width >= 1024px) {
  div {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
}
</style>
