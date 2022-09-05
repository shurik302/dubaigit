import React from "react";
import "../stylesheets/Footer.css";
import logo from "../images/logoSait.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="InfoFot">
        <div className="Logo">
          <img src={logo} />
        </div>
        <ol className="AllBlocks">
          <div>
            <ol>
              Buy
              <li>
                <a>Apartment in Dubai</a>
              </li>
              <li>
                <a>House in Dubai</a>
              </li>
              <li>
                <a>Apartments in Dubai</a>
              </li>
              <li>
                <a>Loft in Dubai</a>
              </li>
              <li>
                <a>Penthouse in Dubai</a>
              </li>
              <li>
                <a>Villa in Dubai</a>
              </li>
            </ol>
            <ol>
              Services
              <li>
                <a>Property management in Dubai, UAE</a>
              </li>
              <li>
                <a>Sell property in Dubai, UAE</a>
              </li>
              <li>
                <a>Rent property in Dubai, UAE</a>
              </li>
              <li>
                <a>Investments in Dubai, UAE</a>
              </li>
              <li>
                <a>Real estate for cryptocurrency in Dubai</a>
              </li>
              <li>
                <a>Moving to Dubai, UAE</a>
              </li>
            </ol>
          </div>
          <div>
            <ol>
              Information
              <li>
                <a>Video</a>
              </li>
              <li>
                <a>Podcasts</a>
              </li>
              <li>
                <a>Laws</a>
              </li>
              <li>
                <a>Questions and answers</a>
              </li>
              <li>
                <a>Books</a>
              </li>
              <li>
                <a>Articles</a>
              </li>
            </ol>
            <ol>
              About company
              <li>
                <a>Jobs </a>
              </li>
              <li>
                <a>Story</a>
              </li>
              <li>
                <a>Licenses</a>
              </li>
              <li>
                <a>Why are we</a>
              </li>
              <li>
                <a>Real estate agency</a>
              </li>
            </ol>
          </div>
          <ol>
            Contact
            <li>
              <a href="https://www.google.com/maps/place/Dubai+Driving+Center+-+Al+Khail+Branch/@25.1363259,55.245669,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f696d32da5d85:0x5df424f9f71c404c!8m2!3d25.1363211!4d55.2478577">
                964 Worthington Drive Dubai, UAE
              </a>
            </li>
            <li>
              <a href="mailto:dubairealty@mail.com">dubairealty@mail.com</a>
            </li>
            <li className="LiBut">
              <div className="button buttonF">
                <button>Book a consultation</button>
              </div>
            </li>
          </ol>
        </ol>
      </div>
      <hr className="HR" />
      <div className="Copyright">
        <div className="CopyrightS">
          <span>Copyright © 2022 Dubai Realty</span>
        </div>
        <div className="IconsCop">
          <a>
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a>
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a>
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a>
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a>
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
