<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const topBarSectionVariants = cva("q-top-bar-section", {
  variants: {
    items: {
      center: "items--center",
      start: "items--start",
      end: "items--end",
      between: "items--between",
      around: "items--around",
      initial: "items--initial",
    },
    align: {
      center: "align--center",
      start: "align--start",
      end: "align--end",
      baseline: "align--baseline",
      stretch: "align--stretch",
      initial: "align--initial",
    },
    direction: {
      row: "direction--row",
      column: "direction--column",
    },
    gap: {
      sm: "gap--sm",
      md: "gap--md",
      lg: "gap--lg",
    },
  },
  defaultVariants: {
    items: "start",
    align: "center",
    direction: "row",
    gap: "md",
  },
});

export type TopBarSectionVariants = VariantProps<typeof topBarSectionVariants>;

export interface TopBarSectionProps {
  items?: TopBarSectionVariants["items"];
  align?: TopBarSectionVariants["align"];
  direction?: TopBarSectionVariants["direction"];
  gap?: TopBarSectionVariants["gap"];
  as?: "section" | "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<TopBarSectionProps>(), {
  items: "start",
  align: "center",
  direction: "row",
  gap: "md",
  as: "section",
  asChild: false,
});

const classes = computed(() => {
  return topBarSectionVariants({
    items: props.items,
    align: props.align,
    direction: props.direction,
    gap: props.gap,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-top-bar-section"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
section,
div {
  display: flex;
  flex: 1;
}

/* Gap modifiers */
.gap--sm {
  gap: var(--spacing-2);
}

.gap--md {
  gap: var(--spacing-4);
}

.gap--lg {
  gap: var(--spacing-6);
}

/* Direction modifiers */
.direction--row {
  flex-direction: row;
}

.direction--column {
  flex-direction: column;
}

/* Items (justify-content) modifiers */
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

.items--initial {
  justify-content: initial;
}

/* Align (align-items) modifiers */
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

.align--initial {
  align-items: initial;
}
</style>
