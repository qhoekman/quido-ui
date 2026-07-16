<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface LinkProps {
  href?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<LinkProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="a"
    :as-child="asChild"
    :href="href"
    data-testid="qui-link"
    class="q-link"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a {
  display: inline-flex;
  gap: var(--spacing-2);
  color: var(--color-primary);
  text-align: center;
  font-size: var(--font-size-base);
  font-style: normal;
  font-weight: 400;
  line-height: var(--line-height-5);
  text-decoration: none;
  transition: text-decoration 0.2s ease-in-out;
}

a:hover {
  text-decoration: underline;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

a:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
