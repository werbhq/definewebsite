import HashHero from './hero/hero';
import HashAbout from './about/about';
import './hash.css';
import Header from './../header/header';
{
    /* <Header></Header>; */
}

function Hash() {
    return (
        <div className="Hash">
            <HashHero></HashHero>
            {/* <HashAbout></HashAbout>
            <HashHero></HashHero>; */}
        </div>
    );
}

export default Hash;
