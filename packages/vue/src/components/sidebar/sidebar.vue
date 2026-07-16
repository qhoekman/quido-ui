<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import Drawer from "../drawer/drawer.vue";
import DrawerContent from "../drawer/drawer-content.vue";

const sidebarVariants = cva("q-sidebar", {
  variants: {
    side: {
      left: "side--left",
      right: "side--right",
    },
    variant: {
      sidebar: "variant--sidebar",
      floating: "variant--floating",
      inset: "variant--inset",
    },
    collapsible: {
      offcanvas: "collapsible--offcanvas",
      icon: "collapsible--icon",
      none: "collapsible--none",
    },
    state: {
      collapsed: "state--collapsed",
      expanded: "state--expanded",
    },
  },
  defaultVariants: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
    state: "expanded",
  },
});

export type SidebarVariants = VariantProps<typeof sidebarVariants>;

export interface SidebarProps {
  side?: SidebarVariants["side"];
  variant?: SidebarVariants["variant"];
  collapsible?: SidebarVariants["collapsible"];
  state?: SidebarVariants["state"];
}

const props = withDefaults(defineProps<SidebarProps>(), {
  side: "left",
  variant: "sidebar",
  collapsible: "offcanvas",
  state: "expanded",
});

const isMobile = ref(false);
const openMobile = ref(false);

const checkMobile = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 768;
  }
};

const classes = computed(() => {
  return sidebarVariants({
    side: props.side,
    variant: props.variant,
    collapsible: props.collapsible,
    state: props.state,
  });
});

const sidebarClasses = computed(() => {
  return [
    classes.value,
    {
      "is-mobile": isMobile.value,
    },
  ];
});

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", checkMobile);
  }
});
</script>

<template>
  <div v-if="collapsible === 'none'" class="q-sidebar collapsible--none"></div>
  <div v-else :class="sidebarClasses" data-sidebar="sidebar" data-testid="qui-sidebar">
    <!-- Mobile: Use Drawer -->
    <Drawer
      v-if="isMobile"
      :opened="openMobile"
      variant="over"
      position="left"
      :has-backdrop="true"
      style="--drawer-width: 16rem;"
      @update:opened="openMobile = $event"
    >
      <DrawerContent>
        <div class="sidebar-drawer">
          <div class="sidebar-drawer-content">
            <slot />
          </div>
        </div>
      </DrawerContent>
    </Drawer>

    <!-- Desktop: Fixed Sidebar -->
    <template v-else>
      <div class="sidebar-backdrop"></div>
      <div class="sidebar-fixed">
        <div class="sidebar-content" data-sidebar="sidebar">
          <slot />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.q-sidebar {
  --sidebar-width: var(--spacing-64);
  --sidebar-width-icon: var(--spacing-12);
  --sidebar-width-mobile: var(--spacing-64);
  display: contents;
}

.sidebar-backdrop {
  position: relative;
  height: var(--size-svh);
  width: var(--sidebar-width);
  background-color: transparent;
  transition: width 0.2s ease-in-out;
}

.q-sidebar.state--collapsed .sidebar-backdrop {
  width: var(--sidebar-width-icon);
}

.q-sidebar.state--collapsed.collapsible--offcanvas .sidebar-backdrop {
  width: 0;
}

.q-sidebar.side--right .sidebar-backdrop {
  transform: rotate(180deg);
}

.q-sidebar.variant--floating .sidebar-backdrop,
.q-sidebar.variant--inset .sidebar-backdrop {
  width: calc(var(--sidebar-width-icon) + var(--spacing-4));
}

.sidebar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: var(--z-index-10);
  display: none;
  height: var(--size-svh);
  width: var(--sidebar-width);
  transition: all 0.2s ease-in-out;
}

.q-sidebar.state--collapsed .sidebar-fixed {
  width: var(--sidebar-width-icon);
}

.q-sidebar.variant--floating .sidebar-fixed,
.q-sidebar.variant--inset .sidebar-fixed {
  padding: var(--spacing-2);
}

.q-sidebar.side--left .sidebar-fixed {
  left: 0;
}

.q-sidebar.side--right .sidebar-fixed {
  right: 0;
  left: auto;
}

.q-sidebar.side--left.state--collapsed.collapsible--offcanvas .sidebar-fixed {
  left: calc(var(--sidebar-width) * -1);
}

.q-sidebar.side--right.state--collapsed.collapsible--offcanvas .sidebar-fixed {
  right: calc(var(--sidebar-width) * -1);
}

.q-sidebar.variant--floating.state--collapsed .sidebar-fixed,
.q-sidebar.variant--inset.state--collapsed .sidebar-fixed {
  width: calc(var(--sidebar-width-icon) + var(--spacing-4));
}

.q-sidebar:not(.variant--floating):not(.variant--inset).side--left {
  border-right: var(--border-width-default) solid var(--color-border);
}

.q-sidebar:not(.variant--floating):not(.variant--inset).side--right {
  border-left: var(--border-width-default) solid var(--color-border);
}

.sidebar-content {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: var(--color-sidebar);
  transition: width 0.2s ease-in-out;
}

.q-sidebar.variant--floating .sidebar-content {
  border-radius: var(--spacing-2);
  border: var(--border-width-default) solid var(--color-sidebar-border);
  box-shadow: var(--box-shadow-md);
}

.sidebar-drawer {
  width: var(--sidebar-width);
  background-color: var(--color-sidebar);
  padding: 0;
  color: var(--color-sidebar-foreground);
}

.sidebar-drawer > button {
  display: none;
}

.sidebar-drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

@media (width >= 768px) {
  .q-sidebar {
    display: block;
  }

  .q-sidebar .sidebar-fixed {
    display: flex;
  }
}
</style>
