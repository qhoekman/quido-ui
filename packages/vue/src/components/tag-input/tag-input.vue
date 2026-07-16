<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import TagComponent from "@/components/tag/tag.vue";
import InputComponent from "@/components/input/input.vue";
import ButtonComponent from "@/components/button/button.vue";
import { X } from "lucide-vue-next";

export interface TagInputProps {
  name?: string;
  modelValue?: string[];
  placeholder?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<TagInputProps>(), {
  modelValue: () => [],
  placeholder: "Enter tags (comma-separated)...",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string[]];
}>();

const inputValue = ref("");
const tagInputRef = ref<InstanceType<typeof InputComponent> | null>(null);

const tags = computed({
  get: () => props.modelValue || [],
  set: (value) => emit("update:modelValue", value),
});

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTags(inputValue.value);
  } else if (event.key === "Backspace" && !inputValue.value && tags.value.length > 0) {
    removeTag(tags.value.length - 1);
  }
};

const handleInputBlur = () => {
  if (inputValue.value) {
    addTags(inputValue.value);
  }
};

const addTags = (input: string) => {
  const newTags = input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag && !tags.value.includes(tag));

  if (newTags.length > 0) {
    tags.value = [...tags.value, ...newTags];
    inputValue.value = "";
  }
};

const removeTag = (index: number) => {
  const newTags = [...tags.value];
  newTags.splice(index, 1);
  tags.value = newTags;
};

const focusInput = async () => {
  await nextTick();
  // Focus the input element
  if (tagInputRef.value) {
    const inputElement = tagInputRef.value.$el as HTMLInputElement;
    if (inputElement && inputElement.focus) {
      inputElement.focus();
    }
  }
};

const handleClick = () => {
  focusInput();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    focusInput();
  }
};
</script>

<template>
  <div
    class="tag-input-container"
    role="textbox"
    data-testid="qui-tag-input"
    @click="handleClick"
    @keydown="handleKeydown"
    tabindex="0"
  >
    <InputComponent
      ref="tagInputRef"
      v-model="inputValue"
      data-testid="qui-tag-input-input"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      class="tag-input"
      aria-label="Enter tags"
      @keydown="handleInputKeyDown"
      @blur="handleInputBlur"
    />

    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="tags.join(',')"
    />

    <div
      v-if="tags.length > 0"
      class="tags-container"
      role="list"
      aria-live="polite"
    >
      <TagComponent
        v-for="(tag, index) in tags"
        :key="index"
        size="sm"
        data-testid="qui-tag-input-tag"
        class="tag"
        role="listitem"
      >
        <span>{{ tag }}</span>
        <ButtonComponent
          size="icon"
          class="remove-tag"
          :aria-label="`Remove tag ${tag}`"
          @click.stop="removeTag(index)"
        >
          <X :size="16" />
        </ButtonComponent>
      </TagComponent>
    </div>
  </div>
</template>

<style scoped>
.tag-input-container {
  border: var(--border-width-default) solid var(--color-border);
  border-radius: var(--border-radius-md);
  background-color: var(--color-background);
  padding: var(--spacing-2);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  min-height: var(--spacing-10);
}

.tag-input-container:focus-visible {
  outline: none;
  border-color: var(--color-ring);
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.tag-input {
  border: none;
  outline: none;
  flex: 1;
  background-color: transparent;
  box-shadow: none;
}

.tag-input:focus-visible {
  box-shadow: none;
}

.tag-input.size--md {
  font-size: var(--font-size-base);
  padding: var(--spacing-2) 0;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  max-height: 100px;
  overflow-y: auto;
  margin-top: var(--spacing-2);
}

.tag {
  justify-content: space-between;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag span {
  flex: 1;
}

.remove-tag {
  background: none !important;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: var(--spacing-1);
  color: inherit !important;
  box-shadow: none !important;
}

.remove-tag.size--icon {
  width: var(--spacing-4);
  height: var(--spacing-4);
}
</style>
