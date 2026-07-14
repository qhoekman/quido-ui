<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface NavbarProps {
  as?: "nav" | "header";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarProps>(), {
  as: "nav",
  asChild: false,
});
</script>

<template>
  <header class="q-navbar-header">
    <Primitive
      :as="as"
      :as-child="asChild"
      :class="['q-navbar']"
      data-testid="qui-navbar"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </header>
</template>

<style scoped>
.q-navbar-header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: var(--z-index-50);
  border-bottom: var(--border-width-default) solid var(--color-border);
  padding: var(--spacing-6);
}

nav,
header {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 80rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 1024px) {
  nav,
  header {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
}
</style>
