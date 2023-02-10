import type { Meta, Story } from '@storybook/vue3'
import TextArea from './TextArea.vue'

export default {
  title: 'components/utils/TextArea',
  component: TextArea,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextArea },
  setup () {
    return { args }
  },
  template: '<TextArea v-bind="args">{{ args.default }}</TextArea>'
})

export const Primary = Template.bind({})
Primary.args = {
}
