import type { Meta, Story } from '@storybook/vue3'
import AchievementCard from './AchievementCard.vue'

export default {
  title: 'components/utils/AchievementCard',
  component: AchievementCard,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AchievementCard },
  setup () {
    return { args }
  },
  template: '<AchievementCard v-bind="args">{{ args.default }}</AchievementCard>'
})

export const Primary = Template.bind({})
Primary.args = {
}
