import React, { Fragment } from 'react';

const Slide = ({ id, text, author }) => {
	return(
		<Fragment>
			<img src={ require('../../images/testimonials/' + id + '.png') } alt={ 'icon of slider ' + id } />

		    <blockquote>
		    	{ text }
		    </blockquote>

		    <footer>
		    	<cite className="author">{ author }</cite>
		    </footer>
		</Fragment>
	)
};

export default Slide;