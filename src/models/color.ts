export type Color =
  | 'green'
  | 'red'
  | 'gray'
  | 'yellow'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'white'
  | 'black'

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

export function isColor(value: string): value is Color {
  return ALL_COLORS.includes(value as Color)
}
