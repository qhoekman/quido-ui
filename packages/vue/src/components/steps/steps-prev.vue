<script setup lang="ts">
import { inject } from "vue";
import { Primitive } from "reka-ui";

export interface StepsPrevProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsPrevProps>(), {
  asChild: false,
  as: "button",
});

const stepsContext = inject<{
  prevStep: () => void;
}>("stepsContext");

if (!stepsContext) {
  throw new Error("StepsPrev must be used within Steps");
}

const handleClick = () => {
  stepsContext.prevStep();
};
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-steps-prev']"
    data-testid="qui-steps-prev"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps-prev {
  /* Button styles can be added here if needed */
}
</style>
