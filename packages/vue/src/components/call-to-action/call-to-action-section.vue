<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionSectionProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<CallToActionSectionProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-section"
    data-testid="qui-cta-section"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
  margin: 0 auto;
  max-width: var(--max-width-2xl);
  text-align: center;
}

@media (width >= 1280px) {
  div {
    text-align: left;
    margin-left: 0;
  }
}
</style>
