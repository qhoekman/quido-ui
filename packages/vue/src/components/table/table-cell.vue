<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableCellProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableCellProps>(), {
  asChild: false,
  as: "td",
});

const cellClasses = computed(() => ["q-table-cell"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cellClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
td {
  padding: var(--spacing-4);
  vertical-align: middle;
}

td:has([role="checkbox"]) {
  padding-right: 0;
}
</style>
