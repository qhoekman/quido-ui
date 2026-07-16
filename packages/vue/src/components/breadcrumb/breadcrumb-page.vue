<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface BreadcrumbPageProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbPageProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="span"
    :as-child="asChild"
    aria-current="page"
    data-testid="qui-breadcrumb-page"
    class="q-breadcrumb-page"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
span {
  color: var(--color-background-fg);
  padding-bottom: var(--spacing-1);
}
</style>
