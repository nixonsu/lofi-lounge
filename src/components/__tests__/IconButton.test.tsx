import IconButton from '@root/components/IconButton'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactComponent as CoffeeIcon } from 'pixelarticons/svg/coffee.svg'
import { test, describe, vi, expect } from 'vitest'

describe('IconButton', () => {
  test('when clicked, should trigger handle click function', () => {
    const mock = vi.fn()
    render(<IconButton icon={<CoffeeIcon />} onClick={mock} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mock).toHaveBeenCalledOnce()
  })
})
