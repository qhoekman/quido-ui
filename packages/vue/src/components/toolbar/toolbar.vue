<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ToolbarProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-toolbar']"
    v-bind="$attrs"
  >
    <div class="q-toolbar-inner"></div>
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toolbar {
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  left: 0;
  bottom: 0;
  position: fixed;
}

.q-toolbar-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-top: var(--border-width-2) solid var(--color-border);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
}
</style>
