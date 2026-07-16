<script setup lang="ts">
import { DropdownMenuPortal as RekaDropdownMenuPortal } from 'reka-ui'

export interface DropdownPortalProps {
  container?: HTMLElement
}

const props = defineProps<DropdownPortalProps>()
</script>

<template>
  <RekaDropdownMenuPortal :container="container" v-bind="$attrs">
    <slot />
  </RekaDropdownMenuPortal>
</template>
