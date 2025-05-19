import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

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

      <h1>Hello world</h1>
      
    <p>paragraph 1</p><p>paragraph 2</p>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
    </>
  )
}

import PropsDisplayer from './components/PropsDisplayer' // up the top
import City from './components/City' // Make sure City is imported

// You can move these inside the App component's return if you want them rendered:
function ExtraComponents() {
  return (
    <>
      {/* Renders the component with no props */}
      <PropsDisplayer />

      {/* Renders the component with a single prop 'myProp' */}
      <PropsDisplayer myProp="first prop"/>

      {/* Renders the component with multiple props - add your own! */}
      <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

      <City name="Sydney" />

      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />

      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />
    </>
  );
}

export default App