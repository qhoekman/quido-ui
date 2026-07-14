<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

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
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :data-value="value"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  position: relative;
}
</style>
