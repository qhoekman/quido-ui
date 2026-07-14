<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableRowProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableRowProps>(), {
  asChild: false,
  as: "tr",
});

const rowClasses = computed(() => ["q-table-row"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="rowClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
tr {
  display: table-row;
  border-bottom: var(--border-width-default) solid var(--color-border);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: ease-in-out;
  transition-duration: 0.15s;
}

tr:hover {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
}

tr[data-state="selected"] {
  background-color: hsl(from var(--color-background-fg) h s l / 30%);
}
</style>
