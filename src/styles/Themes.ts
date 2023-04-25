export interface Theme {
  text: string
  textShadow: string
}

export const defaultTheme: Theme = {
  text: '#fff',
  textShadow:
    '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff',
}
