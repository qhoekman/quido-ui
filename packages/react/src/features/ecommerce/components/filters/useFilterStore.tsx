import { create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";

// Change the type of FilterItemKey to support the new filters"
export type FilterItemKey =
  | "category"
  | `category.${string}`
  | "brand"
  | `brand.${string}`
  | "price";

type FilterItemValue = string;
type FilterStore = {
  filters: Partial<Record<FilterItemKey, FilterItemValue>>;
  setFilter: (key: FilterItemKey, value: FilterItemValue) => void;
  clearFilters: () => void;
};

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";
    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1));
    searchParams.delete(key);
    location.hash = searchParams.toString();
  },
};

export const useFilterStore = create(
  persist<FilterStore>(
    (set) => ({
      filters: {},
      clearFilters: () => {
        set((state) => {
          state.filters = {};
          return { ...state, filters: {} };
        });
      },
      setFilter: (key, value) => {
        set((state) => {
          state.filters[key] = value;
          return {
            ...state,
            filters: { ...state.filters, [key]: value },
          };
        });
      },
    }),
    {
      name: "filters",
      storage: createJSONStorage(() => hashStorage),
    }
  )
);
