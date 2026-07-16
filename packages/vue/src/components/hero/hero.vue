<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<HeroProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero"
    data-testid="qui-hero"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  align-items: center;
  gap: var(--spacing-14);
}

@media (min-width: 1024px) {
  div {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
