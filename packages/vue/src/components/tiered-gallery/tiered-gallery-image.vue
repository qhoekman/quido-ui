<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TieredGalleryImageProps {
  src?: string;
  alt?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TieredGalleryImageProps>(), {
  asChild: false,
  as: "img",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :src="src"
    :alt="alt"
    :class="['q-tiered-gallery-image']"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-tiered-gallery-image {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
