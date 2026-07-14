import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useReel(contentRef: Ref<HTMLElement | null>) {
  const canScrollPrev = ref(false)
  const canScrollNext = ref(false)

  const findItemsContainer = (element: HTMLElement | null): HTMLElement | null => {
    if (element) {
      const child = element.querySelector('[data-reel-content]')
      if (child) {
        return child as HTMLElement
      }
    }
    return null
  }

  const updateScrollState = () => {
    const container = contentRef.value
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    canScrollPrev.value = scrollLeft > 0
    canScrollNext.value = scrollLeft < scrollWidth - clientWidth
  }

  const scrollPrev = () => {
    const container = contentRef.value
    if (!container) return

    const itemWidth = container.firstElementChild?.clientWidth || 0
    const scrollAmount = Math.floor(container.clientWidth / itemWidth) * itemWidth
    const targetScrollPosition = Math.max(0, container.scrollLeft - scrollAmount)
    container.scrollTo({ left: targetScrollPosition, behavior: 'smooth' })
    updateScrollState()
  }

  const scrollNext = () => {
    const container = contentRef.value
    if (!container) return

    const itemWidth = container.firstElementChild?.clientWidth || 0
    const scrollAmount = Math.floor(container.clientWidth / itemWidth) * itemWidth
    const maxScrollLeft = container.scrollWidth - container.clientWidth
    const targetScrollPosition = Math.min(maxScrollLeft, container.scrollLeft + scrollAmount)
    container.scrollTo({ left: targetScrollPosition, behavior: 'smooth' })
    updateScrollState()
  }

  onMounted(() => {
    const container = contentRef.value
    if (!container) return

    updateScrollState()
    container.addEventListener('scroll', updateScrollState)
  })

  onUnmounted(() => {
    const container = contentRef.value
    if (container) {
      container.removeEventListener('scroll', updateScrollState)
    }
  })

  return {
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    updateScrollState
  }
}
