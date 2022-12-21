import type { Meta, Story } from '@storybook/vue3'
import Twitter from './Twitter.vue'

export default {
  title: 'components/logos/Twitter',
  component: Twitter,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Twitter },
  setup () {
    return { args }
  },
  template: '<Twitter v-bind="args">{{ args.default }}</Twitter>'
})

export const Primary = Template.bind({})
Primary.args = {
}
