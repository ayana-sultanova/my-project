import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}
export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}
export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}
export const OutlineDark: Story = {
  decorators: [
    DarkThemeDecorator
  ],
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  }
}
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}
export const SquareSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
