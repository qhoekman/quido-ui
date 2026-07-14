<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface NavbarActionsProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarActionsProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-navbar-actions']"
    data-testid="qui-navbar-actions"
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
    flex: 1;
    justify-content: flex-end;
    gap: var(--spacing-4);
  }
}
</style>
