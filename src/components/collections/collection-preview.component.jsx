import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {
	return (
		<div className='collection-preview'>
			<h2 className='title'>{title}</h2>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({id, ...otherParams}) => (
						<CollectionItem key={id} {...otherParams}/>
				))}
			</div>
		</div>
	);

};

export default CollectionPreview;