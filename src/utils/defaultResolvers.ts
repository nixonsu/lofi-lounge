import { Color } from '@root/models/color'

export const resolveInvalidNumber = (
  value: string | null | undefined,
  fallback: number,
  inclusiveMin = 0,
  inclusiveMax: number
): number => {
  if (value === null || value === undefined) {
    return fallback
  }

  const number = Number(value)

  const isValidNumber =
    !isNaN(number) && number >= inclusiveMin && number <= inclusiveMax

  return isValidNumber ? number : fallback
}

export const resolveInvalidColor = (
  value: string | null | undefined,
  fallback: Color
): Color => {
  if (value === null || value === undefined) {
    return fallback
  }

  return isColor(value) ? (value as Color) : fallback
}

export const resolveInvalidBoolean = (
  value: string | null | undefined,
  fallback: boolean
): boolean => {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  return fallback
}

// Since TypeScript works at compile time,
// Following logic checks if string provided is a valid color at runtime
// https://bobbyhadz.com/blog/typescript-check-if-string-is-in-union-type
const ALL_COLORS = [
  'green',
  'red',
  'gray',
  'yellow',
  'blue',
  'purple',
  'pink',
  'white',
  'black',
] as const

function isColor(value: string): value is Color {
  return ALL_COLORS.includes(value as Color)
}
