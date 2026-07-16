<script setup lang="ts">
import { ChevronUp, ChevronDown } from "lucide-vue-next";
</script>

<template>
  <span class="q-tab-navigation-indicator" data-testid="qui-tab-navigation-indicator">
    <ChevronUp class="chevron-up" :size="16" aria-hidden="true" />
    <ChevronDown class="chevron-down" :size="16" aria-hidden="true" />
  </span>
</template>

<style scoped>
.q-tab-navigation-indicator {
  display: inline-block;
  width: var(--spacing-4);
  height: var(--spacing-4);
}

.chevron-up {
  display: none;
}

.chevron-down {
  display: block;
}
</style>

<style>
/* Global style to handle parent aria-expanded state */
[aria-expanded="true"] .q-tab-navigation-indicator .chevron-up {
  display: block;
}

[aria-expanded="true"] .q-tab-navigation-indicator .chevron-down {
  display: none;
}
</style>
