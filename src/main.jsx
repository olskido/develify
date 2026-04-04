import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { LiveTokensProvider } from './context/LiveTokensContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveTokensProvider>
      <App />
    </LiveTokensProvider>
  </StrictMode>,
)
