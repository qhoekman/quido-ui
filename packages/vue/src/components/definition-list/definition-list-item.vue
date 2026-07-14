<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DefinitionListItemProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<DefinitionListItemProps>(), {
  asChild: false
})

const classes = computed(() => ['q-definition-list-item'])
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
}

@media (min-width: 640px) {
  div {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing-4);
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
