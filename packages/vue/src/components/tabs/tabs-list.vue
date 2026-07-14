<script setup lang="ts">
import { computed } from "vue";
import { TabsList as RekaTabsList } from "reka-ui";

export interface TabsListProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabsListProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <RekaTabsList
    :as-child="asChild"
    :as="as"
    :class="['q-tabs-list']"
    data-testid="qui-tabs-list"
    v-bind="$attrs"
  >
    <slot />
  </RekaTabsList>
</template>

<style scoped>
div {
  display: inline-flex;
  height: var(--spacing-10);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  padding: var(--spacing-1);
}

div :deep(a),
div :deep(button) {
  position: relative;
  border-radius: 0;
  margin: 0;
}

div :deep(a:first-child),
div :deep(button:first-child) {
  border-top-left-radius: var(--border-radius-md);
  border-bottom-left-radius: var(--border-radius-md);
}

div :deep(a:last-child),
div :deep(button:last-child) {
  border-top-right-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
}
</style>
