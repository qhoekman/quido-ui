<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface NavbarBrandProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarBrandProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-navbar-brand']"
    data-testid="qui-navbar-brand"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-navbar-brand {
  display: flex;
  margin-right: var(--spacing-8);
}

@media (min-width: 1024px) {
  .q-navbar-brand {
    flex: 1;
  }
}
</style>
