<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderTaglineProps {
  as?: "h3";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderTaglineProps>(), {
  as: "h3",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-tagline']"
    data-testid="qui-header-tagline"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  margin: 0;
}
</style>
