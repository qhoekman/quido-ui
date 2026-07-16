<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterColumnListItemProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterColumnListItemProps>(), {
  asChild: false,
});

const footerColumnListItemClasses = computed(() => ["q-footer-column-list-item"]);
</script>

<template>
  <Primitive
    as="li"
    :as-child="asChild"
    :class="footerColumnListItemClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-6);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  list-style: none;
  margin: 0;
  padding: 0;
}

li:hover {
  color: var(--color-background-fg);
}
</style>
