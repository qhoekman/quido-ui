<script setup lang="ts">
import { MenuGroup as RekaMenuGroup } from 'reka-ui'

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
  <RekaMenuGroup
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-menu-group']"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuGroup>
</template>

<style scoped>
.q-dropdown-menu-group {
  display: flex;
  flex-direction: column;
}
</style>
