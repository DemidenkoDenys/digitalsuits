import React from 'react';

import './logo.scss';

const Logo = ({ image, linkto }) => {

	const imageTemplate = <img src={ image } alt='main logo' />;

	return (
		<div className="logo-wrapper">
			{ linkto ? <a href={ linkto } >{ imageTemplate }</a> : image }
		</div>
	);
}

export default Logo;