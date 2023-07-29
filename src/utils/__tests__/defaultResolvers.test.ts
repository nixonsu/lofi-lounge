import { Color } from '@root/models/color'
import {
  resolveInvalidNumber,
  resolveInvalidColor,
  resolveInvalidBoolean,
} from '@root/utils/defaultResolvers'
import { test, expect, describe } from 'vitest'

describe('defaultResolvers', () => {
  describe('resolveInvalidNumber', () => {
    test('should return valid number when input is within range', () => {
      expect(resolveInvalidNumber('10', 5, 0, 20)).toBe(10)
    })

    test('should return min value when input is below the range', () => {
      expect(resolveInvalidNumber('30', 5, 0, 20)).toBe(5)
    })

    test('should return min value when input is not a number', () => {
      expect(resolveInvalidNumber('abc', 5, 0, 20)).toBe(5)
    })

    test('should return min value when input is null', () => {
      expect(resolveInvalidNumber(null, 5, 0, 20)).toBe(5)
    })

    test('should return min value when input is undefined', () => {
      expect(resolveInvalidNumber(undefined, 5, 0, 20)).toBe(5)
    })
  })

  describe('resolveInvalidColor', () => {
    test('should return valid color when input is a valid color', () => {
      const validColor: Color = 'green'
      const fallbackColor: Color = 'blue'
      expect(resolveInvalidColor(validColor, fallbackColor)).toEqual(validColor)
    })

    test('should return fallback color when input is an invalid color', () => {
      const invalidColor = 'aqua'
      const fallbackColor: Color = 'blue'
      expect(resolveInvalidColor(invalidColor, fallbackColor)).toEqual(
        fallbackColor
      )
    })

    test('should return fallback color when input is null', () => {
      const fallbackColor: Color = 'blue'
      expect(resolveInvalidColor(null, fallbackColor)).toEqual(fallbackColor)
    })

    test('should return fallback color when input is undefined', () => {
      const fallbackColor: Color = 'blue'
      expect(resolveInvalidColor(undefined, fallbackColor)).toEqual(
        fallbackColor
      )
    })
  })

  describe('resolveInvalidBoolean', () => {
    test('should return true when input is "true"', () => {
      expect(resolveInvalidBoolean('true', false)).toBe(true)
    })

    test('should return false when input is "false"', () => {
      expect(resolveInvalidBoolean('false', true)).toBe(false)
    })

    test('should return true when input is neither "true" nor "false"', () => {
      expect(resolveInvalidBoolean('abc', true)).toBe(true)
    })

    test('should return true when input is null', () => {
      expect(resolveInvalidBoolean(null, true)).toBe(true)
    })

    test('should return true when input is undefined', () => {
      expect(resolveInvalidBoolean(undefined, true)).toBe(true)
    })
  })
})
