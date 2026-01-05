import React from 'react'
import RouteControl from './RouteControl.js'
import Logo from './logo.js'

function Header() {
  return (
    <div className='m-auto display-flex'>
      <Logo/>
      <RouteControl/>
    </div>
  )
}

export default Header