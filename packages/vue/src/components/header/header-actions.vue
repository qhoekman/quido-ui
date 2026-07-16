<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderActionsProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderActionsProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-actions']"
    data-testid="qui-header-actions"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  margin-right: auto;
  display: flex;
  gap: var(--spacing-8);
}
</style>
