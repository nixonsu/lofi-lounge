export interface Scene {
  id: SceneType
  name: string
  src: string
}

type SceneType = 'japanese-temple' | 'city-skyline'
