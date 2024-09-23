import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
    <App />
  </StrictMode>,
)
