<script setup lang="ts">
import { MenuRoot } from 'reka-ui'

export interface DropdownMenuProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  dir?: 'ltr' | 'rtl'
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
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
  <MenuRoot
    :default-open="defaultOpen"
    :open="open"
    :modal="modal"
    :dir="dir"
    :class="['q-dropdown-menu']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </MenuRoot>
</template>

<style scoped>
.q-dropdown-menu {
  position: relative;
}
</style>
