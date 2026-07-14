<script setup lang="ts">
import { TabsRoot } from "reka-ui";

export interface TabsProps {
  defaultValue?: string;
  value?: string;
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: "horizontal",
  activationMode: "automatic",
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:value": [value: string];
}>();

const handleValueChange = (value: string) => {
  emit("update:value", value);
};
</script>

<template>
  <TabsRoot
    :default-value="defaultValue"
    :value="value"
    :orientation="orientation"
    :activation-mode="activationMode"
    :as-child="asChild"
    :as="as"
    :class="['q-tabs']"
    data-testid="qui-tabs"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </TabsRoot>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
