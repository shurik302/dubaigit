import React from "react";
import "../stylesheets/Home.css";
import MainSlider from "../components/MainSlider.js";
import SliderPred from "../components/SliderPred.js";
import VideoLogo from "../images/VideoLogo.MP4";
import One from "../images/ImagesInfo/1.png";
import Two from "../images/ImagesInfo/2.png";

function Home() {
    return (
        <div className="Home">
            <MainSlider />
            <div className="HomeSlide">
                <SliderPred />
            </div>
            <div className="InfoOne">
                <span>Our expertise</span>
                <span>
                    "The best apartment in Dubai" we will find your dream
                </span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse nibh massa, euismod ut libero id, blandit
                    posuere augue. Morbi porta volutpat diam egestas ultrices.
                    Phasellus tempus fringilla neque, nec viverra orci tristique
                    vel. In efficitur vehicula magna, varius pellentesque nisl
                    vehicula vel. Aenean vel sem ac elit commodo finibus in nec
                    massa. Nulla facilisi. Nulla vestibulum venenatis
                    sollicitudin. Etiam auctor mollis justo eu tincidunt.
                    Aliquam varius varius tortor. Cras id venenatis sem. Quisque
                    ut risus ex. Sed et tempor massa. Praesent ac eros
                    hendrerit, congue justo ac, molestie urna. Fusce nec neque
                    vitae dolor dapibus elementum. Maecenas nec orci quis sem
                    condimentum dapibus varius a lorem. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                </span>
            </div>
            <video className="VideoLogo" controls preload="metadata">
                <source src={VideoLogo} type="video/mp4" />
            </video>
            <div className="CitateBig">
                <span>
                    “Don’t limit yourself. Many people limit themselves to what
                    they think they can do. You can go as far as your mind lets
                    you. What you believe, remember, you can achieve.”{" "}
                    <span className="NameOfCitate">— Mary Kay Ash</span>{" "}
                </span>
            </div>
            <div className="InfoHotelRoom">
                <div>
                    <img src={One}></img>
                    <span>
                        Sed in sem pellentesque, eleifend erat vitae, tincidunt
                        turpis. Pellentesque augue elit, rutrum sit amet commodo
                        vel, porta quis purus. Nullam faucibus, odio eu bibendum
                        auctor, eros dolor aliquet purus, sit amet pellentesque
                        neque est id tortor. In egestas, erat a dapibus dapibus,
                        mi augue ornare lorem, nec pretium ligula purus nec
                        tellus. Aenean a scelerisque nisi. Nullam pretium
                        fermentum nunc, feugiat placerat urna rutrum eget.
                        Nullam mattis justo consequat risus. Donec imperdiet
                        enim id efficitur pharetra. Nam sollicitudin at est eget
                        auctor. Ut sed ante quis nulla tincidunt auctor. Quisque
                        accumsan pretium tincidunt. Etiam viverra ultrices est
                        vitae suscipit. Pellentesque elementum purus non nisl
                        pharetra consequat. Nunc in venenatis orci.
                    </span>
                </div>
                <div>
                    <img src={Two}></img>
                    <span>
                        Vivamus non diam vel lorem efficitur mattis in gravida
                        ante. Ut ullamcorper dapibus ante, eu tincidunt orci
                        feugiat vel. Curabitur eget lectus lectus. Pellentesque
                        malesuada, felis at accumsan interdum, nisl mi fermentum
                        est, eu suscipit dui lorem a dui. Aliquam rhoncus risus
                        in leo vestibulum efficitur. Suspendisse tortor quam,
                        faucibus a lacinia a, bibendum vitae quam. Suspen disse
                        et metus et orci rutrum dictum eu eu nibh. Suspendisse
                        blandit in diam in rhoncus. Nam volutpat hendrerit enim,
                        sed aliquet quam gravida at. Nullam dictum sagittis
                        nisi, eu porta sem mollis eu. Nulla faucibus sed ipsum
                        sed sodales. Curabitur varius iaculis felis, in aliquet
                        sem suscipit quis. Ut vulputate, magna ac bibendum
                        elementum, nulla magna tincidunt urna, a venenatis dolor
                        arcu sed leo.{" "}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
