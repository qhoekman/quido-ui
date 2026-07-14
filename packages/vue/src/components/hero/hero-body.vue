<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroBodyProps {
  asChild?: boolean;
  as?: "p";
}

const props = withDefaults(defineProps<HeroBodyProps>(), {
  asChild: false,
  as: "p",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-body"
    data-testid="qui-hero-body"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p {
  font-size: var(--font-size-lg);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  margin: 0;
}
</style>
