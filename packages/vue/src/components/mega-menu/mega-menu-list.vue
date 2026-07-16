<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuList } from "reka-ui";

export interface MegaMenuListProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuListProps>(), {
  asChild: false,
  as: "ul",
});

const classes = computed(() => ["q-mega-menu-list"]);
</script>

<template>
  <NavigationMenuList
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuList>
</template>

<style>
.q-mega-menu-list {
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  margin: 0;
  padding: 0;
}
</style>
