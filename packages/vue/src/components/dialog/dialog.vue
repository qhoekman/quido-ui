<script setup lang="ts">
import { DialogRoot } from 'reka-ui'

export interface DialogProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
}

const props = withDefaults(defineProps<DialogProps>(), {
  defaultOpen: false,
  // reka-ui's own DialogRoot explicitly sets `open`'s default to
  // `undefined` (not just omitting it) to opt out of Vue's automatic
  // "absent Boolean prop resolves to false" coercion. Without this,
  // consumers that don't explicitly bind `open`/`v-model:open` would
  // silently get `open: false` instead of `undefined`, which flips
  // reka-ui's internal useVModel into controlled mode pinned at `false`
  // forever -- breaking all click/toggle interaction with no error.
  open: undefined,
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
