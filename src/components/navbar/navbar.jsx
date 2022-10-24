import './navbar.css';
import HUIButton from '../button/button';
import { React, useContext, useState } from 'react';
import DefineLogo from '../../pages/defineLogo/defineLogo';
import hashBurger from './../../assets/images/hashBurger.svg';
import NavBarContext from '../../context/NavBarContext';

function Navbar(props) {
    const { active, setActive } = useContext(NavBarContext);
    const [, setNavActive] = useState(active);

    const openDevFolio = () => {
        const devfolioContainer = document.getElementById('devfolio-overlay-container');
        if (devfolioContainer) devfolioContainer.style.display = 'block';
    };

    return (
        <div className="NavBarContainer">
            <div className={active ? 'NavBar' : 'NavBar closed'}>
                <img className="hamburger" src={hashBurger} alt="Hash Burger"></img>
                <ul className="navbarList">
                    <li>
                        <DefineLogo></DefineLogo>
                    </li>
                    <li>Schedule</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                    <HUIButton
                        text="Register Now"
                        icon="hashIcon"
                        event="define"
                        type="primary"
                        variant="1"
                        color="var(--blasphemous-black)"
                        onClick={openDevFolio}
                    />
                </ul>
            </div>
            <div
                className={active ? 'backgroundOverlay' : 'backgroundOverlay backgroundOverlayClosed'}
                onClick={() => {
                    setNavActive(false);
                    setActive(false);
                }}
            ></div>
        </div>
    );
}

export default Navbar;
