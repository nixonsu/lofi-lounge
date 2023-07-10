export const chooseRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

export const randomIntFromInterval = (
  inclusiveMin: number,
  inclusiveMax: number
) => {
  return Math.floor(
    Math.random() * (inclusiveMax - inclusiveMin + 1) + inclusiveMin
  )
}
