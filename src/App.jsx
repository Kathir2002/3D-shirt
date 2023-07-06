import React from 'react'
import Home from './pages/Home'
import Canvas from './canvas'
import Customiser from './pages/Customiser'

const App = () => {
  return (
    <main className='app transition-all ease-in' >
      <Home />
      <Canvas />
      <Customiser />
    </main>
  )
}

export default App