import './define.css';
import DefineHero from './hero/definehero';
import DefineAbout from './about/about';
import DefineTheme from './theme/theme';
import DefineFooter from './footer/defineFooter';
import Navbar from './../components/navbar/navbar';
import React, { useState, useEffect } from 'react';
import DefineSponsors from './sponsors/sponsors';
import NavBarContext from '../context/NavBarContext';
import BackgroundContext from '../context/BackgroundContext';
import Header from '../components/header/header';

function Define() {
    const [background, setBackground] = useState('blackBG');
    const [active, setActive] = useState(false);

    useEffect(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 4000);
        }
    }, []);

    return (
        <NavBarContext.Provider value={{ active, setActive }}>
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
        </NavBarContext.Provider>
    );
}

export { Define, BackgroundContext, NavBarContext };
