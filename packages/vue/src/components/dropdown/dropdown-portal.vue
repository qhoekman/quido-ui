<script setup lang="ts">
import { MenuPortal as RekaMenuPortal } from 'reka-ui'

export interface DropdownPortalProps {
  container?: HTMLElement
}

const props = defineProps<DropdownPortalProps>()
</script>

<template>
  <RekaMenuPortal :container="container" v-bind="$attrs">
    <slot />
  </RekaMenuPortal>
</template>
