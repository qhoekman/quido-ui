<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderBackdropImageProps {
  src?: string;
  alt?: string;
  as?: "img";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderBackdropImageProps>(), {
  as: "img",
  asChild: false,
  alt: "",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-backdrop-image']"
    :src="src"
    :alt="alt"
    data-testid="qui-header-backdrop-image"
    v-bind="$attrs"
  />
</template>

<style scoped>
img {
  position: absolute;
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.25);
}
</style>
