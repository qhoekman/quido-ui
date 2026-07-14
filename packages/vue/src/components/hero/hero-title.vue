<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroTitleProps {
  asChild?: boolean;
  as?: "h1";
}

const props = withDefaults(defineProps<HeroTitleProps>(), {
  asChild: false,
  as: "h1",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-title"
    data-testid="qui-hero-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-wide);
  color: var(--color-background-fg);
  margin: 0;
}

@media (min-width: 1280px) {
  h1 {
    font-size: var(--font-size-5xl);
  }
}
</style>
