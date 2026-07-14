<script setup lang="ts">
import { MenuRoot } from 'reka-ui'

export interface DropdownProps {
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  dir?: 'ltr' | 'rtl'
}

const props = withDefaults(defineProps<DropdownProps>(), {
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
    :class="['q-dropdown']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </MenuRoot>
</template>

<style scoped>
.q-dropdown {
  position: relative;
}
</style>
