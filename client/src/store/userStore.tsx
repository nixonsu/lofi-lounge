import { Dispatch, createContext, useContext, useReducer } from 'react'
import { Scene } from '../types/scene'

interface UserState {
  selectedScene: Scene
}

type UserAction = { type: 'SET_SELECTED_SCENE'; selectedScene: Scene }

const initialState: UserState = {
  selectedScene: {
    id: 'japanese-temple',
    name: 'Japanese Temple',
    src: '/gifs/japanese-temple.gif',
  },
}

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'SET_SELECTED_SCENE':
      return {
        ...state,
        selectedScene: action.selectedScene,
      }
    default:
      return state
  }
}

const UserContext = createContext<{
  state: UserState
  dispatch?: Dispatch<UserAction>
}>({ state: initialState, dispatch: () => null })

export const UserStoreProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserStore = () => useContext(UserContext)
