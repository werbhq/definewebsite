import './defineFooter.css';
import './../hero/definehero.css';
import { useInView } from 'react-intersection-observer';
import Banner from '../../components/banner/banner';
import HUIButton from '../../components/button/button';

function DefineFooter() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
    });

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
                        <i className="fa fa-twitter" />
                    </a>
                    <a href="." className="socialIcons">
                        <i className="fa fa-linkedin" />
                    </a>

                    <a href="https://www.instagram.com/hashmbcet/" className="socialIcons">
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="mailto:hash@mbcet.ac.in" className="socialIcons">
                        <i className="fa fa-envelope" />
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
