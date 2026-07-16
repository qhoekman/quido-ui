<script setup lang="ts">
import { CollapsibleContent as RekaCollapsibleContent } from "reka-ui";

export interface CollapsibleContentProps {
  forceMount?: boolean;
}

const props = withDefaults(defineProps<CollapsibleContentProps>(), {
  forceMount: false,
});
</script>

<template>
  <RekaCollapsibleContent
    :force-mount="forceMount"
    :class="['q-collapsible-content']"
    v-bind="$attrs"
  >
    <slot />
  </RekaCollapsibleContent>
</template>

<style scoped>
.q-collapsible-content {
  padding: var(--spacing-1) var(--spacing-3);
  overflow: hidden;
}

.q-collapsible-content[data-state="open"] {
  animation: slideDown 300ms ease-out;
}

.q-collapsible-content[data-state="closed"] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-collapsible-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-collapsible-content-height);
  }
  to {
    height: 0;
  }
}
</style>


