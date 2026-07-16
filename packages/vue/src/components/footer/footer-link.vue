<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterLinkProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterLinkProps>(), {
  asChild: false,
});

const footerLinkClasses = computed(() => ["q-footer-link"]);
</script>

<template>
  <Primitive
    as="a"
    :as-child="asChild"
    :class="footerLinkClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
a {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: hsl(from var(--color-background-fg) h s l / 55%);
  text-decoration: underline;
}

a:hover {
  color: hsl(from var(--color-background-fg) h s l / 66%);
}
</style>
