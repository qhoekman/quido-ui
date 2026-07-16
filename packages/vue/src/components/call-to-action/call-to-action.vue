<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<CallToActionProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action"
    data-testid="qui-cta"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  position: relative;
  padding: var(--spacing-16) 0;
  width: 100%;
}
</style>
