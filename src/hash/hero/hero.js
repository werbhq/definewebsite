import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import { BackgroundContext } from './../../App';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function HashHero() {
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
        <p style={{ color: '#000' }}>hello</p>
        // <div className={'hero'} ref={ref} style="background-color: #000">
        //     hello
        //     <div className="heroSectionA">
        //         {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
        //         <h1 className="heroheader">define.</h1>
        //         <div className="taglinecontainer">
        //             <h3 className="tagline">
        //                 <span>build for the</span>
        //                 <span className="youthfulYellowFG">
        //                     <br /> real world.
        //                 </span>
        //             </h3>
        //             <div className="datecontainer">
        //                 <h3 className="tagline">
        //                     <span className="youthfulYellowFG">5 - 6</span>
        //                     <span>
        //                         <br />
        //                         Nov
        //                     </span>
        //                 </h3>
        //             </div>
        //         </div>
        //         <br />
        //     </div>
        //     <div className="heroSectionB">
        //         <img src={LightBulbImage} alt="" />
        //     </div>
        // </div>
    );
}

export default HashHero;
