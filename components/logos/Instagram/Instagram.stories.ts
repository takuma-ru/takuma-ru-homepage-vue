import type { Meta, Story } from '@storybook/vue3'
import Instagram from './Instagram.vue'

export default {
  title: 'components/logos/Instagram',
  component: Instagram,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Instagram },
  setup () {
    return { args }
  },
  template: '<Instagram v-bind="args">{{ args.default }}</Instagram>'
})

export const Primary = Template.bind({})
Primary.args = {
}
