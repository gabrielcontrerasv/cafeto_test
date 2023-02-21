import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CustomersList } from './customersList/CustomersList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CustomersList/>
     </div>
  )
}

export default App
