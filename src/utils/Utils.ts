export const chooseRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

export const randomIntFromInterval = (min: number, max: number) => {
  // Min and max inclusive
  return Math.floor(Math.random() * (max - min + 1) + min)
}
