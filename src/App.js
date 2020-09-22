import React from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from './actions/fetchProducts';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchProducts({type: 'FETCH_PRODUCTS', payload: {name: 'Avene'}})
  }

    render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}


export default connect(null, {fetchProducts})(App);
