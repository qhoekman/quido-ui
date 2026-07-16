<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionBackdropProps {
  asChild?: boolean;
  as?: "img";
  src?: string;
  alt?: string;
}

const props = withDefaults(defineProps<CallToActionBackdropProps>(), {
  asChild: false,
  as: "img",
  alt: "",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-backdrop"
    data-testid="qui-cta-backdrop"
    :src="src"
    :alt="alt"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -50;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
}
</style>
