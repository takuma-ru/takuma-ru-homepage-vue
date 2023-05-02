import type { Meta, Story } from '@storybook/vue3'
import NavigationBarButton from './NavigationBarButton.vue'

export default {
  title: 'components/layouts/NavigationBarButton',
  component: NavigationBarButton,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationBarButton },
  setup () {
    return { args }
  },
  template: '<NavigationBarButton v-bind="args">{{ args.default }}</NavigationBarButton>'
})

export const Primary = Template.bind({})
Primary.args = {
}
