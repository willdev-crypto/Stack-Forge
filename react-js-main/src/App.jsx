import { useState } from 'react'
import reactLogo from './assets/logo2.gif'
import viteLogo from './assets/logo1.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://open.spotify.com/user/wil.dgl?si=Qb8SRp5pR6yClRuZthsSVQ" target="_blank">
          <img src={viteLogo} className="logo"  alt="Vite logo" />
        </a>
        <a href="https://instagram.com/wb_recordings/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>W&B RECORDINGS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          CONTE AQUI SEUS CLICK's {count}
        </button>
        <p>
         
        </p>
      </div>
      <p className="read-the-docs">
        CLICK NAS IMAGENS.
      </p>
    </>
  )
}

export default App
