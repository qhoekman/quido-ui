<script setup lang="ts">
import { inject } from 'vue'
import { Primitive } from 'reka-ui'

export interface ActionSheetCloseProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetCloseProps>(), {
  asChild: false,
  as: 'button'
})

const context = inject<{
  close: () => void
}>('actionSheetContext')

if (!context) {
  throw new Error('ActionSheetClose must be used within ActionSheet')
}

const handleClick = () => {
  context.close()
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-close']"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-close {
  cursor: pointer;
}
</style>
