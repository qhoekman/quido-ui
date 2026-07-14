<script setup lang="ts">
import { DialogTitle as RekaDialogTitle } from 'reka-ui'

export interface DialogTitleProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<DialogTitleProps>(), {
  asChild: false,
  as: 'h2'
})
</script>

<template>
  <RekaDialogTitle
    :as-child="asChild"
    :as="as"
    :class="['q-dialog-title']"
    v-bind="$attrs"
  >
    <slot />
  </RekaDialogTitle>
</template>

<style scoped>
.q-dialog-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0;
}
</style>
