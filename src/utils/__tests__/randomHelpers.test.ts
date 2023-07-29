import { randomIntFromInterval } from '@root/utils/randomHelpers'
import { describe, expect, test } from 'vitest'

describe('randomHelpers', () => {
  describe('randomIntFromInterval', () => {
    test('should return integer within interval', () => {
      // Given
      const min = 0
      const max = 20

      // When
      const number = randomIntFromInterval(min, max)

      // Then
      expect(number).toBeGreaterThanOrEqual(min)
      expect(number).toBeLessThanOrEqual(max)
    })
  })
})
