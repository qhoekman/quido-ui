<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { Primitive } from 'reka-ui'

export interface AffixProps {
  offsetTop?: number | null
  offsetBottom?: number | null
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AffixProps>(), {
  offsetTop: null,
  offsetBottom: null,
  asChild: false,
  as: 'div'
})

const elementRef = ref<HTMLElement | null>(null)
const isSticky = ref(false)
const hasIntersected = ref(false)
let intersectionObserver: IntersectionObserver | null = null

const direction = computed(() => {
  if (props.offsetTop !== null && props.offsetTop !== undefined) {
    return 'top'
  } else if (props.offsetBottom !== null && props.offsetBottom !== undefined) {
    return 'bottom'
  }
  return 'top'
})

const componentClasses = computed(() => {
  return [
    'q-affix',
    {
      sticky: isSticky.value && hasIntersected.value,
      'position-top': direction.value === 'top',
      'position-bottom': direction.value === 'bottom'
    }
  ]
})

const setupIntersectionObserver = () => {
  if (!elementRef.value) return

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasIntersected.value = true
        intersectionObserver?.disconnect()
      }
    })
  })

  intersectionObserver.observe(elementRef.value)
}

const onWindowScroll = () => {
  if (!hasIntersected.value || !elementRef.value) return

  const scrollTop = document.documentElement.scrollTop
  const rect = elementRef.value.getBoundingClientRect()
  let shouldBeSticky = rect.top < scrollTop

  if (direction.value === 'bottom') {
    shouldBeSticky = rect.bottom > scrollTop
  }

  isSticky.value = shouldBeSticky
}

onMounted(async () => {
  await nextTick()
  setupIntersectionObserver()
  window.addEventListener('scroll', onWindowScroll, { passive: true })
})

onUnmounted(() => {
  intersectionObserver?.disconnect()
  window.removeEventListener('scroll', onWindowScroll)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    :style="{
      '--affix-top': offsetTop !== null && offsetTop !== undefined ? `${offsetTop}px` : '0',
      '--affix-bottom': offsetBottom !== null && offsetBottom !== undefined ? `${offsetBottom}px` : '0'
    }"
    data-testid="qui-affix"
    ref="elementRef"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-affix {
  z-index: var(--z-index-10);
}

.position-top {
  top: var(--affix-top, 0);
}

.position-bottom {
  bottom: var(--affix-bottom, 0);
}

.sticky.position-top {
  top: 0;
}

.sticky.position-bottom {
  bottom: 0;
}

.sticky {
  position: sticky;
}
</style>
