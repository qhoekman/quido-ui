<script setup lang="ts">
import { ChevronDown, ChevronRight } from "lucide-vue-next";

export interface TreeItemIndicatorProps {
  expanded?: boolean;
  empty?: boolean;
}

const props = withDefaults(defineProps<TreeItemIndicatorProps>(), {
  expanded: false,
  empty: false,
});
</script>

<template>
  <div
    v-if="!empty"
    data-testid="qui-tree-item-indicator"
    class="q-tree-item-indicator"
  >
    <ChevronDown v-if="expanded" :size="16" />
    <ChevronRight v-else :size="16" />
  </div>
  <div v-else class="q-tree-item-indicator q-tree-item-indicator--empty" />
</template>

<style scoped>
.q-tree-item-indicator {
  margin-right: var(--spacing-2);
  display: inline-flex;
  align-items: center;
  color: var(--color-background-fg);
}

.q-tree-item-indicator--empty {
  display: inline-block;
  width: var(--spacing-4);
  height: var(--spacing-4);
}
</style>
