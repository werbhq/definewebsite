import HUIButton from './../components/button/button';
import LightBulbImage from './../assets/images/defineLightBulbVideo.gif';
import BGImage from './../assets/images/HashHeroBackground.png';

import './hero.css';

function Hero() {
    return (
        <div className={'hero'}>
            <div className="heroSectionA">
                {/* <div className="backgroundImage">
                    <img src={BGImage} alt="" />
                </div> */}
                {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}

                <h1 className="heroheader">HASH</h1>
                <h3 className="tagline">
                    <span>reliving</span>
                    <span className="youthfulYellowFG">
                        <br /> the thunder.
                    </span>
                </h3>
                <br />
                <div className="buttonContainer">
                    <HUIButton text="Coming Soon" icon="go" event="hash" type="primary" variant="1" color="var(--witty-white)"></HUIButton>
                    <br />
                    <HUIButton text="Stay Tuned" icon="mail" event="hash" type="secondary" color="var(--witty-white)"></HUIButton>
                </div>
            </div>
            <div className="heroSectionB">
                <img src={LightBulbImage} alt="" />
            </div>
        </div>
    );
}

export default Hero;
