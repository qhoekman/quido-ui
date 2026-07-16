<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineBulletProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<TimelineBulletProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline-bullet']"
    data-testid="qui-timeline-bullet"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--spacing-6);
  height: var(--spacing-6);
  background-color: var(--color-muted);
  border-radius: 50%;
  border: var(--border-width-default) solid var(--color-border);
  box-shadow: var(--box-shadow-sm);
}
</style>
