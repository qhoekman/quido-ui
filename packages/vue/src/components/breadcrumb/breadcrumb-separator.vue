<script setup lang="ts">
import { Primitive } from "reka-ui";
import { ChevronRight } from "lucide-vue-next";

export interface BreadcrumbSeparatorProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbSeparatorProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="li"
    :as-child="asChild"
    role="presentation"
    aria-hidden="true"
    data-testid="qui-breadcrumb-separator"
    class="q-breadcrumb-separator"
    v-bind="$attrs"
  >
    <slot>
      <ChevronRight :size="16" />
    </slot>
  </Primitive>
</template>

<style scoped>
li {
  list-style: none;
}

li :deep(svg) {
  width: var(--spacing-3-5);
  height: var(--spacing-3-5);
}
</style>
