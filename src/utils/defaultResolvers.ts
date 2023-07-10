import { Color } from '@root/models/color'

export const resolveInvalidNumber = (
  value: string | null | undefined,
  fallback: number,
  inclusiveMin = 0,
  inclusiveMax: number
): number => {
  const number = Number(value)

  const isValidNumber =
    !isNaN(number) && number >= inclusiveMin && number <= inclusiveMax

  return isValidNumber ? number : fallback
}

export const resolveInvalidColor = (
  value: string | null | undefined,
  fallback: Color
): Color => {
  if (!(value as Color)) return fallback

  return value ? (value as Color) : fallback
}
