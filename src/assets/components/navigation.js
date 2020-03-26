import React from 'react'

import logo from "../images/logo.svg"

function Navigation(){

  return(
    <nav>
      <ul>
        <li>
          <a href="/">
            <img className="nav-logo" src={logo} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
