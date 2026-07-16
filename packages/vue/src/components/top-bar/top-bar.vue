<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TopBarProps {
  as?: "header" | "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<TopBarProps>(), {
  as: "header",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-top-bar"
    data-testid="qui-top-bar"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
header,
div {
  display: flex;
  height: var(--spacing-10);
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}
</style>
