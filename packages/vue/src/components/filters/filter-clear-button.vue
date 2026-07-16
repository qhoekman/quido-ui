<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore } from './useFilterStore'
import Button from '../button/button.vue'
import type { ButtonVariants } from '../button/button.vue'

export interface FilterClearButtonProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  as?: 'button' | 'a'
  asChild?: boolean
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<FilterClearButtonProps>(), {
  variant: 'primary',
  size: 'md',
  asChild: false,
  disabled: false,
  loading: false,
  fullWidth: false
})

const { filters, clearFilters } = useFilterStore()

const isHidden = computed(() => Object.keys(filters).length === 0)

const handleClick = () => {
  clearFilters()
}
</script>

<template>
  <Button
    v-if="!isHidden"
    :variant="variant"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :full-width="fullWidth"
    :as="as"
    :as-child="asChild"
    :class="['q-filter-clear-button']"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Button>
</template>

<style scoped>
.q-filter-clear-button {
  display: flex;
}
</style>
