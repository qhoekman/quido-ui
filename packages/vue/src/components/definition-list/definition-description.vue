<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DefinitionDescriptionProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<DefinitionDescriptionProps>(), {
  asChild: false
})

const classes = computed(() => ['q-definition-description'])
</script>

<template>
  <Primitive
    as="dd"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
dd {
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: var(--color-muted-fg);
}

@media (min-width: 640px) {
  dd {
    grid-column: span 2 / span 2;
    margin-top: 0;
  }
}
</style>
