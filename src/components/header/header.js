import React from 'react';

import Logo from '../elements/logo';
import Menu from './menu';

import './header.scss';

const Header = () => {

   	return (
		<header className='header-primary'>

			<Logo image='https://download.blender.org/institute/logos/blender-socket.png' linkto='#' />

    		<Menu items={['menu 1', 'menu 2', 'menu 3']} />

		</header>
	);
}

export default Header;