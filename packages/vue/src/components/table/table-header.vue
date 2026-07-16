<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableHeaderProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableHeaderProps>(), {
  asChild: false,
  as: "thead",
});

const headerClasses = computed(() => ["q-table-header"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="headerClasses"
    role="rowgroup"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
thead {
  display: table-header-group;
}

thead tr {
  border-bottom: var(--border-width-default) solid var(--color-border);
}
</style>
