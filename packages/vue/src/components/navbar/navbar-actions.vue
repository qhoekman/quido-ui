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
.q-navbar-actions {
  display: none;
}

@media (min-width: 768px) {
  .q-navbar-actions {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: var(--spacing-4);
  }
}
</style>
