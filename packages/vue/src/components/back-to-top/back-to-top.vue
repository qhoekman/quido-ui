<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Primitive } from 'reka-ui'

export interface BackToTopProps {
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<BackToTopProps>(), {
  asChild: false,
  as: 'div'
})

const isVisible = ref(false)

const onWindowScroll = () => {
  const scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  isVisible.value = scrollPosition > document.documentElement.clientHeight / 2
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const componentClasses = computed(() => ['q-back-to-top'])

onMounted(() => {
  window.addEventListener('scroll', onWindowScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onWindowScroll)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    data-testid="qui-back-to-top"
    @click="scrollToTop"
    v-bind="$attrs"
  >
    <slot v-if="isVisible" />
  </Primitive>
</template>

<style scoped>
.q-back-to-top {
  position: fixed;
  bottom: var(--spacing-4);
  right: var(--spacing-4);
  z-index: var(--z-index-1000);
}
</style>
