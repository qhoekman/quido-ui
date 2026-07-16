<script setup lang="ts">
import { DropdownMenuRadioGroup as RekaDropdownMenuRadioGroup } from 'reka-ui'

export interface DropdownMenuRadioGroupProps {
  value?: string
  defaultValue?: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuRadioGroupProps>(), {
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:value': [value: string]
}>()

const handleValueChange = (value: string) => {
  emit('update:value', value)
}
</script>

<template>
  <RekaDropdownMenuRadioGroup
    :value="value"
    :default-value="defaultValue"
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-radio-group']"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuRadioGroup>
</template>

<style scoped>
.q-dropdown-menu-radio-group {
  display: flex;
  flex-direction: column;
}
</style>
