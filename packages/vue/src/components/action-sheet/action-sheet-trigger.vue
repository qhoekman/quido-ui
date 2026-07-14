<script setup lang="ts">
import { inject, computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ActionSheetTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ActionSheetTriggerProps>(), {
  asChild: false,
  as: 'button'
})

const context = inject<{
  open: () => void
}>('actionSheetContext')

if (!context) {
  throw new Error('ActionSheetTrigger must be used within ActionSheet')
}

const handleClick = () => {
  context.open()
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-action-sheet-trigger']"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-action-sheet-trigger {
  cursor: pointer;
}
</style>
