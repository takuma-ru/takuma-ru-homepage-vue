import type { Meta, Story } from '@storybook/vue3'
import Combobox from './Combobox.vue'

export default {
  title: 'components/utils/Combobox',
  component: Combobox,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Combobox },
  setup () {
    return { args }
  },
  template: '<Combobox v-bind="args">{{ args.default }}</Combobox>'
})

export const Primary = Template.bind({})
Primary.args = {
}
