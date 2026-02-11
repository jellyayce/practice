import { useState } from 'react'
import Dashboard from './components/Dashboard'
import AboutUs from './components/AboutUs'
import BrowsePage from './components/BrowsePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowsePage></BrowsePage>
    </>
  )
}

export default App
