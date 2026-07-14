<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface BreadcrumbLinkProps {
  href?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbLinkProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="a"
    :as-child="asChild"
    :href="href"
    data-testid="qui-breadcrumb-link"
    class="q-breadcrumb-link"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a {
  color: inherit;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  padding-bottom: var(--spacing-1);
}

a:hover {
  color: var(--color-background-fg);
}
</style>
