<script setup lang="ts">
import { AccordionContent as RekaAccordionContent } from 'reka-ui'

export interface AccordionContentProps {
  forceMount?: boolean
}

const props = withDefaults(defineProps<AccordionContentProps>(), {
  forceMount: false
})
</script>

<template>
  <RekaAccordionContent
    :force-mount="forceMount"
    :class="['q-accordion-content']"
    v-bind="$attrs"
  >
    <div :class="['q-accordion-content-inner']">
      <slot />
    </div>
  </RekaAccordionContent>
</template>

<style scoped>
.q-accordion-content {
  overflow: hidden;
  font-size: var(--font-size-sm);
}

.q-accordion-content[data-state="closed"] {
  animation: accordionUp 0.2s ease-out;
}

.q-accordion-content[data-state="open"] {
  animation: accordionDown 0.2s ease-out;
}

.q-accordion-content-inner {
  padding-top: 0;
  padding-bottom: var(--spacing-4);
}

@keyframes accordionDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes accordionUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
