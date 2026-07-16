<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroBackdropProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<HeroBackdropProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-backdrop"
    data-testid="qui-hero-backdrop"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
