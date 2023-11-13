import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Text'
  }
}
export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Text'
  }
}

export const PrimaryDark: Story = {
  decorators: [
    DarkThemeDecorator
  ],
  args: {
    title: 'Title',
    text: 'Text'
  }
}

export const OnlyTitleDark: Story = {
  decorators: [
    DarkThemeDecorator
  ],
  args: {
    title: 'Title'
  }
}

export const OnlyTextDark: Story = {
  decorators: [
    DarkThemeDecorator
  ],
  args: {
    text: 'Text'
  }
}
