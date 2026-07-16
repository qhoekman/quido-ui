<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderBodyProps {
  as?: "p";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderBodyProps>(), {
  as: "p",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-body']"
    data-testid="qui-header-body"
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
