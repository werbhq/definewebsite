import './../about/about.css';
import AboutTree from './../../assets/images/about_pic.png';
import React, { useContext } from 'react';
import { BackgroundContext } from '../define';
import { useInView } from 'react-intersection-observer';

function DefineAbout() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    const { setBackground } = useContext(BackgroundContext);

    if (inView) {
        setBackground('pinkBG');
    }
    return (
        <div className="defineAbout" ref={ref}>
            <div className="heroSectionA">
                <h2 className="mainheading">let's define</h2>
                <h2 className="heroheader">
                    <span className="youthfulYellowFG">define.</span>
                </h2>
                <p className="description">
                    Define is a 24-hour offline hackathon to channelise your creative minds and bring out solutions for
                    <span className="youthfulYellowFG"> real-world problems.</span>
                </p>
                <br />
                <h3 className="subheading">
                    in short,
                    <span className="youthfulYellowFG"> a chance to</span>
                </h3>
                <br />
                <ul className="benefits">
                    <li>
                        <p>Build solutions that impact</p>
                    </li>
                    <li>
                        <p>Play around with multiple domains</p>
                    </li>
                    <li>
                        <p>Gain awesome goodies.</p>
                    </li>
                    <li>
                        <p>Have a whole lot of fun</p>
                    </li>
                </ul>
            </div>
            <div className="heroSectionB">
                <img src={AboutTree} alt="" />
            </div>
        </div>
    );
}

export default DefineAbout;
