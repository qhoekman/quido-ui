<script setup lang="ts">
import { DialogRoot } from 'reka-ui'

export interface DialogProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  defaultOpen: false,
  modal: true
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const handleOpenChange = (open: boolean) => {
  emit('update:open', open)
}
</script>

<template>
  <DialogRoot
    :default-open="defaultOpen"
    :open="open"
    :modal="modal"
    :class="['q-dialog']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </DialogRoot>
</template>

<style scoped>
.q-dialog {
  position: relative;
}
</style>
