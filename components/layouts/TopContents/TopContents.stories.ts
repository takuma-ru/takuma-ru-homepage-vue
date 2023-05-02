import type { Meta, Story } from '@storybook/vue3'
import TopContents from './TopContents.vue'

export default {
  title: 'components/layouts/TopContents',
  component: TopContents,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TopContents },
  setup () {
    return { args }
  },
  template: '<TopContents v-bind="args">{{ args.default }}</TopContents>'
})

export const Primary = Template.bind({})
Primary.args = {
}
