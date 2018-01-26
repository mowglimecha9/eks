import React, { Component } from 'react';
import logo from './logo.svg';
import XfersHeader from './XfersHeader';
import ProductDetails from './ProductDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <XfersHeader />
        <ProductDetails name="Mac Book Pro" qty={4} min={1}  max={3}/>
        <ProductDetails name="Mac Book Air" qty={10} min={1}  max={3}/>
      </div>
    );
  }
}

export default App;
