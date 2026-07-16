<script setup lang="ts">
import { computed } from "vue";
import { MenubarRoot } from "reka-ui";

export interface MenubarProps {
  modelValue?: string;
  defaultValue?: string;
  dir?: "ltr" | "rtl";
  loop?: boolean;
}

const props = withDefaults(defineProps<MenubarProps>(), {
  loop: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const classes = computed(() => ["q-menubar"]);
</script>

<template>
  <MenubarRoot
    :model-value="modelValue"
    :default-value="defaultValue"
    :dir="dir"
    :loop="loop"
    :class="classes"
    data-testid="qui-menubar"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </MenubarRoot>
</template>

<style scoped>
div,
[role="menubar"] {
  display: flex;
  gap: var(--spacing-2);
}
</style>
