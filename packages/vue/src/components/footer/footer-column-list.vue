<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterColumnListProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterColumnListProps>(), {
  asChild: false,
});

const footerColumnListClasses = computed(() => ["q-footer-column-list"]);
</script>

<template>
  <Primitive
    as="ul"
    :as-child="asChild"
    :class="footerColumnListClasses"
    role="list"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  margin: var(--spacing-2) 0 0 0;
  padding: 0;
}

@media (width >= 1024px) {
  ul {
    margin-top: var(--spacing-2);
  }
}
</style>
