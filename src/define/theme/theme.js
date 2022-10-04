import './../theme/theme.css';
import AboutGlobe from './../../assets/images/DefineGlobe.png';
import { BackgroundContext } from '../define';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function DefineTheme() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    const { setBackground } = useContext(BackgroundContext);

    useEffect(() => {
        if (inView) {
            setBackground('blueBG');
        }
    }, [inView, setBackground]);

    return (
        <div className="defineTheme" ref={ref}>
            <div className="heroSectionA">
                <h2 className="mainheading">diving into</h2>
                <h2 className="heroheader">
                    <span className={inView ? 'youthfulYellowFG' : 'brilliantBlueFG'}>the theme</span>
                </h2>
                <br></br>
                <br></br>
                <h3 className="subheading">
                    building for
                    <span className={inView ? 'youthfulYellowFG' : 'brilliantBlueFG'}> the real world.</span>
                </h3>
                <br />

                <p className="description">
                    We’re all about building solutions that actually impact
                    <span className={inView ? 'youthfulYellowFG' : 'brilliantBlueFG'}> real problems around the globe.</span>
                </p>
                <br></br>
                <h3 className="subheading">more updates coming soon.</h3>
            </div>
            <div className="heroSectionB">
                <img src={AboutGlobe} alt="" />
            </div>
        </div>
    );
}

export default DefineTheme;
