<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

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
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ul,
[role="list"] {
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
