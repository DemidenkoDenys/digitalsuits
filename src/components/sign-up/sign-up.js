import React, { Component } from 'react';

import SectionHeader from '../elements/section-header';
import SignUpForm from './form';

import './sign-up.scss';

class SignUp extends Component {

	render() {

		return (
			<section className='sign-up-section'>

				<SectionHeader text='sign up for beta' line />

				<p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil, iste non voluptates blanditiis magnam.</small></p>

				<SignUpForm />

			</section>    		
    	);
  	}
}

export default SignUp;