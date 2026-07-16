<script setup lang="ts">
import { AvatarImage as RekaAvatarImage } from 'reka-ui'

export interface AvatarImageProps {
  src?: string
  alt?: string
  asChild?: boolean
}

const props = withDefaults(defineProps<AvatarImageProps>(), {
  asChild: false
})
</script>

<template>
  <RekaAvatarImage
    :src="src"
    :alt="alt"
    :as-child="asChild"
    class="q-avatar-image"
    v-bind="$attrs"
  />
</template>

<style scoped>
.q-avatar-image {
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: var(--color-black);
}
</style>
