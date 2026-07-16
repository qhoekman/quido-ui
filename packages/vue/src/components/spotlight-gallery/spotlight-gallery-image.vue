<script setup lang="ts">
import { Primitive } from 'reka-ui'
</script>

<template>
  <Primitive
    as="img"
    :class="['q-spotlight-gallery-image']"
    data-testid="qui-spotlight-gallery-image"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-spotlight-gallery-image {
  width: 100%;
  aspect-ratio: 1;
}
</style>
