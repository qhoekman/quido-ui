<script setup lang="ts">
import { DropdownMenuGroup as RekaDropdownMenuGroup } from 'reka-ui'

export interface DropdownMenuGroupProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DropdownMenuGroupProps>(), {
  asChild: false,
  as: 'div'
})
</script>

<template>
  <RekaDropdownMenuGroup
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-group']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDropdownMenuGroup>
</template>

<style scoped>
.q-dropdown-menu-group {
  display: flex;
  flex-direction: column;
}
</style>
