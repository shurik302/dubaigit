import React, { Component } from "react";
import Slider from "react-slick";
import CardSliderMiniInfo from "./CardSliderMiniInfo";
import CardSliderMiniImage from "./CardSliderMiniImage";
import first from "../images/first.png";
import "../stylesheets/Slider.css";
/* import LiShowSldie from "../Tech/Function"; */
import { selectDate, selectDateS, selectDateT } from "../Tech/Function";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
        };
        return (
            <div className="MiniSlider">
                <div className="UpSlider">
                    <div className="UpSliderS">
                        <span>Latest projects</span>
                    </div>
                    <div className="UpSliderO">
                        <ol>
                            <li onClick={selectDate} className="AllLi active">
                                All
                            </li>
                            <li onClick={selectDateS} className="BuildingLi ">
                                Building
                            </li>
                            <li onClick={selectDateT} className="InteriorLi ">
                                Interior
                            </li>
                            <li>
                                <a>View all projects</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="Building">
                        <CardSliderMiniImage
                            hrefImage="../pages/Buy"
                            image={first}
                            textCard="Villas"
                        />
                    </div>
                    <div className="Interior">
                        <CardSliderMiniInfo
                            name="Dubai"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit."
                            ahref="../pages/Buy"
                            atext="See project"
                        />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Interior">
                        <CardSliderMiniInfo
                            name="Dubai"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit."
                            ahref="../pages/Buy"
                            atext="See project"
                        />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Interior">
                        <CardSliderMiniInfo
                            name="Dubai"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit."
                            ahref="../pages/Buy"
                            atext="See project"
                        />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={first} textCard="Villas" />
                    </div>
                </Slider>
            </div>
        );
    }
}
