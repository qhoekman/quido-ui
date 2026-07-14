<script setup lang="ts">
import { AccordionItem as RekaAccordionItem } from 'reka-ui'

export interface AccordionItemProps {
  value: string
  disabled?: boolean
}

const props = withDefaults(defineProps<AccordionItemProps>(), {
  disabled: false
})
</script>

<template>
  <RekaAccordionItem
    :value="value"
    :disabled="disabled"
    :class="['q-accordion-item']"
    v-bind="$attrs"
  >
    <slot />
  </RekaAccordionItem>
</template>

<style scoped>
.q-accordion-item {
  display: flex;
  flex-direction: column;
  border-bottom: var(--border-width-default) solid var(--color-border);
}
</style>
