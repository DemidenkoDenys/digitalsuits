import React, { Component } from 'react';

import '../../libs/hamburgers/hamburgers.scss';
import './menu.scss';

class Menu extends Component {

	state = {
		open: false
	}

	burgerClicked(){
		this.setState({ open: !this.state.open });
	}

	render() {

		const hamburgerClasses = `hamburger hamburger--elastic ${ this.state.open === true ? 'is-active' : null }`,
			  menuClasses = `menu-primary ${ this.state.open ? 'opened' : 'closed' }`;


    	return (
    		<nav className='menu-wrapper'>

    			<div className='menu-hamburger'>
    				<button className={ hamburgerClasses } type="button" onClick={ this.burgerClicked.bind(this) }>
  						<span className="hamburger-box">
    						<span className="hamburger-inner"></span>
  						</span>
					</button>
    			</div>

    			<ul className={ menuClasses } >
	    			{
	    				this.props.items.map(item => 
	    					<li key={ item }>
	    						<a>{ item }</a>
	    					</li>
	    				)
	    			}
    			</ul>

    		</nav>
    	);
  	}
}

export default Menu;