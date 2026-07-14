<script setup lang="ts">
import { inject } from "vue";
import { Primitive } from "reka-ui";

export interface StepsNextProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsNextProps>(), {
  asChild: false,
  as: "button",
});

const stepsContext = inject<{
  nextStep: () => void;
}>("stepsContext");

if (!stepsContext) {
  throw new Error("StepsNext must be used within Steps");
}

const handleClick = () => {
  stepsContext.nextStep();
};
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-steps-next']"
    data-testid="qui-steps-next"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps-next {
  /* Button styles can be added here if needed */
}
</style>
