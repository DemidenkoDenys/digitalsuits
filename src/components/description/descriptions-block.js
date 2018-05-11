import React from 'react';

import DescriptionItem from './description-item';
import SectionHeader from '../elements/section-header';

import './descriptions-block.scss';

const DescriptionBlock = ({ items }) => {

	return (

		<section className='descriptions-section'>

			<SectionHeader text='Description' fixed line />
		
			{
				items.map(({ id, content, images }, index) => {
					return <DescriptionItem key={ id } 
											imageLeft={ !(index % 2) } 
											content={ content } 
											images={ images }
											id={ id } /> 
				})
			}

		</section>

	);
}

export default DescriptionBlock;