<script setup lang="ts">
import { Primitive } from 'reka-ui'
</script>

<template>
  <Primitive
    as="div"
    :class="['q-spotlight-gallery-content']"
    data-testid="qui-spotlight-gallery-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-spotlight-gallery-content {
  width: 100%;
  aspect-ratio: 1;
}
</style>
