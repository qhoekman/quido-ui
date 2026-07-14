<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TabNavigationRailProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationRailProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-tab-navigation-rail"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    role="menubar"
    data-testid="qui-tab-navigation-rail"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div,
[role="menubar"] {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--border-width-default);
  background-color: var(--color-border);
  margin: 0;
  padding: 0;
}
</style>
