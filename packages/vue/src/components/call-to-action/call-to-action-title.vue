<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionTitleProps {
  asChild?: boolean;
  as?: "h2";
}

const props = withDefaults(defineProps<CallToActionTitleProps>(), {
  asChild: false,
  as: "h2",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-title"
    data-testid="qui-cta-title"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-background-fg);
  margin: 0;
}

@media (width >= 768px) {
  h2 {
    font-size: var(--font-size-4xl);
  }
}

@media (width >= 1280px) {
  h2 {
    font-size: var(--font-size-5xl);
  }
}
</style>
