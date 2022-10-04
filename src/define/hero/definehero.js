import './../hero/definehero.css';
import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import { BackgroundContext } from '../define';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HUIButton from '../../components/button/button';

function DefineHero() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    const { setBackground } = useContext(BackgroundContext);

    useEffect(() => {
        if (inView) {
            setBackground('blackBG');
        }
    }, [inView, setBackground]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={'hero'} ref={ref}>
            <div className="heroSectionA">
                {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
                <h1 className="heroheader">define.</h1>
                <h3 className="tagline">
                    <span>build for the</span>
                    <span className="youthfulYellowFG">
                        <br /> real world.
                    </span>
                </h3>
                <br />

                {/* Old Button */}
                <div className="buttonContainer">
                    <HUIButton
                        text="Coming Soon"
                        icon="go"
                        event="define"
                        type="primary"
                        variant="1"
                        color="var(--blasphemous-black)"
                    ></HUIButton>
                    <br />
                    <HUIButton text="Stay Tuned" icon="mail" event="define" type="secondary" color="var(--youthful-yellow)"></HUIButton>
                </div>

                <div className="apply-button" data-hackathon-slug="definehack" data-button-theme="dark-inverted"></div>
            </div>
            <div className="heroSectionB">
                <img src={LightBulbImage} alt="" />
            </div>
        </div>
    );
}

export default DefineHero;
