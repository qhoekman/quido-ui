<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TabNavigationItemProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationItemProps>(), {
  asChild: false,
  as: "li",
});

const classes = computed(() => ["q-tab-navigation-item"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-tab-navigation-item"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tab-navigation-item {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
