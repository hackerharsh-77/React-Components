import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
      <div>
          <nav>
              <ui>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/users">Users</Link>
                  </li>
              </ui>
          </nav>
      </div>

      <Routes>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/users">
              <Users />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Routes>
    </Router>
   
  )
}

function Home()
{
    return <h1>hello home</h1>
}

function About()
{
    return <h1>hello about</h1>
}

function Users()
{
    return <h1>hello users </h1>
}