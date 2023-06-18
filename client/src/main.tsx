import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { SceneStoreProvider } from './store/sceneStore.tsx'
import { TrackStoreProvider } from './store/trackStore.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SceneStoreProvider>
      <TrackStoreProvider>
        <App />
      </TrackStoreProvider>
    </SceneStoreProvider>
  </React.StrictMode>
)
