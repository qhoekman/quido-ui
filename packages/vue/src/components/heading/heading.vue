<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const headingVariants = cva('q-heading', {
  variants: {
    variant: {
      h1: 'variant--h1',
      h2: 'variant--h2',
      h3: 'variant--h3',
      h4: 'variant--h4',
      h5: 'variant--h5',
      h6: 'variant--h6',
      unset: ''
    },
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg',
      xl: 'size--xl',
      '2xl': 'size--2xl',
      '3xl': 'size--3xl',
      unset: ''
    },
    weight: {
      normal: 'weight--normal',
      medium: 'weight--medium',
      bold: 'weight--bold',
      unset: ''
    },
    color: {
      neutral: 'color--neutral',
      primary: 'color--primary',
      secondary: 'color--secondary',
      unset: ''
    }
  },
  defaultVariants: {
    variant: 'unset',
    size: 'unset',
    weight: 'unset',
    color: 'unset'
  }
})

export type HeadingVariants = VariantProps<typeof headingVariants>

export interface HeadingProps {
  variant?: HeadingVariants['variant']
  size?: HeadingVariants['size']
  weight?: HeadingVariants['weight']
  color?: HeadingVariants['color']
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p'
  asChild?: boolean
}

const props = withDefaults(defineProps<HeadingProps>(), {
  variant: 'unset',
  size: 'unset',
  weight: 'unset',
  color: 'unset',
  as: 'h1',
  asChild: false
})

const classes = computed(() => {
  // If variant is set and not unset, only apply variant classes
  if (props.variant && props.variant !== 'unset') {
    return headingVariants({
      variant: props.variant,
      size: 'unset',
      weight: 'unset',
      color: 'unset'
    })
  }

  // Otherwise, apply size, weight, and color classes
  return headingVariants({
    variant: 'unset',
    size: props.size,
    weight: props.weight,
    color: props.color
  })
})
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
h1,
h2,
h3,
h4,
h5,
h6,
span,
div,
p {
  font-family: var(--font-family-sans);
  margin: 0;
  padding: 0;
}

/* Size modifiers (when variant is unset) */
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

/* Weight modifiers (when variant is unset) */
.weight--normal {
  font-weight: var(--font-weight-normal);
}

.weight--medium {
  font-weight: var(--font-weight-medium);
}

.weight--bold {
  font-weight: var(--font-weight-bold);
}

/* Color modifiers (when variant is unset) */
.color--neutral {
  color: var(--color-neutral-900);
}

.color--primary {
  color: var(--color-primary);
}

.color--secondary {
  color: var(--color-secondary);
}

/* Variant modifiers (predefined heading styles) */
.variant--h1 {
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-4);
}

.variant--h2 {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-4);
}

.variant--h3 {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-4);
}

.variant--h4 {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-3);
}

.variant--h5 {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-2);
}

.variant--h6 {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-2);
}
</style>
