import React, { Component } from 'react';

class ProductDetails extends Component {
	render() {

		//const max = this.props.max;


		return (
				<div  className="ProductDetails">
					{this.props.name} <br />
					{this.props.qty} <br />

				</div>
			);
	}
}

export default ProductDetails;