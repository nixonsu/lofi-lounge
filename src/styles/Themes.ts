export interface Theme {
  text: string
  textShadow: string
  redGlow: string
  blueGlow: string
  greenGlow: string
  greenDropShadow: string
}

export const defaultTheme: Theme = {
  text: 'rgb(235, 235, 235)',
  textShadow:
    '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff',
  redGlow:
    '0px 0px 1px hsl(0, 100%, 80%), 0px 0px 2px hsl(0, 100%, 80%), 0px 0px 15px hsl(0, 100%, 50%), 0px 0px 60px red',
  blueGlow:
    '    0px 0px 1px hsl(192, 100%, 80%), 0px 0px 16px hsl(244, 90%, 49%), 0px 0px 30px hsl(244, 100%, 50%), 0px 0px 60px white',
  greenGlow:
    '    0px 0px 2px hsl(120, 100%, 80%), 0px 0px 15px green, 0px 0px 60px green',
  greenDropShadow:
    'drop-shadow(0px 0px 2px hsl(120, 100%, 80%)) drop-shadow(0px 0px 8px green)',
}
