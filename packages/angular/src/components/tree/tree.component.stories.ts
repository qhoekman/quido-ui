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
    <qui-story>
      <div qui-tree>
        <div qui-tree-item [expanded]="expanded">
          <div qui-tree-item-icon><i qui-icon name="folder"></i></div>
          <div qui-tree-item-label>Documents</div>
          <div qui-tree-group>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="file"></i></div>
              <div qui-tree-item-label>Resume.pdf</div>
            </div>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="file"></i></div>
              <div qui-tree-item-label>Cover Letter.docx</div>
            </div>
          </div>
        </div>
        <div qui-tree-item [expanded]="expanded">
          <div qui-tree-item-icon><i qui-icon name="folder"></i></div>
          <div qui-tree-item-label>Downloads</div>
          <div qui-tree-group>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="file"></i></div>
              <div qui-tree-item-label>Image.png</div>
            </div>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="folder"></i></div>
              <div qui-tree-item-label>Projects</div>
              <div qui-tree-group>
                <div qui-tree-item>
                  <div qui-tree-item-icon><i qui-icon name="file"></i></div>
                  <div qui-tree-item-label>Project1.zip</div>
                </div>
                <div qui-tree-item>
                  <div qui-tree-item-icon><i qui-icon name="file"></i></div>
                  <div qui-tree-item-label>Project2.zip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div qui-tree-item [expanded]="expanded">
          <div qui-tree-item-icon><i qui-icon name="folder"></i></div>
          <div qui-tree-item-label>Pictures</div>
          <div qui-tree-group>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="file"></i></div>
              <div qui-tree-item-label>Vacation.jpg</div>
            </div>
            <div qui-tree-item>
              <div qui-tree-item-icon><i qui-icon name="file"></i></div>
              <div qui-tree-item-label>Family.jpg</div>
            </div>
          </div>
        </div>
      </div>
    </qui-story>
    `,
  }),
};
