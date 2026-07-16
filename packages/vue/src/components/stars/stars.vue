<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { cva, type VariantProps } from "class-variance-authority";

const starVariants = cva("q-star", {
  variants: {
    filled: {
      true: "variant--filled",
      false: "variant--unfilled",
    },
  },
  defaultVariants: {
    filled: false,
  },
});

export type StarsVariants = VariantProps<typeof starVariants>;

export interface StarsProps {
  rating: number;
  total?: number;
  asChild?: boolean;
}

const props = withDefaults(defineProps<StarsProps>(), {
  total: 5,
  asChild: false,
});

const totalStars = computed(() => {
  return Array.from({ length: props.total }, (_, i) => i);
});

const isStarFilled = (index: number) => {
  return index < props.rating;
};

const getStarClasses = (index: number) => {
  return starVariants({
    filled: isStarFilled(index),
  });
};
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    class="q-stars"
    v-bind="$attrs"
  >
    <svg
      v-for="(_, index) in totalStars"
      :key="index"
      :class="getStarClasses(index)"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clip-rule="evenodd"
      />
    </svg>
  </Primitive>
</template>

<style scoped>
.q-stars {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.q-star {
  width: var(--spacing-4);
  height: var(--spacing-4);
  flex-shrink: 0;
}

.q-star.variant--filled {
  fill: var(--color-yellow-500);
  color: var(--color-yellow-500);
}

.q-star.variant--unfilled {
  fill: var(--color-muted);
  color: var(--color-muted);
}
</style>
