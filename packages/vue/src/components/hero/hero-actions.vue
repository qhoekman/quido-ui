<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeroActionsProps {
  asChild?: boolean;
  as?: "div";
}

const props = withDefaults(defineProps<HeroActionsProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-hero-actions"
    data-testid="qui-hero-actions"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  gap: var(--spacing-8);
}
</style>
