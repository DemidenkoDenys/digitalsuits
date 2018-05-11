import React from 'react';

import './footer.scss';

const Footer = () => {

	return (

		<footer className='footer-primary'>

			<ul className='socials'>
				<li>
					<a>facebook</a>
				</li>

				<li>
					<a>twitter</a>
				</li>

				<li>
					<a>linkedin</a>
				</li>
			</ul>

			<p className='copyright'>
				<small>Copyright &copy; Adminix <time dateTime='2017'>2017</time></small>
			</p>

		</footer>

	);
}

export default Footer;