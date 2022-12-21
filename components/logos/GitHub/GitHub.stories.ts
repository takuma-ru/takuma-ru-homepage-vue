import type { Meta, Story } from '@storybook/vue3'
import GitHub from './GitHub.vue'

export default {
  title: 'components/logos/GitHub',
  component: GitHub,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GitHub },
  setup () {
    return { args }
  },
  template: '<GitHub v-bind="args">{{ args.default }}</GitHub>'
})

export const Primary = Template.bind({})
Primary.args = {
}
