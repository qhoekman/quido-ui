<script setup lang="ts">
import { DropdownMenuRoot } from 'reka-ui'

export interface DropdownProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  dir?: 'ltr' | 'rtl'
}

const props = withDefaults(defineProps<DropdownProps>(), {
  defaultOpen: false,
  // reka-ui's own DropdownMenuRoot explicitly sets `open`'s default to
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
  <DropdownMenuRoot
    :default-open="defaultOpen"
    :open="open"
    :modal="modal"
    :dir="dir"
    :class="['q-dropdown']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </DropdownMenuRoot>
</template>

<style scoped>
.q-dropdown {
  position: relative;
}
</style>
