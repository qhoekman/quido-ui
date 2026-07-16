<script setup lang="ts">
import { inject, computed } from "vue";
import { Primitive } from "reka-ui";
import { Check } from "lucide-vue-next";

export interface StepsItemProps {
  index?: number;
  title?: string;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsItemProps>(), {
  index: 0,
  title: "",
  asChild: false,
  as: "div",
});

const stepsContext = inject<{
  currentStep: ReturnType<typeof computed<number>>;
  completedSteps: ReturnType<typeof computed<Set<number>>>;
  count: ReturnType<typeof computed<number>>;
  setStep: (step: number) => void;
}>("stepsContext");

if (!stepsContext) {
  throw new Error("StepsItem must be used within Steps");
}

const getIndex = () => {
  return Number(props.index);
};

const isCompleted = computed(() => {
  return stepsContext.completedSteps.value.has(getIndex());
});

const isCurrent = computed(() => {
  return stepsContext.currentStep.value === getIndex();
});

const count = computed(() => stepsContext.count.value);

const handleClick = () => {
  stepsContext.setStep(getIndex());
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    stepsContext.setStep(getIndex());
  }
};

const circleClasses = computed(() => {
  return [
    "steps-item-circle",
    {
      "steps-item--completed": isCompleted.value,
      "steps-item--completed-fg": isCompleted.value,
      "steps-item--current-fg": isCurrent.value && !isCompleted.value,
      "steps-item--undefined": !isCurrent.value && !isCompleted.value,
    },
  ];
});

const titleClasses = computed(() => {
  return [
    "steps-item-title",
    {
      "steps-item--completed-fg": isCompleted.value,
      "steps-item--current-fg": isCurrent.value && !isCompleted.value,
      "steps-item--undefined": !isCurrent.value && !isCompleted.value,
    },
  ];
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-steps-item']"
    data-testid="qui-steps-item"
    v-bind="$attrs"
  >
    <div
      class="steps-item-trigger"
      @click="handleClick"
      @keydown="handleKeyDown"
      data-testid="qui-steps-item-trigger"
      tabindex="0"
    >
      <div :class="circleClasses" data-testid="qui-steps-item-circle">
        <Check
          v-if="isCompleted"
          :size="16"
          :class="['steps-item--circle-completed']"
        />
        <span v-else>{{ getIndex() + 1 }}</span>
      </div>
      <span :class="titleClasses" data-testid="qui-steps-item-title">
        <slot>{{ title }}</slot>
      </span>
    </div>
    <div
      v-if="getIndex() < count - 1"
      class="steps-item-line"
      data-testid="qui-steps-item-line"
    >
      <div
        class="steps-item-line-fill"
        :style="{ width: isCompleted ? '100%' : '0' }"
        data-testid="qui-steps-item-line-fill"
      ></div>
    </div>
  </Primitive>
</template>

<style scoped>
.q-steps-item {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 1rem;
}

.steps-item-trigger {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
}

.steps-item-trigger:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.steps-item-circle {
  width: var(--spacing-8);
  height: var(--spacing-8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-width-default) solid var(--color-border);
  color: var(--color-primary-fg);
  transition: background-color 0.3s, border-color 0.3s;
}

.steps-item-circle svg {
  fill: currentcolor;
}

.steps-item-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.steps-item-line {
  z-index: 10;
  height: 2px;
  width: 100%;
  margin-left: var(--spacing-2);
  background-color: var(--color-muted);
}

.steps-item-line-fill {
  height: 100%;
  background-color: var(--color-primary);
  transition: width 0.3s;
}

.steps-item--completed-fg {
  color: var(--color-background-fg);
}

.steps-item--circle-completed {
  color: var(--color-primary-fg);
}

.steps-item--completed {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.steps-item--current-fg {
  color: var(--color-primary);
}

.steps-item--start {
  color: var(--color-muted-foreground);
}

.steps-item--undefined {
  color: var(--color-muted-foreground);
}
</style>
