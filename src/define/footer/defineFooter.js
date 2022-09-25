import './defineFooter.css';
import './../hero/definehero.css';
import { BackgroundContext } from '../define';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Banner from '../../components/banner/banner';
import HUIButton from '../../components/button/button';

function DefineFooter() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
    });

    const { setBackground } = useContext(BackgroundContext);

    // if (inView) {
    //     setBackground('blackBG');
    // }
    return (
        <div className="defineFooter" ref={ref}>
            <Banner
                open={inView}
                isDocked={true}
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
            ></Banner>
            <div className="footerContent">
                <div className="socialIconContainer">
                    <a href="https://twitter.com/definehack" className="socialIcons">
                        <i class="fa fa-twitter" />
                    </a>
                    <a href="." className="socialIcons">
                        <i class="fa fa-linkedin" />
                    </a>

                    <a href="https://www.instagram.com/hashmbcet/" className="socialIcons">
                        <i class="fa fa-instagram" />
                    </a>
                    <a href="." className="socialIcons">
                        <i class="fa fa-envelope" />
                    </a>
                </div>
                <p>
                    © 2022 HASH MBCET. <br /> All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default DefineFooter;
