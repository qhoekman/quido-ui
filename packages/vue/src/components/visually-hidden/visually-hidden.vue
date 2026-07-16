<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface VisuallyHiddenProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<VisuallyHiddenProps>(), {
  asChild: false,
  as: 'span'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-visually-hidden"
    data-testid="qui-visually-hidden"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
