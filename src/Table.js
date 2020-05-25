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
		console.log("Scraper start button is registering")
		let urlContainer = document.getElementById("toScrape")
		let urlValue = urlContainer.value
		console.log(urlValue)
		if (urlValue) {
			console.log('its registered as having a value')
				fetch("/api/catch.php", {
				method: "POST",
				body: urlValue	
			}).then(function(response){
				console.log(response)
			});
		}
		else {
			alert("You must have a URL input into the text area next to the button!")
			document.getElementById("toScrape").setAttribute("style","border:2px solid red; background-color:yellow;")
		}
	}
	render() {
		return (
			<div>
				<div id="wrapper">
					<div className="wrap">
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