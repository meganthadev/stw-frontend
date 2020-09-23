import React from 'react';
import { connect } from 'react-redux';
import ProductsContainer from './containers/ProductsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ProductsContainer />
      </div>
    );
  }
}


export default connect(null)(App);
