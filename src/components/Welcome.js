import React from 'react';
import { Route, Link } from 'react-router-dom'
import Product from './Product';

class Welcome extends React.Component {

  render() {
    return (
    <div>
        <Link to='/products/' >Check Out Your Products!</Link><br></br><br></br>
        <Link to='/products/new' >Add a New Product!</Link>
    </div>

  )

}
}

export default Welcome;