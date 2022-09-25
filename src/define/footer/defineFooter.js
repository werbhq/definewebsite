import './defineFooter.css';
import './../hero/definehero.css';
import { BackgroundContext } from '../define';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';

function DefineFooter() {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
    });

    const { setBackground } = useContext(BackgroundContext);

    if (inView) {
        setBackground('blackBG');
    }
    return <div className="defineFooter" ref={ref}></div>;
}

export default DefineFooter;
