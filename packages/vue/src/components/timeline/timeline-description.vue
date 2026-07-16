<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineDescriptionProps {
  asChild?: boolean;
  as?: "p" | "span";
}

const props = withDefaults(defineProps<TimelineDescriptionProps>(), {
  asChild: false,
  as: "p",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-description']"
    data-testid="qui-timeline-description"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p,
span {
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-normal);
  margin: 0;
  color: hsl(from var(--color-background-fg) h s l / 66%);
}
</style>
