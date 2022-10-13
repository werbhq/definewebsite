import Header from './../header/header.js';
import './define.css';
import DefineHero from './hero/definehero.js';
import DefineAbout from './about/about';
import DefineTheme from './theme/theme.js';
import DefineFooter from './footer/defineFooter.js';
import Navbar from './../components/navbar/navbar.js';
import React, { useState, createContext, useEffect } from 'react';
import DefineSponsors from './sponsors/sponsors.js';

const BackgroundContext = createContext();
const NavbarContext = createContext();

function Define() {
    const [background, setBackground] = useState('blackBG');
    const [active, setActive] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
            setLoading(false);
        }
    }, [isLoading, setLoading]);

    return isLoading ? null : (
        <NavbarContext.Provider value={{ active, setActive }}>
            <BackgroundContext.Provider value={{ background, setBackground }}>
                <div className={'Define ' + background}>
                    <Header />
                    <Navbar />
                    <div className="plasticTexture"></div>
                    {/* <div className="glitchTexture"></div> */}
                    <div className="plainNoise"></div>
                    <DefineHero></DefineHero>
                    <DefineAbout></DefineAbout>
                    <DefineTheme></DefineTheme>
                    <DefineSponsors></DefineSponsors>
                    <DefineFooter></DefineFooter>
                    {/* <HUIButton text="Coming Soon" icon="go"></HUIButton> */}
                </div>
            </BackgroundContext.Provider>
        </NavbarContext.Provider>
    );
}

export { Define, BackgroundContext, NavbarContext };
