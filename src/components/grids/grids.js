import React from 'react';

import SectionHeader from '../elements/section-header';

import './grids.scss';

const Grids = ({ items }) => {

	return (

		<section className='grids-section'>

			<SectionHeader text='features' line />

			<ul className='grid'>
				{
					items.map(({ id, image, header, text }) => {
						
						return(
							<li className='grid-item' key={ id }>
								<img src={ require('../../images/grids/' + id + '.png') } alt={ header } />
								<h3>{ header }</h3>
								<p>{ text }</p>
							</li>
						)
					})
				}
			</ul>

		</section>

	);
}

export default Grids;