import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@root/App'
import '@root/global.css'
import { RootStoreProvider } from '@store/rootStore.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>
)
