<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface BreadcrumbItemProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="li"
    :as-child="asChild"
    data-testid="qui-breadcrumb-item"
    class="q-breadcrumb-item"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1-5);
}
</style>
