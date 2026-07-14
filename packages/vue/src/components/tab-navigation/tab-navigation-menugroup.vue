<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface TabNavigationMenugroupProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabNavigationMenugroupProps>(), {
  asChild: false,
  as: "ol",
});

const classes = computed(() => ["q-tab-navigation-menugroup"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-tab-navigation-menugroup"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ol {
  padding: 0;
  margin: 0;
  overflow: hidden auto;
}
</style>
