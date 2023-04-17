import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header'
import Nav from './Componentes/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Nav/>
    </div>
  )
}

export default App
