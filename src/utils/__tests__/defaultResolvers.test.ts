import { Color } from '@root/models/color'
import {
  resolveInvalidNumber,
  resolveInvalidColor,
  resolveInvalidBoolean,
} from '@root/utils/defaultResolvers'
import { test, expect, describe } from 'vitest'

describe('defaultResolvers', () => {
  test('resolveInvalidNumber', () => {
    expect(resolveInvalidNumber('10', 5, 0, 20)).toBe(10)
    expect(resolveInvalidNumber('30', 5, 0, 20)).toBe(5)
    expect(resolveInvalidNumber('abc', 5, 0, 20)).toBe(5)
    expect(resolveInvalidNumber(null, 5, 0, 20)).toBe(5)
    expect(resolveInvalidNumber(undefined, 5, 0, 20)).toBe(5)
  })

  test('resolveInvalidColor', () => {
    const validColor: Color = 'green'
    const invalidColor = 'aqua'
    const fallbackColor: Color = 'blue'

    expect(resolveInvalidColor(validColor, fallbackColor)).toEqual(validColor)
    expect(resolveInvalidColor(invalidColor, fallbackColor)).toEqual(
      fallbackColor
    )
    expect(resolveInvalidColor(null, fallbackColor)).toEqual(fallbackColor)
    expect(resolveInvalidColor(undefined, fallbackColor)).toEqual(fallbackColor)
  })

  test('resolveInvalidBoolean', () => {
    expect(resolveInvalidBoolean('true', false)).toBe(true)
    expect(resolveInvalidBoolean('false', true)).toBe(false)
    expect(resolveInvalidBoolean('abc', true)).toBe(true)
    expect(resolveInvalidBoolean(null, true)).toBe(true)
    expect(resolveInvalidBoolean(undefined, true)).toBe(true)
  })
})
