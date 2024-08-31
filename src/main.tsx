import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FirebaseContext } from './Store/FirebaseContext.tsx'
import firebase from "./Firebase/config.ts"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
