import React from 'react';
import '../stylesheets/Home.css';
import MainSlider from '../components/MainSlider.js';
import SliderPred from '../components/SliderPred.js';

function Home() {
  return (
    <div className='Home'>
      <MainSlider />
      <div className='HomeSlide'>
        <SliderPred />
      </div>
      
    </div>
  )
}

export default Home