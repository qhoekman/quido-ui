<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface NavbarItemsProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarItemsProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-navbar-items']"
    data-testid="qui-navbar-items"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: none;
}

@media (min-width: 768px) {
  div {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
  }
}
</style>
