import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Calculator from './Calculator'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
    <div>
      <h1>Exercise 3: React Calculator</h1>
      <Calculator />
    </div>
    </>
  )
}

export default App;