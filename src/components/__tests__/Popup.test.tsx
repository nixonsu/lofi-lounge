import Popup from '@root/components/Popup'
import { fireEvent, render, screen } from '@testing-library/react'
import { test, describe, vi, expect } from 'vitest'

describe('Modal', () => {
  test('should render correctly with title', () => {
    const mock = vi.fn()
    const title = 'Test title'
    render(<Popup title={title} onClose={mock} />)

    const titleElement = screen.getByText(title)

    expect(titleElement).toBeInTheDocument()
  })

  test('when close button clicked, should trigger on close function', () => {
    const mock = vi.fn()
    const title = 'Test title'
    render(<Popup title={title} onClose={mock} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mock).toHaveBeenCalledOnce()
  })
})
