<script setup lang="ts">
import { Primitive } from 'reka-ui'

export interface ToolbarContentProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ToolbarContentProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-toolbar-content']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toolbar-content {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  height: var(--spacing-11);
}
</style>
