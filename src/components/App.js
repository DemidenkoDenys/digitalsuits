import React, { Component, Fragment } from 'react';

import Header from './header/header';
import Headliner from './headliner/headliner';
import Grids from './grids/grids';
import DescriptionBlock from './description/descriptions-block';
import SliderBlock from './slider/slider';
import SignUp from './sign-up/sign-up';
import Footer from './footer/footer';
import TopButton from './elements/top-button';

import data from '../data/data.json';

import './App.scss';

class App extends Component {

	render() {
    	return (
    		<Fragment>

	    		<Header />

	    		<main>

	    			<Headliner />

	    			<Grids items={ data.features }/>

	    			<DescriptionBlock items={ data.descriptions }/>

	    			<SliderBlock items={ data.testimonials } />

	    			<SignUp />

	    			<TopButton />

	    		</main>

	    		<Footer />

    		</Fragment>
    	);
  	}
}

export default App;