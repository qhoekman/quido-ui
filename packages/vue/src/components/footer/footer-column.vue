<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterColumnProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterColumnProps>(), {
  asChild: false,
});

const footerColumnClasses = computed(() => ["q-footer-column"]);
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="footerColumnClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  margin-top: var(--spacing-10);
}

@media (width >= 640px) {
  div {
    margin-top: 0;
  }
}
</style>
