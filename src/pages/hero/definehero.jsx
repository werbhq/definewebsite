import './../hero/definehero.css';
import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import ClusterDevLogo from './../../assets/images/clusterdev.svg';
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

    return (
        <div className={'hero'} ref={ref}>
            <div className="heroSectionA">
                <img width={'250px'} src={ClusterDevLogo} alt="clusterDev"></img>
                <h1 className="heroheader">define.</h1>
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
                <br />

                <div className="buttonContainer">
                    <HUIButton
                        text="Applications Closed"
                        icon="hashIcon"
                        event="define"
                        type="primary"
                        variant="1"
                        color="var(--blasphemous-black)"
                    ></HUIButton>
                </div>
            </div>
            <div className="heroSectionB">
                <img src={LightBulbImage} alt="" />
            </div>
        </div>
    );
}

export default DefineHero;
