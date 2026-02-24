import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-1/3 h-screen bg-gray-950 items-center justify-center gap-2'>
        <Button className='flex flex-col justify-center'>
          <span>PRIMARY</span>
          <span>Lg</span>
        </Button>
        <Button size='md' className='flex flex-col justify-center'>
          <span>PRIMARY</span>
          <span>md</span>
        </Button>
        <Button size='sm' className='flex flex-col justify-center'>
          <span>PRIMARY</span>
          <span>sm</span>
        </Button>
      </div>
      
      <div className='flex flex-col w-1/3 h-screen bg-gray-800 items-center justify-center gap-2'>
        <Button variant='secondary' className='flex flex-col justify-center'>
          <span>SECONDARY</span>
          <span>Lg</span>
        </Button>
        <Button variant='secondary' size='md' className='flex flex-col justify-center'>
          <span>SECONDARY</span>
          <span>md</span>
        </Button>
        <Button variant='secondary' size='sm' className='flex flex-col justify-center'>
          <span>SECONDARY</span>
          <span>sm</span>
        </Button>
      </div>

      <div className='flex flex-col w-1/3 h-screen bg-gray-600 items-center justify-center gap-2'>
        <Button variant='danger' className='flex flex-col justify-center'>
          <span>DANGER</span>
          <span>Lg</span>
        </Button>
        <Button variant='danger' size='md' className='flex flex-col justify-center'>
          <span>DANGER</span>
          <span>md</span>
        </Button>
        <Button variant='danger' size='sm' className='flex flex-col justify-center'>
          <span>DANGER</span>
          <span>sm</span>
        </Button>
      </div>
    </div>
  )
}

export default App
