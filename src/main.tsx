import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MediaProvider } from './context/context.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaProvider>
      <Router>
        <App />
      </Router>
    </MediaProvider>
  </StrictMode>
)
