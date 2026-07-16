<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface CallToActionSubtitleProps {
  asChild?: boolean;
  as?: "p";
}

const props = withDefaults(defineProps<CallToActionSubtitleProps>(), {
  asChild: false,
  as: "p",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-call-to-action-subtitle"
    data-testid="qui-cta-subtitle"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p {
  max-width: var(--max-width-2xl);
  font-size: var(--font-size-base);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  margin: 0;
}

@media (width >= 768px) {
  p {
    font-size: var(--font-size-lg);
  }
}
</style>
