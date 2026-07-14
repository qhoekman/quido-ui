<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CTAProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<CTAProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-cta"
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
