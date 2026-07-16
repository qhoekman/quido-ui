import TreeComponent from "./tree.vue";
import TreeItemComponent from "./tree-item.vue";
import TreeGroupComponent from "./tree-group.vue";
import TreeItemIconComponent from "./tree-item-icon.vue";
import TreeItemLabelComponent from "./tree-item-label.vue";
import { Folder, File } from "lucide-vue-next";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Data Display/Tree",
  component: TreeComponent,
  argTypes: {
    defaultExpanded: {
      control: "boolean",
    },
  },
  args: {
    defaultExpanded: true,
  },
  render: (args) => ({
    components: {
      TreeComponent,
      TreeItemComponent,
      TreeGroupComponent,
      TreeItemIconComponent,
      TreeItemLabelComponent,
      Folder,
      File,
    },
    setup() {
      return { args };
    },
    template: `
      <TreeComponent>
        <TreeItemComponent :default-expanded="args.defaultExpanded">
          <template #icon>
            <TreeItemIconComponent>
              <Folder :size="16" />
            </TreeItemIconComponent>
          </template>
          <template #label>
            <TreeItemLabelComponent>Documents</TreeItemLabelComponent>
          </template>
          <TreeGroupComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <File :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Resume.pdf</TreeItemLabelComponent>
              </template>
            </TreeItemComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <File :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Cover Letter.docx</TreeItemLabelComponent>
              </template>
            </TreeItemComponent>
          </TreeGroupComponent>
        </TreeItemComponent>
        <TreeItemComponent :default-expanded="args.defaultExpanded">
          <template #icon>
            <TreeItemIconComponent>
              <Folder :size="16" />
            </TreeItemIconComponent>
          </template>
          <template #label>
            <TreeItemLabelComponent>Downloads</TreeItemLabelComponent>
          </template>
          <TreeGroupComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <File :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Image.png</TreeItemLabelComponent>
              </template>
            </TreeItemComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <Folder :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Projects</TreeItemLabelComponent>
              </template>
              <TreeGroupComponent>
                <TreeItemComponent>
                  <template #icon>
                    <TreeItemIconComponent>
                      <File :size="16" />
                    </TreeItemIconComponent>
                  </template>
                  <template #label>
                    <TreeItemLabelComponent>Project1.zip</TreeItemLabelComponent>
                  </template>
                </TreeItemComponent>
                <TreeItemComponent>
                  <template #icon>
                    <TreeItemIconComponent>
                      <File :size="16" />
                    </TreeItemIconComponent>
                  </template>
                  <template #label>
                    <TreeItemLabelComponent>Project2.zip</TreeItemLabelComponent>
                  </template>
                </TreeItemComponent>
              </TreeGroupComponent>
            </TreeItemComponent>
          </TreeGroupComponent>
        </TreeItemComponent>
        <TreeItemComponent :default-expanded="args.defaultExpanded">
          <template #icon>
            <TreeItemIconComponent>
              <Folder :size="16" />
            </TreeItemIconComponent>
          </template>
          <template #label>
            <TreeItemLabelComponent>Pictures</TreeItemLabelComponent>
          </template>
          <TreeGroupComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <File :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Vacation.jpg</TreeItemLabelComponent>
              </template>
            </TreeItemComponent>
            <TreeItemComponent>
              <template #icon>
                <TreeItemIconComponent>
                  <File :size="16" />
                </TreeItemIconComponent>
              </template>
              <template #label>
                <TreeItemLabelComponent>Family.jpg</TreeItemLabelComponent>
              </template>
            </TreeItemComponent>
          </TreeGroupComponent>
        </TreeItemComponent>
      </TreeComponent>
    `,
  }),
} satisfies Meta<typeof TreeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
