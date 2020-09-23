import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div class="navBar">
      <Link to='/' style={{ paddingRight: '10px' }} >Skin That Wins!</Link>
      <Link to='/products' style={{ paddingRight: '10px' }}>Your Product Gallery</Link>
      <Link to='/products/new'>Add A New Product</Link>
    </div>

  )
}

export default NavBar