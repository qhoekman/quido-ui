<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ToolbarLinkProps {
  asChild?: boolean
  as?: string
  href?: string
}

const props = withDefaults(defineProps<ToolbarLinkProps>(), {
  asChild: false,
  as: 'a',
  href: '#'
})

const linkClasses = computed(() => ['q-toolbar-link'])
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :href="as === 'a' ? href : undefined"
    :class="linkClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-toolbar-link {
  color: var(--color-primary);
  display: inline-flex;
  gap: var(--spacing-1);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition-duration: 300ms;
  height: 100%;
  max-height: var(--spacing-12);
}

.q-toolbar-link:active {
  opacity: 0.3;
  transition-duration: 0ms;
}

.q-toolbar-link:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
