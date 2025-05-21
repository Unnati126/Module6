import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Emoji from './Emoji'

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
      
      {/* Exercise 3 Component */}
      <div className="App">
        <h1>Emoji Mood Toggle</h1>
        <Emoji />
      </div>
    </>
  );
}

export default App;