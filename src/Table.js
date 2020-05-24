import React from 'react'
import "./css/Table.css"
import ProductForm from "./ProductForm"
import FontPlus from './FontPlus'
import FontEdit from './FontEdit'
import FontImage from './FontImage'
import FontLink from './FontLink'
import FontScraper from './FontScraper'

class Table extends React.Component {
	AddProduct() {
		alert("Add Product button pressed!")
		
	}
	ModifyProduct() {
		alert("Modify product clicked!")
	}
	InitScraper(e) {
		let event = e
		let target = event.target
		let urlContainer = target.previousSibling
		let urlValue = urlContainer.value 
		if (urlValue)
		{
			fetch("/api/catch.php", {
				method: "POST",
				body: urlValue	
			}).then(function(response){
				console.log(response)
			});
		}
	}
	render() {
		return (
			<div>
				<div id="wrapper">
					<div class="wrap">
						<button className="productModifier" type="button" change="add" onClick={this.AddProduct}> Add Product <FontPlus /></button>
						<button className="productModifier" type="button" change="modify" onClick={this.ModifyProduct}>Modify Product <FontEdit /></button>
						<input placeholder="Product URL to scrape" id="toScrape" name="toScrape" /><button id="toScrapeButton" className="productModifier" onClick={this.InitScraper}>Scrape Product <FontScraper /></button>
					</div>
					<table id="wrapper-table">
						<thead>
							<tr id="trHeading">
								<th col="productName">Product Name</th>
								<th col="productLink">Link <FontLink /></th>
								<th col="productImg">Scraped Img <FontImage /></th>
								<th col="productUpdate">Last Updated</th>
								<th id="productPrice" col="productPrice">Price ---- Unit</th>
								<th id="productMinQuantity" col="productMinQuantity">Min Order</th>
							</tr>
						</thead>
					</table>
					<ProductForm display='false'/>
				</div>
			</div>
		);
    }
}

export default Table;