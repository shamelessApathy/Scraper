import React from 'react'
import ReactDOM from 'react-dom'
import "./css/Table.css"
import FontPlus from './FontPlus'
import FontEdit from './FontEdit'

class Table extends React.Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<div class="wrap">
						<button className="productModifier" type="button" change="add"> Add Product <FontPlus /></button>
						<button className="productModifier" type="button" change="modify">Modify Product <FontEdit /></button>
					</div>
					<table id="wrapper-table">
						<thead>
							<tr>
								<th col="productName">Product Name</th>
								<th col="productLink">Link</th>
								<th col="productImg">Scraped Img</th>
								<th col="productUpdate">Last Updated</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		);
    }
}

export default Table;