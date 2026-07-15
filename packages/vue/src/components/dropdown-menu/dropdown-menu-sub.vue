<script setup lang="ts">
import { DropdownMenuSub as RekaDropdownMenuSub } from 'reka-ui'

export interface DropdownMenuSubProps {
  defaultOpen?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<DropdownMenuSubProps>(), {
  defaultOpen: false
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
    :class="['q-dropdown-menu-sub']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuSub>
</template>

<style scoped>
.q-dropdown-menu-sub {
  position: relative;
}
</style>
