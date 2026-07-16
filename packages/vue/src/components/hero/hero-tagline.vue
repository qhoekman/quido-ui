<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroTaglineProps {
  asChild?: boolean;
  as?: "span";
}

const props = withDefaults(defineProps<HeroTaglineProps>(), {
  asChild: false,
  as: "span",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-tagline"
    data-testid="qui-hero-tagline"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
span {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  margin: 0;
}
</style>
