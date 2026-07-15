<script setup lang="ts">
import { DropdownMenuGroup as RekaDropdownMenuGroup } from 'reka-ui'

export interface DropdownGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownGroupProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaDropdownMenuGroup
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-group']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuGroup>
</template>

<style scoped>
.q-dropdown-group {
  display: flex;
  flex-direction: column;
}
</style>
