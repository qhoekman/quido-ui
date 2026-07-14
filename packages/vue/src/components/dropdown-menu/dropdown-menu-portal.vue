<script setup lang="ts">
import { MenuPortal as RekaMenuPortal } from 'reka-ui'

export interface DropdownMenuPortalProps {
  container?: HTMLElement
}

const props = defineProps<DropdownMenuPortalProps>()
</script>

<template>
  <RekaMenuPortal :container="container" v-bind="$attrs">
    <slot />
  </RekaMenuPortal>
</template>
