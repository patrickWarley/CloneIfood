import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello!</h1>
      <nav className="">
        <ul>
          <li> <Link to="login">Login</Link> </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
