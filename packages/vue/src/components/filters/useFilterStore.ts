import { ref, reactive, watch } from 'vue'

export type FilterItemKey =
  | 'category'
  | `category.${string}`
  | 'brand'
  | `brand.${string}`
  | 'price'

type FilterItemValue = string

type FilterStore = {
  filters: Partial<Record<FilterItemKey, FilterItemValue>>
  setFilter: (key: FilterItemKey, value: FilterItemValue) => void
  clearFilters: () => void
}

// Hash-based storage for persistence
const hashStorage = {
  getItem: (key: string): Partial<Record<FilterItemKey, FilterItemValue>> => {
    if (typeof window === 'undefined') return {}
    const searchParams = new URLSearchParams(window.location.hash.slice(1))
    const storedValue = searchParams.get(key)
    if (!storedValue) return {}
    try {
      const parsed = JSON.parse(storedValue)
      return typeof parsed === 'object' && parsed !== null ? parsed : {}
    } catch {
      return {}
    }
  },
  setItem: (key: string, newValue: Partial<Record<FilterItemKey, FilterItemValue>>): void => {
    if (typeof window === 'undefined') return
    const searchParams = new URLSearchParams(window.location.hash.slice(1))
    searchParams.set(key, JSON.stringify(newValue))
    window.location.hash = searchParams.toString()
  },
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return
    const searchParams = new URLSearchParams(window.location.hash.slice(1))
    searchParams.delete(key)
    window.location.hash = searchParams.toString()
  }
}

// Initialize filters from hash storage
const storedFilters = hashStorage.getItem('filters')
const filters = reactive<Partial<Record<FilterItemKey, FilterItemValue>>>(
  storedFilters
)

// Watch for hash changes and sync filters
if (typeof window !== 'undefined') {
  const syncFromHash = () => {
    const stored = hashStorage.getItem('filters')
    Object.keys(filters).forEach((key) => {
      delete filters[key as FilterItemKey]
    })
    Object.assign(filters, stored)
  }

  window.addEventListener('hashchange', syncFromHash)
  syncFromHash()
}

// Watch filters and persist to hash
watch(
  filters,
  (newFilters) => {
    hashStorage.setItem('filters', newFilters)
  },
  { deep: true }
)

export const useFilterStore = (): FilterStore => {
  const setFilter = (key: FilterItemKey, value: FilterItemValue) => {
    filters[key] = value
  }

  const clearFilters = () => {
    Object.keys(filters).forEach((key) => {
      delete filters[key as FilterItemKey]
    })
  }

  return {
    filters,
    setFilter,
    clearFilters
  }
}
