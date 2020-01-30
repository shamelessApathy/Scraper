import React from "react"
import ReactDOM from 'react-dom'
import "./css/ProductForm.css"

class ProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.display = props.display			
	}
	render() {
		return (
			<div>
				<h2>This is the product form</h2>
			</div>
			);
	}
}


export default ProductForm;