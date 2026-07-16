<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuItem } from "reka-ui";

export interface MegaMenuItemProps {
  value?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuItemProps>(), {
  asChild: false,
  as: "li",
});

const classes = computed(() => ["q-mega-menu-item"]);
</script>

<template>
  <NavigationMenuItem
    :value="value"
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuItem>
</template>

<style scoped>
li {
  position: relative;
}
</style>
