<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TableCaptionProps {
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TableCaptionProps>(), {
  asChild: false,
  as: "caption",
});

const captionClasses = computed(() => ["q-table-caption"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="captionClasses"
    data-testid="qui-table-caption"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
caption {
  margin-top: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: var(--color-background-fg);
}
</style>
