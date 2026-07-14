<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DefinitionTermProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<DefinitionTermProps>(), {
  asChild: false
})

const classes = computed(() => ['q-definition-term'])
</script>

<template>
  <Primitive
    as="dt"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
dt {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
}
</style>
