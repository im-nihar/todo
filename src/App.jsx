import { useState } from 'react'
import './App.css'
import Home from './pages/home.jsx'
import Timer from './pages/timer.jsx'

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
