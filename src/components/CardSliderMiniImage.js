import React from 'react'
import '../stylesheets/Slider.css';

function CardSliderMiniImage({ hrefImage,image, textCard }) {
	return (
		<a href={hrefImage} className='AllCardImage'>
			<div className='ShadowBlock'><img src={image} /></div>
			<span className='AllCardImageSpan'>{textCard}</span>
		</a>
	)
}

export default CardSliderMiniImage