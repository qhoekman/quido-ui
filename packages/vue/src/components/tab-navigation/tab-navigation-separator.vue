<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TabNavigationSeparatorProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationSeparatorProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-tab-navigation-separator"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    role="separator"
    data-testid="qui-tab-navigation-separator"
    aria-orientation="horizontal"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div,
[role="separator"] {
  background-color: var(--color-border);
  height: var(--spacing-px);
  margin: var(--spacing-1) calc(-1 * var(--spacing-1));
}
</style>
