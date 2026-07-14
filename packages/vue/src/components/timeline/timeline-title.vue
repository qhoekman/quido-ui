<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineTitleProps {
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const props = withDefaults(defineProps<TimelineTitleProps>(), {
  asChild: false,
  as: "h4",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-title']"
    data-testid="qui-timeline-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}
</style>
