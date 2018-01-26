import React, { Component } from 'react';
import ProductTotal from './ProductTotal';


class ProductDetails extends Component {

	constructor(props) {
    super(props);
    
	    this.state = {
	    	current : this.props.qtyMin,
	    	errorMessage : "",
	    	total : this.props.qtyMin * this.props.price,
	    };


		this.props.subtotal(this.state.total);

 	}



	addQty() {
   		

	   	if (this.state.current  < this.props.qtyMax) {
	   		//quantity x price
	   		let c = this.state.current+1;

	   		this.setState(IncrementOne => ({
	     	 current : c,
		     errorMessage : "",
		     total: c * this.props.price
		    }));

		this.props.subtotal(this.state.total);

	   	} else {
	   		this.setState(IncrementOne => ({
	     	 current : this.state.current,
		     	 errorMessage : "Error: Number should not be greater than "+ this.props.qtyMax,
		    }));
	   	}
	 }


	subtractQty() {

		if(this.state.current <= this.props.qtyMin) {
		    this.setState(DecrementOne => ({
		     	 current : this.state.current,
		     	 errorMessage : "Error: Number should not be less than "+ this.props.qtyMin,
			    }));
		} else {
	   		let c = this.state.current-1;
			this.setState(DecrementOne => ({
		     	 current : this.state.current-1,
		     	 errorMessage : "",
			     total: c * this.props.price
			 }));
			
		}
		this.props.subtotal(this.state.total);

	}



	render() {

		const maxQty = this.props.qtyMax;
		const minQty = this.props.qtyMin;


		return (
					<div  className="ProductDetails">

						<div className= "ProductInformation">
							<span className="productName"> {this.props.name} </span>
							<span className="productQty"> Price:  {this.props.price} </span>
							<span className="productQty"> Qty:  {this.props.qty} </span>
							{maxQty > 0 && 
							<span className="limit"> Max: {maxQty}  </span>
							}

							{minQty > 0 &&
								<span  className="limit">Min: {minQty} </span>
							} <br />

						</div>
						
						<div className= "ProductInput">
							<span className="errorMessage"> {this.state.errorMessage} </span>
							<button onClick={(e) => this.addQty(e)}>+</button>
							<input  className="inputProduct" type="text" value={this.state.current}  />
							<button onClick={(e) => this.subtractQty(e)}>-</button>
							<span className="subtotal">Subtotal : {this.state.total} </span>
						</div>

					</div>
			);
	}
}

export default ProductDetails;