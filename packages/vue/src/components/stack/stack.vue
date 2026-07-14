<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const stackVariants = cva("q-stack", {
  variants: {
    gap: {
      none: "gap--none",
      sm: "gap--sm",
      md: "gap--md",
      lg: "gap--lg",
      xl: "gap--xl",
      "2xl": "gap--2xl",
    },
    direction: {
      row: "direction--row",
      column: "direction--column",
    },
    items: {
      center: "items--center",
      start: "items--start",
      end: "items--end",
      between: "items--between",
      around: "items--around",
      initial: "",
    },
    align: {
      center: "align--center",
      start: "align--start",
      end: "align--end",
      baseline: "align--baseline",
      stretch: "align--stretch",
      initial: "",
    },
  },
  defaultVariants: {
    gap: "md",
    direction: "row",
    items: "initial",
    align: "initial",
  },
});

export type StackVariants = VariantProps<typeof stackVariants>;

export interface StackProps {
  gap?: StackVariants["gap"];
  direction?: StackVariants["direction"];
  items?: StackVariants["items"];
  align?: StackVariants["align"];
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<StackProps>(), {
  gap: "md",
  direction: "row",
  items: "initial",
  align: "initial",
  asChild: false,
  as: "div",
});

const classes = computed(() => {
  return stackVariants({
    gap: props.gap,
    direction: props.direction,
    items: props.items,
    align: props.align,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
}

.gap--none {
  gap: 0;
}

.gap--sm {
  gap: var(--spacing-2);
}

.gap--md {
  gap: var(--spacing-4);
}

.gap--lg {
  gap: var(--spacing-6);
}

.gap--xl {
  gap: var(--spacing-8);
}

.gap--2xl {
  gap: var(--spacing-12);
}

.direction--row {
  flex-direction: row;
}

.direction--column {
  flex-direction: column;
}

.items--center {
  justify-content: center;
}

.items--start {
  justify-content: flex-start;
}

.items--end {
  justify-content: flex-end;
}

.items--between {
  justify-content: space-between;
}

.items--around {
  justify-content: space-around;
}

.align--center {
  align-items: center;
}

.align--start {
  align-items: flex-start;
}

.align--end {
  align-items: flex-end;
}

.align--baseline {
  align-items: baseline;
}

.align--stretch {
  align-items: stretch;
}
</style>
