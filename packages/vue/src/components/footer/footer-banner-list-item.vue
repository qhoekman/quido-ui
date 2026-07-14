<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterBannerListItemProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterBannerListItemProps>(), {
  asChild: false,
});

const footerBannerListItemClasses = computed(() => ["q-footer-banner-list-item"]);
</script>

<template>
  <Primitive
    as="li"
    :as-child="asChild"
    :class="footerBannerListItemClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
