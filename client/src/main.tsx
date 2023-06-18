import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { SceneStoreProvider } from './store/sceneStore.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SceneStoreProvider>
      <App />
    </SceneStoreProvider>
  </React.StrictMode>
)
