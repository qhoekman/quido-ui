<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderProps {
  as?: "div" | "header" | "section";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header']"
    data-testid="qui-header"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div,
header,
section {
  display: block;
  margin: 0 auto;
  margin-top: var(--spacing-24);
  max-width: var(--columns-7xl);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}

@media (width >= 640px) {
  div,
  header,
  section {
    margin-top: var(--spacing-32);
    padding-left: var(--spacing-6);
    padding-right: var(--spacing-6);
  }
}

@media (width >= 1024px) {
  div,
  header,
  section {
    margin-top: var(--spacing-40);
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
}
</style>
