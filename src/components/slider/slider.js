import React from 'react';
import Slider from "react-slick";

import Slide from './slide';
import SectionHeader from '../elements/section-header';

import './slider.scss';

const SliderBlock = ({ items }) => {

	const settings = {
      	dots: true,
      	arrows: false,
      	infinite: true,
      	speed: 500,
      	slidesToShow: 1,
      	slidesToScroll: 1,
      	adaptiveHeight: true
    };

	return (

		<section className='slider-section'  style={{ backgroundImage: `url(${require('../../images/bgimage.jpg')})` }}>

			<SectionHeader text='testimonial' line />

			<Slider {...settings}>
				{
					items.map(({ id, text, author }) => 
						<Slide  key={ id } 
								id={ id } 
								text={ text } 
								author={ author } />
					)
				}
		    </Slider>

		</section>

	);
}

export default SliderBlock;