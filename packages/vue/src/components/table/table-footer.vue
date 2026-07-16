<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableFooterProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableFooterProps>(), {
  asChild: false,
  as: "tfoot",
});

const footerClasses = computed(() => ["q-table-footer"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="footerClasses"
    role="rowgroup"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
tfoot {
  display: table-footer-group;
  border-top: var(--border-width-default) solid var(--color-border);
  background-color: hsl(from var(--color-muted) h s l / 50%);
  font-weight: var(--font-weight-medium);
}

tfoot tr:last-child {
  border-bottom: 0;
}
</style>
