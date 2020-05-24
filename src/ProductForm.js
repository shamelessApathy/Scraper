import React from "react"
import "./css/ProductForm.css"

class ProductForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {display: props.display}
	}
	DisplayFalse() {
		this.setState({display:false})
	}
	CloseProductForm = () => {
    	this.setState({display: false})
    }
	BuildProductForm() {
		return (
			<div>
				<table className="productFormModule">
					<thead>
						<tr><th>Product Name</th><th>Product URL</th><th>Manufacturer</th><th>Country of Origin</th><th>Image URL</th><th>Price --- Unit</th><th>MOQ</th><th><button onClick={this.CloseProductForm}>Close</button></th></tr>
					</thead>
					<tbody>
					<tr>
						<td>Example</td>
						<td>https://aliexpress.com/example</td>
						<td>Example Inc.</td>
						<td>China</td>	
						<td>https://photobucket.com/path/to/example.jpg</td>
						<td>100 per kg</td>
						<td>10kg</td>
					</tr>
					</tbody>							
				</table>
			</div>
			)
	}	
	DisplayTest() {
		if (this.state.display) {
			// continue with render
			console.log('bool was true')

			return this.BuildProductForm()
		}
		else {
			return false
		}
	}
	render() {
		return (
			<div>
			(this.state.display)
			{
				this.DisplayTest()
			}	
			</div>			
		);
	}
}


export default ProductForm;