<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("q-text", {
  variants: {
    variant: {
      body: "variant--body",
      caption: "variant--caption",
      label: "variant--label",
      title: "variant--title",
      subtitle: "variant--subtitle",
      unset: "",
    },
    size: {
      xs: "size--xs",
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
      xl: "size--xl",
      "2xl": "size--2xl",
      "3xl": "size--3xl",
      "4xl": "size--4xl",
      "5xl": "size--5xl",
      "6xl": "size--6xl",
      "7xl": "size--7xl",
      "8xl": "size--8xl",
      "9xl": "size--9xl",
      unset: "",
    },
    weight: {
      normal: "weight--normal",
      medium: "weight--medium",
      bold: "weight--bold",
      unset: "",
    },
    color: {
      neutral: "color--neutral",
      primary: "color--primary",
      secondary: "color--secondary",
      success: "color--success",
      warning: "color--warning",
      error: "color--error",
      muted: "color--muted",
      unset: "",
    },
  },
  defaultVariants: {
    variant: "unset",
    size: "unset",
    weight: "unset",
    color: "unset",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export interface TextProps {
  variant?: TextVariants["variant"];
  size?: TextVariants["size"];
  weight?: TextVariants["weight"];
  color?: TextVariants["color"];
  as?: string;
  asChild?: boolean;
}

const props = withDefaults(defineProps<TextProps>(), {
  variant: "unset",
  size: "unset",
  weight: "unset",
  color: "unset",
  asChild: false,
  as: "span",
});

const classes = computed(() => {
  // If variant is set and not 'unset', only apply variant class
  if (props.variant && props.variant !== "unset") {
    return textVariants({
      variant: props.variant,
    });
  }

  // Otherwise, apply size, weight, and color (always include them, even if 'unset')
  return textVariants({
    variant: "unset",
    size: props.size,
    weight: props.weight,
    color: props.color,
  });
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-text"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
span,
div,
p {
  font-family: var(--font-family-sans);
  margin: 0;
  padding: 0;
}

/* Size modifiers */
.size--xs {
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
}

.size--sm {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}

.size--md {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

.size--lg {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}

.size--xl {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-xl);
}

.size--2xl {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-2xl);
}

.size--3xl {
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-3xl);
}

.size--4xl {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-4xl);
}

.size--5xl {
  font-size: var(--font-size-5xl);
  line-height: var(--line-height-5xl);
}

.size--6xl {
  font-size: var(--font-size-6xl);
  line-height: var(--line-height-6xl);
}

.size--7xl {
  font-size: var(--font-size-7xl);
  line-height: var(--line-height-7xl);
}

.size--8xl {
  font-size: var(--font-size-8xl);
  line-height: var(--line-height-8xl);
}

.size--9xl {
  font-size: var(--font-size-9xl);
  line-height: var(--line-height-9xl);
}

/* Weight modifiers */
.weight--normal {
  font-weight: var(--font-weight-normal);
}

.weight--medium {
  font-weight: var(--font-weight-medium);
}

.weight--bold {
  font-weight: var(--font-weight-bold);
}

/* Color modifiers */
.color--neutral {
  color: var(--color-neutral-900);
}

.color--primary {
  color: var(--color-primary-500);
}

.color--secondary {
  color: var(--color-secondary-500);
}

.color--success {
  color: var(--color-green-500);
}

.color--warning {
  color: var(--color-yellow-500);
}

.color--error {
  color: var(--color-red-500);
}

.color--muted {
  color: var(--color-neutral-600);
}

/* Variant modifiers */
.variant--body {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-background-fg);
  font-weight: var(--font-weight-normal);
}

.variant--caption {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  font-weight: var(--font-weight-normal);
}

.variant--label {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: hsl(from var(--color-background-fg) h s l / 66%);
  font-weight: var(--font-weight-normal);
}

.variant--title {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-xl);
  color: var(--color-background-fg);
  font-weight: var(--font-weight-bold);
}

.variant--subtitle {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  font-weight: var(--font-weight-bold);
}
</style>
