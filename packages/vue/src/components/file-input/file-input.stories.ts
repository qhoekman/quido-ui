import FileInputComponent from '@/components/file-input/file-input.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

const meta = {
  title: 'Components/Data Entry/File Input',
  component: FileInputComponent,
  argTypes: {
    multiple: {
      control: 'boolean'
    }
  },
  args: {
    multiple: false
  },
  render: (args: any) => ({
    components: { FileInputComponent },
    setup() {
      const files = ref<File[]>([])
      const handleFilesSelected = (selectedFiles: File[]) => {
        files.value = selectedFiles
      }
      return { args, files, handleFilesSelected }
    },
    template: `
      <FileInputComponent 
        v-bind="args" 
        @files-selected="handleFilesSelected"
      />
    `
  })
} satisfies Meta<typeof FileInputComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
