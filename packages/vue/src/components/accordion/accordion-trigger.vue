<script setup lang="ts">
import { AccordionHeader as RekaAccordionHeader, AccordionTrigger as RekaAccordionTrigger } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'

export interface AccordionTriggerProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AccordionTriggerProps>(), {
  asChild: false,
  as: 'button'
})
</script>

<template>
  <RekaAccordionHeader :class="['q-accordion-header']">
    <RekaAccordionTrigger
      :as-child="asChild"
      :as="as"
      :class="['q-accordion-trigger']"
      v-bind="$attrs"
    >
      <slot />
      <ChevronDown :size="16" :class="['q-accordion-trigger-icon']" aria-hidden="true" />
    </RekaAccordionTrigger>
  </RekaAccordionHeader>
</template>

<style scoped>
.q-accordion-header {
  display: flex;
}

.q-accordion-trigger {
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
}

.q-accordion-trigger:hover:not(:disabled) {
  text-decoration: underline;
}

.q-accordion-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.q-accordion-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.q-accordion-trigger[data-state="open"] .q-accordion-trigger-icon {
  transform: rotate(180deg);
}

.q-accordion-trigger-icon {
  color: var(--color-muted-fg);
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  transition: transform 0.2s;
}
</style>
