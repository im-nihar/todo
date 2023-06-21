import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Timer from './pages/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Her</h1>
      <div className="card">
        <Timer/>
        <Home/>

      </div>
    </>
  )
}

export default App
