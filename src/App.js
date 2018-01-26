import React, { Component } from 'react';
import XfersHeader from './XfersHeader';
import ProductDetails from './ProductDetails';
import ProductTotal from './ProductTotal';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			price : 0
		};
	}

  onChangeTotal(subtotal) {
  	this.setState({
  		price: subtotal
  	});
  }




  render() {

    return (
      <div className="App">
      	<XfersHeader />
        <ProductDetails  name="Mac Book Pro" price={2000} qty={4} qtyMin={1}  qtyMax={3} subtotal={(e) => this.onChangeTotal(e)} />
        <ProductDetails  name="Mac Book Air" price={1500} qty={6} qtyMin={1} qtyMax={5}  subtotal={(e) => this.onChangeTotal(e)}/>
      </div>
    );
  }
}

export default App;
