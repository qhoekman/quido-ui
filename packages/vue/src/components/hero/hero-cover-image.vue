<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroCoverImageProps {
  asChild?: boolean;
  as?: "img";
  src?: string;
  alt?: string;
}

const props = withDefaults(defineProps<HeroCoverImageProps>(), {
  asChild: false,
  as: "img",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-cover-image"
    data-testid="qui-hero-cover-image"
    :src="props.src"
    :alt="props.alt"
    loading="lazy"
    aria-hidden="true"
    v-bind="$attrs"
  />
</template>

<style scoped>
img {
  height: 100%;
  max-height: 30vh;
  width: 100%;
  object-fit: cover;
}
</style>
