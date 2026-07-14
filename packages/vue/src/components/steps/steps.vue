<script setup lang="ts">
import { provide, ref, computed, watch } from "vue";
import { Primitive } from "reka-ui";

export interface StepsProps {
  count?: number;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsProps>(), {
  count: 0,
  asChild: false,
  as: "div",
});

// State management
const currentStep = ref(0);
const completedSteps = ref<Set<number>>(new Set());

// Computed properties
const allStepsCompleted = computed(() => {
  return completedSteps.value.size === props.count && props.count > 0;
});

// Methods
const setTotalSteps = (count: number) => {
  // This will be called when children register
};

const setStep = (step: number) => {
  currentStep.value = Math.max(0, Math.min(step, props.count - 1));
};

const nextStep = () => {
  const current = currentStep.value;
  if (current < props.count - 1) {
    setStep(current + 1);
    completeStep(current);
  }

  // if last step, complete all steps
  if (current === props.count - 1) {
    completeStep(current);
  }
};

const prevStep = () => {
  const current = currentStep.value;
  setStep(current - 1);
};

const completeStep = (step: number) => {
  const newCompletedSteps = new Set(completedSteps.value);
  newCompletedSteps.add(step);
  completedSteps.value = newCompletedSteps;
};

// Watch for count changes
watch(
  () => props.count,
  () => {
    // Reset if count changes
    if (currentStep.value >= props.count) {
      currentStep.value = Math.max(0, props.count - 1);
    }
  }
);

// Provide context to child components
provide("stepsContext", {
  currentStep: computed(() => currentStep.value),
  completedSteps: computed(() => completedSteps.value),
  count: computed(() => props.count),
  allStepsCompleted,
  setStep,
  nextStep,
  prevStep,
  completeStep,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-steps']"
    data-testid="qui-steps"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
