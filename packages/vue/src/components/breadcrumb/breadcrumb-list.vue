<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface BreadcrumbListProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbListProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="ol"
    :as-child="asChild"
    data-testid="qui-breadcrumb-list"
    class="q-breadcrumb-list"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-3);
  word-break: break-word;
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (width >= 640px) {
  ol {
    gap: var(--spacing-8);
  }
}
</style>
