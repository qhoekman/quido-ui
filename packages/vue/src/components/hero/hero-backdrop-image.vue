<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroBackdropImageProps {
  asChild?: boolean;
  as?: "img";
  src?: string;
  alt?: string;
}

const props = withDefaults(defineProps<HeroBackdropImageProps>(), {
  asChild: false,
  as: "img",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-backdrop-image"
    data-testid="qui-hero-backdrop-image"
    :src="props.src"
    :alt="props.alt"
    aria-hidden="true"
    v-bind="$attrs"
  />
</template>

<style scoped>
img {
  position: absolute;
  z-index: -10;
  height: 100%;
  max-height: 90vh;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
}
</style>
