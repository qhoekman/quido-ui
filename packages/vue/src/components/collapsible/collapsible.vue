<script setup lang="ts">
import { CollapsibleRoot } from 'reka-ui'

export interface CollapsibleProps {
  defaultOpen?: boolean
  open?: boolean
  disabled?: boolean
  unmountOnHide?: boolean
}

const props = withDefaults(defineProps<CollapsibleProps>(), {
  defaultOpen: false,
  disabled: false,
  unmountOnHide: true
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const handleOpenChange = (open: boolean) => {
  emit('update:open', open)
}
</script>

<template>
  <CollapsibleRoot
    :default-open="defaultOpen"
    :open="open"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    :class="['q-collapsible']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </CollapsibleRoot>
</template>

<style scoped>
.q-collapsible {
  display: flex;
  flex-direction: column;
}
</style>

