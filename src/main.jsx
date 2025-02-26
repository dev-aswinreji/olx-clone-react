import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App  from './App.jsx'
import './index.css'
import {firebase} from './firebase/config'
import {FirebaseContext} from './store/Context'
import Context from './store/Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
    <App />
      </Context>
    </FirebaseContext.Provider>
  </StrictMode>,
)
