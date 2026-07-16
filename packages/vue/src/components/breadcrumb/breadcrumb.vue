<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface BreadcrumbProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="nav"
    :as-child="asChild"
    role="navigation"
    aria-label="breadcrumb"
    data-testid="qui-breadcrumb"
    class="q-breadcrumb"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
}
</style>
