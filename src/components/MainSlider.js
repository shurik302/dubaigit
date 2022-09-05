import React, { Component } from "react";
import Slider from "react-slick";
import '../stylesheets/Slider.css';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      cssEase: 'ease-in-out',
      pauseOnHover: false,
      appendDots: dots => (
        <div
          style={{
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className="settingsSlider"
        >
          <div className="numberSlide">0{i + 1}</div> <div className="TextSlide">Lorem ipsum <br />Dolorem apset</div>
        </div>
      ),
      responsive: [
        {
          breakpoint: 530,
          settings: {
            autoplay: false,
            dots: false,
          }
        }
      ]

    };
    return (
      <div className="AllSlide">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <style>{cssstyle}</style>
        <Slider {...settings}>

          <div className="firstDivSlide DivSlide">
            <div className="InfoSlideone InfoSlide">
              <span>Lorem ipsum</span>
              <span>Welcome home <br /><span>To</span> luxury</span>
              <span>Book a consultation<i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <img src={one} />
          </div>
          <div className="secondDivSlide DivSlide">
            <div className="InfoSlidetwo InfoSlide">
              <span>Lorem ipsum</span>
              <span>Welcome home <br /><span>To</span> luxury</span>
              <span>Book a consultation<i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <img src={two} />
          </div>
          <div className="thirdDivSlide DivSlide">
            <div className="InfoSlidethree InfoSlide">
              <span>Lorem ipsum</span>
              <span>Welcome home <br /><span>To</span> luxury</span>
              <span>Book a consultation<i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <img src={three} />
          </div>

        </Slider>
      </div>
    );
  }
}

const cssstyle = `
`