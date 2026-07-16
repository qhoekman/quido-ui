<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderContentProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderContentProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-content']"
    data-testid="qui-header-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: var(--columns-4xl);
  gap: var(--spacing-7);
}
</style>
