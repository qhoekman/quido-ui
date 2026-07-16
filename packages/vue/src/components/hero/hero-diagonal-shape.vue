<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroDiagonalShapeProps {
  asChild?: boolean;
  as?: "svg";
}

const props = withDefaults(defineProps<HeroDiagonalShapeProps>(), {
  asChild: false,
  as: "svg",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-diagonal-shape"
    data-testid="qui-hero-diagonal-shape"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <polygon points="0,0 90,0 50,100 0,100" />
  </Primitive>
</template>

<style scoped>
svg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(-1 * var(--spacing-10));
  display: none;
  height: 100%;
  width: var(--spacing-44);
  transform: translateZ(0);
  fill: var(--color-white);
}

@media (min-width: 1024px) {
  svg {
    display: block;
  }
}
</style>
