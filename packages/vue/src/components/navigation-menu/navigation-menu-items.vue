<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface NavigationMenuItemsProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavigationMenuItemsProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-navigation-menu-items"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-navigation-menu-items"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-navigation-menu-items {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  flex: 1;
}
</style>
