<script setup lang="ts">
import { AvatarFallback as RekaAvatarFallback } from 'reka-ui'

export interface AvatarFallbackProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<AvatarFallbackProps>(), {
  asChild: false
})
</script>

<template>
  <RekaAvatarFallback
    :as-child="asChild"
    class="q-avatar-fallback"
    v-bind="$attrs"
  >
    <slot />
  </RekaAvatarFallback>
</template>

<style scoped>
.q-avatar-fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}
</style>
