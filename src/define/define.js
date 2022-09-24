import Header from './../header/header.js';
import './define.css';
import DefineHero from './hero/definehero.js';
import DefineAbout from './about/about';
import DefineTheme from './theme/theme.js';
import Navbar from './../components/navbar/navbar.js';
import React, { useState, createContext } from 'react';
import DefineSponsors from './sponsors/sponsors.js';

const BackgroundContext = createContext();
const NavbarContext = createContext();

function Define() {
    const [background, setBackground] = useState('blackBG');
    const [active, setActive] = useState(false);
    return (
        <NavbarContext.Provider value={{ active, setActive }}>
            <BackgroundContext.Provider value={{ background, setBackground }}>
                <div className={'Define ' + background}>
                    <Header></Header>
                    <Navbar></Navbar>
                    <div className="plasticTexture"></div>
                    {/* <div className="glitchTexture"></div> */}
                    <div className="plainNoise"></div>
                    <DefineHero></DefineHero>
                    <DefineAbout></DefineAbout>
                    <DefineTheme></DefineTheme>
                    <DefineSponsors></DefineSponsors>
                    {/* <HUIButton text="Coming Soon" icon="go"></HUIButton> */}
                </div>
            </BackgroundContext.Provider>
        </NavbarContext.Provider>
    );
}

export { Define, BackgroundContext, NavbarContext };
