export const resolveInvalidNumber = (
  value: string | null | undefined,
  fallback = 0,
  inclusiveMin = 0,
  inclusiveMax: number
): number => {
  const number = Number(value)

  const isValidNumber =
    !isNaN(number) && number >= inclusiveMin && number <= inclusiveMax

  return isValidNumber ? number : fallback
}
