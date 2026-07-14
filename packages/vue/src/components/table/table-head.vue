<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableHeadProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableHeadProps>(), {
  asChild: false,
  as: "th",
});

const headClasses = computed(() => ["q-table-head"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="headClasses"
    role="columnheader"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
th {
  height: var(--spacing-12);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  text-align: left;
  vertical-align: middle;
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);
}

th:has([role="checkbox"]) {
  padding-right: 0;
}
</style>
