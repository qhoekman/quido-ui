<script setup lang="ts">
import { TabsContent as RekaTabsContent } from "reka-ui";

export interface TabsContentProps {
  value: string;
  forceMount?: boolean;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabsContentProps>(), {
  forceMount: false,
  asChild: false,
  as: "div",
});
</script>

<template>
  <RekaTabsContent
    :value="value"
    :force-mount="forceMount"
    :as-child="asChild"
    :as="as"
    :class="['q-tabs-content']"
    data-testid="qui-tabs-content"
    v-bind="$attrs"
  >
    <slot />
  </RekaTabsContent>
</template>

<style scoped>
.q-tabs-content {
  margin-top: var(--spacing-2);
  box-shadow: 0 0 0 0 var(--color-background);
  outline: none;
}

.q-tabs-content:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}
</style>
