<script setup lang="ts">
import { DropdownMenuPortal as RekaDropdownMenuPortal } from 'reka-ui'

export interface DropdownMenuPortalProps {
  container?: HTMLElement
}

const props = defineProps<DropdownMenuPortalProps>()
</script>

<template>
  <RekaDropdownMenuPortal :container="container" v-bind="$attrs">
    <slot />
  </RekaDropdownMenuPortal>
</template>
