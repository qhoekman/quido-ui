<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface NavigationMenuLogoProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavigationMenuLogoProps>(), {
  asChild: false,
  as: "a",
});

const classes = computed(() => ["q-navigation-menu-logo"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-navigation-menu-logo"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a {
  display: flex;
  color: var(--color-background-fg);
  fill: currentColor;
  height: var(--spacing-8);
}
</style>
