<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface NavigationMenuProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavigationMenuProps>(), {
  asChild: false,
  as: "nav",
});

const classes = computed(() => ["q-navigation-menu"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-navigation-menu"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
nav,
[role="navigation"] {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: var(--breakpoint-xl);
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-4);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-8);
}
</style>
