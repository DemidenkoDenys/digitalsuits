import React from 'react';
import Slider from "react-slick";

import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import './description-item.scss';

const DescriptionItem = ({ imageLeft, id, content, images }) => {

	const settings = {
      	arrows: true,
      	dots: false,
      	infinite: false,
      	speed: 500,
      	slidesToShow: 1,
      	slidesToScroll: 1
    };

    function getTextTemplate(text){
    	if(Array.isArray(text)){
			return text.map((item, index) => {
				if(Array.isArray(item)){
					return getArrayUlTemplate(item)
				} else {
					return <p key={ index }>{ item }</p>
				}
			});
		} else {
			return <p>{ text }</p>;
		}
    }

    function getArrayUlTemplate(item){
    	if(Array.isArray(item)){
    		return <ul>{ item.map((item, index) => <li key={ index }>{ item }</li>) }</ul>;
		}
    }

	return (

		<div className={ `description-item ${ !imageLeft ? 'reverse' : '' }` }>

			<Slider {...settings}>
				{
					images.map((item, index) => 
						<img key={ index } src={ item } alt={ 'sliderimage' } />
					)
				}
		    </Slider>

		    <Tabs defaultActiveKey={0} id={`tabs-${ id }`} className={'tab-wrapper ' + (content.length === 1 ? 'only-one' : '') }>
		    	{
		    		content.map(({ tab, header, text, button }, index) => {

						return(
							<Tab key={ index } 
								 eventKey={ index } 
								 title={ !!tab ? tab : 'tab' }>

								<h3>{ header }</h3>
								
								{ getTextTemplate(text) }

								<div className='button-wrapper'>
									<a className='button dark'>{ button }</a>
								</div>

							</Tab>
						)
					})
		    	}
			</Tabs>

		</div>

	);
}

export default DescriptionItem;