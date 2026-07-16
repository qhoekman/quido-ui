import TimelineComponent from "@/components/timeline/timeline.vue";
import TimelineItemComponent from "@/components/timeline/timeline-item.vue";
import TimelineConnectorComponent from "@/components/timeline/timeline-connector.vue";
import TimelineBulletComponent from "@/components/timeline/timeline-bullet.vue";
import TimelineSeparatorComponent from "@/components/timeline/timeline-separator.vue";
import TimelineContentComponent from "@/components/timeline/timeline-content.vue";
import TimelineTitleComponent from "@/components/timeline/timeline-title.vue";
import TimelineDescriptionComponent from "@/components/timeline/timeline-description.vue";
import TextComponent from "@/components/text/text.vue";
import { ArrowRight, Check, Box } from "lucide-vue-next";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta = {
  title: "Components/Data Display/Timeline",
  component: TimelineComponent,
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      TimelineComponent,
      TimelineItemComponent,
      TimelineConnectorComponent,
      TimelineBulletComponent,
      TimelineSeparatorComponent,
      TimelineContentComponent,
      TimelineTitleComponent,
      TimelineDescriptionComponent,
      TextComponent,
      ArrowRight,
      Check,
      Box,
    },
    setup() {
      const items = [
        {
          title: "Product Shipped",
          description: "13th May 2021",
          icon: "arrow-right",
          additionalText:
            "We shipped your product via FedEx and it should arrive within 3-5 business days.",
        },
        {
          title: "Order Confirmed",
          description: "18th May 2021",
          icon: "check",
        },
        {
          title: "Order Delivered",
          description: "20th May 2021, 10:30am",
          icon: "box",
        },
      ];

      return { items };
    },
    template: `
      <TimelineComponent>
        <TimelineItemComponent
          v-for="(item, index) in items"
          :key="index"
        >
          <TimelineConnectorComponent>
            <TimelineBulletComponent>
              <ArrowRight v-if="item.icon === 'arrow-right'" :size="16" />
              <Check v-if="item.icon === 'check'" :size="16" />
              <Box v-if="item.icon === 'box'" :size="16" />
            </TimelineBulletComponent>
            <TimelineSeparatorComponent v-if="index < items.length - 1" />
          </TimelineConnectorComponent>
          <TimelineContentComponent>
            <TimelineTitleComponent>{{ item.title }}</TimelineTitleComponent>
            <TimelineDescriptionComponent>{{ item.description }}</TimelineDescriptionComponent>
            <TextComponent v-if="item.additionalText" size="sm">
              {{ item.additionalText }}
            </TextComponent>
          </TimelineContentComponent>
        </TimelineItemComponent>
      </TimelineComponent>
    `,
  }),
} satisfies Meta<typeof TimelineComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
