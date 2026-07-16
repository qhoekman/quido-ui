<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineContentProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<TimelineContentProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-content']"
    data-testid="qui-timeline-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  flex: 1;
  margin-bottom: var(--spacing-4);
}
</style>
