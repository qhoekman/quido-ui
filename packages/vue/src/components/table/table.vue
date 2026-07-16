<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableProps>(), {
  asChild: false,
  as: "table",
});

const tableClasses = computed(() => ["q-table"]);
</script>

<template>
  <div class="q-table-wrapper">
    <Primitive
      :as="as"
      :as-child="asChild"
      :class="tableClasses"
      data-testid="qui-table"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </div>
</template>

<style scoped>
.q-table-wrapper {
  position: relative;
  width: 100%;
  overflow: auto;
}

table {
  width: 100%;
  caption-side: bottom;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  text-indent: 0;
  border-collapse: collapse;
}
</style>
