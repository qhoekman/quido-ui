<script setup lang="ts">
import { computed, useSlots } from "vue";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "reka-ui";

export interface TieredGalleryProps {
  defaultValue?: string;
  value?: string;
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TieredGalleryProps>(), {
  orientation: "horizontal",
  activationMode: "automatic",
  asChild: false,
  as: "div",
});

const emit = defineEmits<{
  "update:value": [value: string];
}>();

const slots = useSlots();
const defaultSlot = slots.default?.() || [];

const handleValueChange = (value: string) => {
  emit("update:value", value);
};

const children = computed(() => {
  return defaultSlot.filter((node) => {
    // Filter out comments and empty text nodes
    if (node.type === "comment") return false;
    if (node.type === "text") {
      const text = typeof node.children === "string" ? node.children : "";
      return text.trim().length > 0;
    }
    return true;
  });
});
</script>

<template>
  <TabsRoot
    :default-value="defaultValue"
    :value="value"
    :orientation="orientation"
    :activation-mode="activationMode"
    :as-child="asChild"
    :as="as"
    :class="['q-tiered-gallery']"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <div class="q-tiered-gallery__list-container">
      <TabsList :class="['q-tiered-gallery__list']">
        <TabsTrigger
          v-for="(child, i) in children"
          :key="`tab-${i}`"
          :value="`${i}`"
          :class="['q-tiered-gallery__trigger']"
        >
          <component :is="child" />
        </TabsTrigger>
      </TabsList>
    </div>
    <div class="q-tiered-gallery__content-container">
      <TabsContent
        v-for="(child, i) in children"
        :key="`tabcontent-${i}`"
        :value="`${i}`"
        :class="['q-tiered-gallery__content']"
      >
        <component :is="child" />
      </TabsContent>
    </div>
  </TabsRoot>
</template>

<style scoped>
.q-tiered-gallery {
  display: flex;
  flex-direction: column-reverse;
}

.q-tiered-gallery__list-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-6);
  display: none;
  width: 100%;
  max-width: var(--columns-2xl);
}

@media (min-width: 640px) {
  .q-tiered-gallery__list-container {
    display: block;
  }
}

@media (min-width: 1024px) {
  .q-tiered-gallery__list-container {
    max-width: none;
  }
}

.q-tiered-gallery__list {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
}

.q-tiered-gallery__trigger {
  position: relative;
  display: flex;
  aspect-ratio: 1 / 1;
  height: var(--spacing-24);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  color: var(--color-muted-fg);
  border: 0 none;
  outline: none;
  overflow: hidden;
}

.q-tiered-gallery__trigger:hover:not(:disabled) {
  background-color: var(--color-muted);
}

.q-tiered-gallery__trigger:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(from var(--color-ring) h s l / 50%),
    0 0 0 4px var(--color-background);
}

.q-tiered-gallery__content-container {
  aspect-ratio: 1 / 1;
  width: 100%;
}

.q-tiered-gallery__content {
  margin-top: var(--spacing-2);
}
</style>
