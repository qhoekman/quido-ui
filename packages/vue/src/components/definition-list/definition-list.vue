<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface DefinitionListProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<DefinitionListProps>(), {
  asChild: false
})

const classes = computed(() => ['q-definition-list'])
</script>

<template>
  <Primitive
    as="dl"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
dl {
  display: block;
}

dl > * + * {
  border-top: var(--border-width-default) solid var(--color-border);
}
</style>
