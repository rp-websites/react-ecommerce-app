import React, { Component } from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collections/collection-preview.component.jsx';

import './shop.styles.scss';

class ShopPage extends Component{
	constructor(){
		super();

		this.state = {
			collections: SHOP_DATA
		}
	}
	render(){
		const {collections} = this.state;
		return(
			collections.map(({id, ...otherParams}) => (
				<CollectionPreview key={id} {...otherParams}/>
			))
		)	
	}	
}

export default ShopPage;