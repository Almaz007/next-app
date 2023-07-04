"use client";
import './navigation.css';
import './navigationMedia.css';
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState(false);

    return ( 
        <div className="navigation__block">
            <div className="navigation__row">
                <div className="navigation__logo">
                
                </div>
                <nav id="nav" className={active ? "nav open" : "nav"}>
                    <ul className="navigation">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link ">Contact</a>
                        </li>                    
                    </ul>
                    <button id="nav-btn" className="nav-button" onClick={() => setActive(active ? false : true)}>
                        <img id="nav-btn-img" src={active ? "./img/iconsNavigation/nav-close.svg" : "./img/iconsNavigation/nav-open.svg"} alt="Nav button"/>
                    </button>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;