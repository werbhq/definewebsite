import { BackgroundContext } from '../define';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './sponsors.css';
import DefineSponsorsList from './sponsorsList';

function DefineSponsors() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.3,
    });

    const { setBackground } = useContext(BackgroundContext);

    useEffect(() => {
        if (inView) {
            setBackground('yellowBG');
        }
    }, [inView, setBackground]);

    return (
        <div className="defineSponsors" ref={ref}>
            <div className="sponsorContainer">
                {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
                <h2 className="mainheading">meet our</h2>
                <h2 className="heroheader">
                    <span className={inView ? 'brilliantBlueFG' : 'youthfulYellowFG'}>sponsors.</span>
                </h2>
                <br></br>
                <DefineSponsorsList />

                {/* <Banner
                    open={inView}
                    content={
                        <div>
                            <p>Calling out support for this venture. Interested?</p>
                            <br />
                            <HUIButton
                                text="Sponsorship Guide"
                                icon="go"
                                event="define"
                                type="primary"
                                variant="2"
                                color="var(--witty-white)"
                                link="https://www.rebrand.ly/define_sponsorguide"
                            ></HUIButton>
                        </div>
                    }
                ></Banner> */}
            </div>
        </div>
    );
}

export default DefineSponsors;
