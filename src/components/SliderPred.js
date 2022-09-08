import React, { Component } from "react";
import Slider from "react-slick";
import CardSliderMiniInfo from "./CardSliderMiniInfo";
import CardSliderMiniImage from "./CardSliderMiniImage";
import K1 from "../images/K1.png";
import K2 from "../images/K2.png";
import K3 from "../images/K3.png";
import K4 from "../images/K4.png";
import K5 from "../images/K5.png";
import K6 from "../images/K6.png";
import K7 from "../images/K7.png";
import K8 from "../images/K8.png";
import K9 from "../images/K9.png";
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
                            image={K1}
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
                        <CardSliderMiniImage image={K2} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={K3} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={K4} textCard="Villas" />
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
                        <CardSliderMiniImage image={K5} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={K6} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={K7} textCard="Villas" />
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
                        <CardSliderMiniImage image={K8} textCard="Villas" />
                    </div>
                    <div className="Building">
                        <CardSliderMiniImage image={K9} textCard="Villas" />
                    </div>
                </Slider>
            </div>
        );
    }
}
