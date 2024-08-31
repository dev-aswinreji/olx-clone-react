import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Context, { FirebaseContext } from './Store/FirebaseContext.tsx'
import { loginAuth, signupAuth } from "./Firebase/config.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ signupAuth, loginAuth }}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </StrictMode>,
)
