<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineConnectorProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<TimelineConnectorProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-connector']"
    data-testid="qui-timeline-connector"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: var(--spacing-2);
}
</style>
