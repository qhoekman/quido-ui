<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { MoreHorizontal } from 'lucide-vue-next'

export interface PaginationEllipsisProps {
  asChild?: boolean
  as?: 'span'
}

const props = withDefaults(defineProps<PaginationEllipsisProps>(), {
  asChild: false,
  as: 'span'
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-pagination-ellipsis']"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <MoreHorizontal :size="16" />
    <span class="sr-only">More pages</span>
  </Primitive>
</template>

<style scoped>
.q-pagination-ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--spacing-9);
  height: var(--spacing-9);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
