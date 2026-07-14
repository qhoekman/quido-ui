<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface NavigationMenuActionsProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<NavigationMenuActionsProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-navigation-menu-actions"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-navigation-menu-actions"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: var(--spacing-4);
}
</style>
