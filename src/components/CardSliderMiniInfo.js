import React from 'react';
import '../stylesheets/Slider.css';


function CardSliderMini({ name, info, ahref, atext }) {
	return (
		<div className='AllCard'>
			<span>{name}</span>
			<span>{info}</span>
			<div className='AllCardA'><a href={ahref}><p>{atext}</p><i class="fa-solid fa-chevron-right"></i></a></div>
		</div>
	)
}

export default CardSliderMini