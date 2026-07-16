<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterCopyrightProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterCopyrightProps>(), {
  asChild: false,
});

const footerCopyrightClasses = computed(() => ["q-footer-copyright"]);
</script>

<template>
  <Primitive
    as="p"
    :as-child="asChild"
    :class="footerCopyrightClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
p {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-5);
  color: hsl(from var(--color-background-fg) h s l / 55%);
  margin: 0;
}
</style>
