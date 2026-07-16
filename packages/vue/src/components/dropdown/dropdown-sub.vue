<script setup lang="ts">
import { DropdownMenuSub as RekaDropdownMenuSub } from 'reka-ui'

export interface DropdownSubProps {
  defaultOpen?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<DropdownSubProps>(), {
  defaultOpen: false,
  // Same Vue Boolean-prop auto-default issue as dropdown.vue's `open`:
  // without an explicit `undefined` default, an unbound `open` prop
  // resolves to `false` instead of `undefined`, pinning reka-ui's
  // internal state in controlled mode and permanently blocking the
  // submenu from ever opening.
  open: undefined
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const handleOpenChange = (open: boolean) => {
  emit('update:open', open)
}
</script>

<template>
  <RekaDropdownMenuSub
    :default-open="defaultOpen"
    :open="open"
    :class="['q-dropdown-sub']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuSub>
</template>

<style scoped>
.q-dropdown-sub {
  position: relative;
}
</style>
