<script setup lang="ts">
import { computed } from "vue";
import { MenuGroup as RekaMenuGroup } from "reka-ui";

export interface MenubarGroupProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarGroupProps>(), {
  asChild: false,
  as: "ol",
});

const classes = computed(() => ["q-menubar-group"]);
</script>

<template>
  <RekaMenuGroup
    :as-child="asChild"
    :as="as"
    :class="classes"
    data-testid="qui-menubar-group"
    v-bind="$attrs"
  >
    <slot />
  </RekaMenuGroup>
</template>

<style scoped>
ol,
div {
  padding: 0;
  margin: 0;
  overflow: hidden auto;
}
</style>
