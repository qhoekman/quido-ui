<script setup lang="ts">
import { computed, ref, useSlots } from "vue";
import Collapsible from "../collapsible/collapsible.vue";
import CollapsibleTrigger from "../collapsible/collapsible-trigger.vue";
import CollapsibleContent from "../collapsible/collapsible-content.vue";
import TreeItemIndicator from "./tree-item-indicator.vue";

export interface TreeItemProps {
  expanded?: boolean;
  defaultExpanded?: boolean;
}

const props = withDefaults(defineProps<TreeItemProps>(), {
  expanded: undefined,
  defaultExpanded: false,
});

const emit = defineEmits<{
  "update:expanded": [value: boolean];
}>();

const slots = useSlots();
const isOpen = ref(props.defaultExpanded);

const hasGroups = computed(() => {
  return !!slots.default;
});

const isExpanded = computed(() => {
  return props.expanded !== undefined ? props.expanded : isOpen.value;
});

const handleOpenChange = (open: boolean) => {
  if (props.expanded === undefined) {
    isOpen.value = open;
  }
  emit("update:expanded", open);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleOpenChange(!isExpanded.value);
  }
};
</script>

<template>
  <div class="q-tree-item">
    <Collapsible
      :open="isExpanded"
      @update:open="handleOpenChange"
      role="treeitem"
      :aria-expanded="isExpanded"
      aria-selected="false"
    >
      <CollapsibleTrigger as="div" class="q-tree-item-trigger-wrapper">
        <div
          role="button"
          data-testid="qui-tree-item-trigger"
          class="q-tree-item-trigger"
          tabindex="0"
          @keydown="handleKeydown"
        >
          <TreeItemIndicator
            :empty="!hasGroups"
            :expanded="isExpanded"
          />
          <slot name="icon" />
          <slot name="label" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <slot />
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>

<style scoped>
.q-tree-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.q-tree-item-trigger-wrapper {
  width: 100%;
}

.q-tree-item-trigger {
  display: flex;
  align-items: center;
  width: 100%;
}

.q-tree-item-trigger:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
