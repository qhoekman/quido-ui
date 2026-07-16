<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionActionsProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<CallToActionActionsProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-actions"
    data-testid="qui-cta-actions"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  max-width: var(--max-width-md);
  width: 100%;
}

@media (width >= 1024px) {
  div {
    flex-direction: row;
    justify-content: center;
    gap: var(--spacing-4);
  }
}
</style>
