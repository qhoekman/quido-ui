import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SignaturePad from './signature-pad.vue'
import Button from '../button/button.vue'
import ButtonGroup from '../button-group/button-group.vue'
import { Eraser, Download } from 'lucide-vue-next'

const meta: Meta<typeof SignaturePad> = {
  title: 'Components/Data Entry/Signature Pad',
  component: SignaturePad,
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof SignaturePad>

export const Default: Story = {
  render: () => {
    const signaturePadRef = ref<InstanceType<typeof SignaturePad> | null>(null)

    return {
      components: { SignaturePad, Button, ButtonGroup, Eraser, Download },
      setup() {
        const handleClear = () => {
          signaturePadRef.value?.clear()
        }

        const handleDownload = () => {
          signaturePadRef.value?.download()
        }

        return {
          signaturePadRef,
          handleClear,
          handleDownload
        }
      },
      template: `
        <div>
          <SignaturePad ref="signaturePadRef" style="width: 100%; height: 300px;" />
          <ButtonGroup style="margin-top: var(--spacing-4);">
            <Button @click="handleClear">
              <Eraser :size="16" />
            </Button>
            <Button @click="handleDownload">
              <Download :size="16" />
            </Button>
          </ButtonGroup>
        </div>
      `
    }
  }
}
