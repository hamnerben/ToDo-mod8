import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/TheHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <p>test</p>
            </>
  )
}

export default App
