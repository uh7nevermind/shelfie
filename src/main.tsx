import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MediaProvider } from './context/context.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaProvider>
      <App />
    </MediaProvider>
  </StrictMode>
)
