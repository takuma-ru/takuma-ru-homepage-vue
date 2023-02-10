import type { Meta, Story } from '@storybook/vue3'
import DatePicker from './DatePicker.vue'

export default {
  title: 'components/utils/DatePicker',
  component: DatePicker,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DatePicker },
  setup () {
    return { args }
  },
  template: '<DatePicker v-bind="args">{{ args.default }}</DatePicker>'
})

export const Primary = Template.bind({})
Primary.args = {
}
