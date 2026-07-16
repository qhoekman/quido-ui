<script setup lang="ts">
import { Primitive } from "reka-ui";
import { MoreHorizontal } from "lucide-vue-next";

export interface BreadcrumbEllipsisProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbEllipsisProps>(), {
  asChild: false,
});
</script>

<template>
  <Primitive
    as="span"
    :as-child="asChild"
    role="presentation"
    aria-hidden="true"
    data-testid="qui-breadcrumb-ellipsis"
    class="q-breadcrumb-ellipsis"
    v-bind="$attrs"
  >
    <slot>
      <MoreHorizontal :size="14" />
      <span class="visually-hidden">More</span>
    </slot>
  </Primitive>
</template>

<style scoped>
span {
  display: flex;
  align-items: center;
  justify-content: center;
}

span :deep(svg) {
  width: var(--spacing-3-5);
  height: var(--spacing-3-5);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
