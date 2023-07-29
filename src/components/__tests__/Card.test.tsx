import Card from '@root/components/Card'
import { fireEvent, render, screen } from '@testing-library/react'
import { test, describe, vi, expect } from 'vitest'

describe('Card', () => {
  test('should render correctly', () => {
    const mock = vi.fn()
    const testText = 'Test text'
    const src = '/fake-image.png'
    render(
      <Card
        id="1"
        src={src}
        text={testText}
        handleClick={mock}
        isSelected={false}
      />
    )

    const cardText = screen.getByText(testText)
    const displayedImage = document.querySelector('img') as HTMLImageElement

    expect(cardText).toBeInTheDocument()
    expect(displayedImage).toBeInTheDocument()
  })

  test('when clicked, should trigger handle click function', () => {
    const mock = vi.fn()
    const testText = 'Test text'
    const src = '/fake-image.png'
    render(
      <Card
        id="1"
        src={src}
        text={testText}
        handleClick={mock}
        isSelected={false}
      />
    )

    const cardText = screen.getByText(testText)
    fireEvent.click(cardText)

    expect(mock).toHaveBeenCalledOnce()
  })
})
