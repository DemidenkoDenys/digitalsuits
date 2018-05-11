import React from 'react';

import './top-button.scss';

const TopButton = () => {

	window.onscroll = () => {
		let button = document.getElementById('top-button');

		if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			button.classList.add('visible');
		} else {
			button.classList.remove('visible');
		}
	}

	const handlerClick = () => {
		document.body.scrollTop = 0;
    	document.documentElement.scrollTop = 0;
	};

	return (
		<div className='top-button-wrapper'>
			<button onClick={ handlerClick }
					id='top-button'
					className={ document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 'visible' : '' }>
			</button>
		</div>
	);
}

export default TopButton;