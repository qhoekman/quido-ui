<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableBodyProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableBodyProps>(), {
  asChild: false,
  as: "tbody",
});

const bodyClasses = computed(() => ["q-table-body"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="bodyClasses"
    role="rowgroup"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
tbody {
  display: table-row-group;
}

tbody tr:last-child {
  border-bottom: 0;
}
</style>
