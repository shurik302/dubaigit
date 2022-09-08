import React from "react";
import "../stylesheets/Navigation.css";
import logo from "../images/logoSait.png";
import MiniLogo from "../images/MiniLogo.png";
import { CheckSv } from "../Tech/Function";
import { Razv } from "../Tech/Function";

function Navigation() {
    return (
        <div className="Navigation">
            <div className="RightNav">
                <div className="logo">
                    <img className="LogoI" src={logo} />
                    <img className="MiniLogoI" src={MiniLogo} />
                </div>
                <i class="fa-solid fa-bars"></i>
                <div className="Func" onClick={CheckSv}></div>
                <ol className="pages">
                    <li className="Buy">
                        <div className="Razv" onClick={Razv}>
                            <a className="BuyA">BUY</a>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <ol className="BuyO">
                            <li>Category number one </li>
                            <li>Apartments in Dubai</li>
                            <li>Category number twenty five</li>
                        </ol>
                    </li>
                    <li className="Blog">
                        <a className="BlogA">BLOG</a>
                        <ol className="BlogO">
                            <li>Category number one </li>
                            <li>Apartments in Dubai</li>
                            <li>Category number twenty five</li>
                        </ol>
                    </li>
                    <li className="About">
                        <a className="AboutA">ABOUT</a>
                        <ol className="AboutO">
                            <li>Category number one </li>
                            <li>Apartments in Dubai</li>
                            <li>Category number twenty five</li>
                        </ol>
                    </li>
                    <li className="Contacts">
                        <a className="ContactsA">CONTACTS</a>
                        <ol className="ContactsO">
                            <li>Category number one </li>
                            <li>Apartments in Dubai</li>
                            <li>Category number twenty five</li>
                        </ol>
                    </li>
                </ol>
            </div>

            <div className="LeftNav">
                <div className="button">
                    <button>Book a consultation</button>
                </div>

                <div className="translate">
                    <div>En</div>
                    <div>Ru</div>
                </div>

                <div className="tel">
                    <a href="tel:+72126742510">
                        <span className="NumberPhone">+7 (212) 674-25-10</span>
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
