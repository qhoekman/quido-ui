<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineItemProps {
  asChild?: boolean;
  as?: "li";
}

const props = withDefaults(defineProps<TimelineItemProps>(), {
  asChild: false,
  as: "li",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-item']"
    data-testid="qui-timeline-item"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  display: grid;
  grid-template-columns: var(--spacing-8) auto;
}
</style>
