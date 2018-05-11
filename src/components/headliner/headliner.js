import React from 'react';

import './headliner.scss';

const Headliner = ({ background }) => {

	return (
		<section className='headliner-section' style={{ backgroundImage: `url(${require('../../images/bgimage.jpg')})` }}>
		
			<h1>Microservices<br /> administration<br /> for everyone</h1>
			
			<small>application to orchestrate all your microservices like a pro</small>

			<a className='button'>discover adminix</a>

		</section>

	);
}

export default Headliner;