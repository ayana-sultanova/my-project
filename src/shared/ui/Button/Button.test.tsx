import { Button, ThemeButton } from './Button'
import { render, screen } from '@testing-library/react'

describe('button', () => {
  test('Test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('Test clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
