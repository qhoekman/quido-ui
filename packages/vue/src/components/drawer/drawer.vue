<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { Primitive } from "reka-ui";
import DrawerOverlay from "./drawer-overlay.vue";

const drawerVariants = cva("q-drawer", {
  variants: {
    variant: {
      side: "variant--side",
      over: "variant--over",
      push: "variant--push",
    },
    position: {
      left: "position--left",
      right: "position--right",
    },
  },
  defaultVariants: {
    variant: "over",
    position: "left",
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;

export interface DrawerProps {
  variant?: DrawerVariants["variant"];
  position?: DrawerVariants["position"];
  hasBackdrop?: boolean | "auto";
  opened?: boolean | null;
  defaultOpened?: boolean;
}

const props = withDefaults(defineProps<DrawerProps>(), {
  variant: "over",
  position: "left",
  hasBackdrop: "auto",
  opened: null,
  defaultOpened: false,
});

const emit = defineEmits<{
  "update:opened": [value: boolean];
}>();

const internalOpen = ref(props.defaultOpened);
const isControlled = computed(() => props.opened !== null);
const isOpen = computed(() =>
  isControlled.value ? props.opened ?? false : internalOpen.value
);

const classes = computed(() => {
  return drawerVariants({
    variant: props.variant,
    position: props.position,
  });
});

const drawerClasses = computed(() => {
  const hasBackdropValue = getHasBackdrop();
  return [
    classes.value,
    {
      open: isOpen.value,
      "has-backdrop": hasBackdropValue,
    },
  ];
});

const getHasBackdrop = () => {
  if (props.variant === "side") {
    return false;
  }
  if (props.hasBackdrop === "auto") {
    return isOpen.value;
  }
  return props.hasBackdrop;
};

const open = () => {
  if (isControlled.value) {
    emit("update:opened", true);
  } else {
    internalOpen.value = true;
  }
};

const close = () => {
  if (isControlled.value) {
    emit("update:opened", false);
  } else {
    internalOpen.value = false;
  }
};

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isOpen.value) {
    close();
  }
};

const handleClick = (event: MouseEvent) => {
  if (props.variant === "side") {
    return;
  }
  if (isOpen.value && (event.target as HTMLElement) === event.currentTarget) {
    close();
  }
};

watch(
  () => props.opened,
  (newValue) => {
    if (isControlled.value && newValue !== null) {
      internalOpen.value = newValue;
    }
  }
);

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});

defineExpose({
  open,
  close,
  toggle,
  isOpen,
});
</script>

<template>
  <Primitive
    :as="'div'"
    :class="drawerClasses"
    @click="handleClick"
    v-bind="$attrs"
    data-testid="qui-drawer"
  >
    <DrawerOverlay
      :variant="variant"
      :position="position"
      :has-backdrop="getHasBackdrop()"
      :opened="isOpen"
    >
      <slot name="overlay" />
    </DrawerOverlay>
    <slot />
  </Primitive>
</template>

<style scoped>
.q-drawer {
  --drawer-width: 172px;

  position: relative;
  display: flex;
  width: 100%;
  height: 100svh;
  transition: width 0.3s ease;
}

.q-drawer.open.has-backdrop {
  background: hsl(from var(--color-muted) h s l / 33%);
}

/*
 * Note: intentionally NOT collapsing this wrapper's width to
 * var(--drawer-width) when variant--over is open (unlike the Angular
 * reference). Doing so shrinks the wrapper to exactly cover the sliding
 * panel, leaving no exposed area for the .open.has-backdrop tint above,
 * and no clickable "outside" area left for handleClick's
 * click-outside-to-close logic to ever land on.
 */

.q-drawer.variant--push.position--left:not(.open) :deep(.q-drawer-content) {
  margin-left: calc(-1 * var(--drawer-width));
}

.q-drawer.variant--push.position--right:not(.open) :deep(.q-drawer-content) {
  margin-right: calc(-1 * var(--drawer-width));
}

.q-drawer.has-backdrop.open :deep(.q-drawer-content) {
  pointer-events: none;
  opacity: 0.5;
}
</style>
