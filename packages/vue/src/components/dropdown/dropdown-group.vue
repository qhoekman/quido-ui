<script setup lang="ts">
import { MenuGroup as RekaMenuGroup } from 'reka-ui'

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
  <RekaMenuGroup
    :as-child="asChild"
    :as="as"
    :class="['q-dropdown-group']"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuGroup>
</template>

<style scoped>
.q-dropdown-group {
  display: flex;
  flex-direction: column;
}
</style>
