import React from 'react'
import ReactDOM from 'react-dom'
import './css/Product.css'

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(), pid: 1234 }
		};
	}	
}