import type { Meta, Story } from '@storybook/vue3'
import NavigationDrawer from './NavigationDrawer.vue'

export default {
  title: 'components/layouts/NavigationDrawer',
  component: NavigationDrawer,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavigationDrawer },
  setup () {
    return { args }
  },
  template: '<NavigationDrawer v-bind="args">{{ args.default }}</NavigationDrawer>'
})

export const Primary = Template.bind({})
Primary.args = {
}
