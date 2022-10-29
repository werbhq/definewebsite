import './header.css';
import React, { useContext } from 'react';
import HUIButton from '../button/button';
import hashLogo from '../../assets/images/hashlogo White.svg';
import hashIcon from '../../assets/images/hashLogomark.svg';
import hashBurger from '../../assets/images/hashBurger.svg';
import DefineLogo from '../../pages/defineLogo/defineLogo';
import NavBarContext from '../../context/NavBarContext';

function Header() {
    const { active, setActive } = useContext(NavBarContext);

    return (
        <div>
            <div className="header">
                <div className="navSectionLeft">
                    <img className="hashLogoDesktop" src={hashLogo} alt="HASH Logo"></img>
                    <img className="hashLogoMobile" src={hashIcon} alt="HASH Icon"></img>
                </div>
                <img className="hamburger" onClick={() => setActive(!active)} alt="Hash Burger" src={hashBurger}></img>
                <ul className="navbarList">
                    <li>
                        <DefineLogo />
                    </li>
                    <li>Schedule</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
                <div className="headerBackground"></div>
            </div>
        </div>
    );
}

export default Header;
