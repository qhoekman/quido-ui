<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterColumnsProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterColumnsProps>(), {
  asChild: false,
});

const footerColumnsClasses = computed(() => ["q-footer-columns"]);
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="footerColumnsClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: block;
}

@media (width >= 640px) {
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-10);
  }
}

@media (width >= 1280px) {
  div {
    gap: var(--spacing-20);
  }
}
</style>
