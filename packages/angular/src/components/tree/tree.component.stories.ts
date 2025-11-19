import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { IconFileComponent } from '../../icons';
import { IconFolderComponent } from '../../icons/folder.component';
import { TreeItemIconComponent } from './tree-item-icon.component';
import { TreeItemComponent } from './tree-item.component';
import { TreeGroupComponent } from './tree-group.component';
import { TreeItemLabelComponent } from './tree-item-label.component';
import { TreeComponent } from './tree.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedTreeComponent = TreeComponent & {
  expanded: boolean;
};

const meta: Meta<EnhancedTreeComponent> = {
  title: 'Components/Data Display/Tree',
  component: TreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TreeItemComponent,
        TreeItemIconComponent,
        TreeItemLabelComponent,
        TreeGroupComponent,
        IconFileComponent,
        IconFolderComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    expanded: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<EnhancedTreeComponent>;

export const Default: Story = {
  args: {
    expanded: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <pui-story>
      <div pui-tree>
        <div pui-tree-item [expanded]="expanded">
          <div pui-tree-item-icon><i pui-icon name="folder"></i></div>
          <div pui-tree-item-label>Documents</div>
          <div pui-tree-group>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="file"></i></div>
              <div pui-tree-item-label>Resume.pdf</div>
            </div>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="file"></i></div>
              <div pui-tree-item-label>Cover Letter.docx</div>
            </div>
          </div>
        </div>
        <div pui-tree-item [expanded]="expanded">
          <div pui-tree-item-icon><i pui-icon name="folder"></i></div>
          <div pui-tree-item-label>Downloads</div>
          <div pui-tree-group>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="file"></i></div>
              <div pui-tree-item-label>Image.png</div>
            </div>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="folder"></i></div>
              <div pui-tree-item-label>Projects</div>
              <div pui-tree-group>
                <div pui-tree-item>
                  <div pui-tree-item-icon><i pui-icon name="file"></i></div>
                  <div pui-tree-item-label>Project1.zip</div>
                </div>
                <div pui-tree-item>
                  <div pui-tree-item-icon><i pui-icon name="file"></i></div>
                  <div pui-tree-item-label>Project2.zip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div pui-tree-item [expanded]="expanded">
          <div pui-tree-item-icon><i pui-icon name="folder"></i></div>
          <div pui-tree-item-label>Pictures</div>
          <div pui-tree-group>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="file"></i></div>
              <div pui-tree-item-label>Vacation.jpg</div>
            </div>
            <div pui-tree-item>
              <div pui-tree-item-icon><i pui-icon name="file"></i></div>
              <div pui-tree-item-label>Family.jpg</div>
            </div>
          </div>
        </div>
      </div>
    </pui-story>
    `,
  }),
};
