import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import { BackgroundContext } from './../../App';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HashLogo from './../../assets/images/HashWordmark.svg';
import BackgroundImage from './../../assets/images/HashHeroBackground.png';
import './hero.css';
import HUIButton from '../../components/button/button';

function HashHero() {
    // const { ref, inView } = useInView({
    //     /* Optional options */
    //     threshold: 0.6,
    // });

    // const { setBackground } = useContext(BackgroundContext);

    // useEffect(() => {
    //     if (inView) {
    //         setBackground('blackBG');
    //     }
    // }, [inView, setBackground]);

    return (
        <div className="HashHero">
            <div className="heroSectionA">
                {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
                <img src={HashLogo} className="logo"></img>
                <div className="taglinecontainer">
                    <h3 className="tagline">
                        <span>build for the</span>
                        <span className="youthfulYellowFG">
                            <br /> real world.
                        </span>
                    </h3>
                    <div className="datecontainer">
                        <h3 className="tagline">
                            <span className="youthfulYellowFG">5 - 6</span>
                            <span>
                                <br />
                                Nov
                            </span>
                        </h3>
                    </div>
                </div>
                <HUIButton
                    text="Grab Tickets"
                    icon="go"
                    event="hash"
                    type="primary"
                    variant="1"
                    color="var(--witty-white)"
                    link="https://www.rebrand.ly/define_sponsorguide"
                ></HUIButton>
                <br />
            </div>
            <div className="heroSectionB"></div>
        </div>
    );
}

export default HashHero;
