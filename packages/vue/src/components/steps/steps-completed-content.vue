<script setup lang="ts">
import { inject, computed } from "vue";
import { Primitive } from "reka-ui";

export interface StepsCompletedContentProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsCompletedContentProps>(), {
  asChild: false,
  as: "div",
});

const stepsContext = inject<{
  completedSteps: ReturnType<typeof computed<Set<number>>>;
  count: ReturnType<typeof computed<number>>;
  allStepsCompleted: ReturnType<typeof computed<boolean>>;
}>("stepsContext");

if (!stepsContext) {
  throw new Error("StepsCompletedContent must be used within Steps");
}

const shouldShow = computed(() => {
  return stepsContext.allStepsCompleted.value;
});
</script>

<template>
  <Primitive
    v-if="shouldShow"
    :as="as"
    :as-child="asChild"
    :class="['q-steps-completed-content']"
    data-testid="qui-steps-completed-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps-completed-content {
  /* Content styles can be added here if needed */
}
</style>
