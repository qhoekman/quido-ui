<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroSectionProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<HeroSectionProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-section"
    data-testid="qui-hero-section"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  margin: 0 auto;
  max-width: var(--max-width-2xl);
}
</style>
