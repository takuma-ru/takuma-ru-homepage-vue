import type { Meta, Story } from '@storybook/vue3'
import SocialMediaButon from './SocialMediaButon.vue'

export default {
  title: 'components/utils/SocialMediaButon',
  component: SocialMediaButon,
  argTypes: {
  }
} as Meta

const Template: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SocialMediaButon },
  setup () {
    return { args }
  },
  template: '<SocialMediaButon v-bind="args">{{ args.default }}</SocialMediaButon>'
})

export const Primary = Template.bind({})
Primary.args = {
}
