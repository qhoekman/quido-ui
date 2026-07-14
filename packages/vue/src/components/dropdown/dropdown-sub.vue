<script setup lang="ts">
import { MenuSub as RekaMenuSub } from 'reka-ui'

export interface DropdownSubProps {
  defaultOpen?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<DropdownSubProps>(), {
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
  <RekaMenuSub
    :default-open="defaultOpen"
    :open="open"
    :class="['q-dropdown-sub']"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuSub>
</template>

<style scoped>
.q-dropdown-sub {
  position: relative;
}
</style>
