<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineSeparatorProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<TimelineSeparatorProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-separator']"
    data-testid="qui-timeline-separator"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  width: var(--border-width-default);
  height: 100%;
  background-color: var(--color-border);
  margin: 0 auto;
}
</style>
