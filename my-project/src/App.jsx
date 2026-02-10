import { useState } from 'react'
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutUs></AboutUs>
    </>
  )
}

export default App
