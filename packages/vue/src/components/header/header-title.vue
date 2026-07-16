<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderTitleProps {
  as?: "h2";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderTitleProps>(), {
  as: "h2",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-title']"
    data-testid="qui-header-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h2 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-background-fg);
  margin: 0;
}

@media (width >= 1280px) {
  h2 {
    font-size: var(--font-size-5xl);
  }
}
</style>
