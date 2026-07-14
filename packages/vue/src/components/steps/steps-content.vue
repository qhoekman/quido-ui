<script setup lang="ts">
import { inject, computed } from "vue";
import { Primitive } from "reka-ui";

export interface StepsContentProps {
  index?: number;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsContentProps>(), {
  index: 0,
  asChild: false,
  as: "div",
});

const stepsContext = inject<{
  currentStep: ReturnType<typeof computed<number>>;
  completedSteps: ReturnType<typeof computed<Set<number>>>;
  count: ReturnType<typeof computed<number>>;
  allStepsCompleted: ReturnType<typeof computed<boolean>>;
}>("stepsContext");

if (!stepsContext) {
  throw new Error("StepsContent must be used within Steps");
}

const isCurrent = computed(() => {
  return stepsContext.currentStep.value === Number(props.index);
});

const shouldShow = computed(() => {
  return isCurrent.value && !stepsContext.allStepsCompleted.value;
});
</script>

<template>
  <Primitive
    v-if="shouldShow"
    :as="as"
    :as-child="asChild"
    :class="['q-steps-content']"
    data-testid="qui-steps-content"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps-content {
  /* Content styles can be added here if needed */
}
</style>
