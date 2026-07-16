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
  // reka-ui's own CollapsibleRoot explicitly sets `open`'s default to
  // `undefined` (not just omitting it) to opt out of Vue's automatic
  // "absent Boolean prop resolves to false" coercion. Without this,
  // consumers that don't explicitly bind `open`/`v-model:open` would
  // silently get `open: false` instead of `undefined`, which flips
  // reka-ui's internal useVModel into controlled mode pinned at `false`
  // forever -- breaking all click/toggle interaction with no error.
  open: undefined,
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

