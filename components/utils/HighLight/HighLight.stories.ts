import type { Meta, Story } from '@storybook/vue3'
import HighLight from './HighLight.vue'

export default {
  title: 'components/utils/HighLight',
  component: HighLight,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HighLight },
  setup () {
    return { args }
  },
  template: '<HighLight v-bind="args">{{ args.default }}</HighLight>'
})

export const Primary = Template.bind({})
Primary.args = {
}
