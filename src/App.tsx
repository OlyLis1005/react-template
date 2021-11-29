import React from 'react'
import './App.less'
import Router from "./router"
import routes from "./router/routes"
import {Link} from "react-router-dom"
import SideMenu from './components/side-menu'

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <nav>
        {
          routes.map(({path, name}) =>
            <Link key={path} to={path} style={{marginRight: '10px'}}>{name}</Link>
          )
        }
      </nav>
      <SideMenu/>
      <div className="app-content">
        <Router/>
      </div>
    </div>
  )
}

export default App
