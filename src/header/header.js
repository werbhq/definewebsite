import "./header.css";
import HUIButton from "../components/button/button";
import hashLogo from "./../assets/images/hashlogo White.svg";
import hashIcon from "./../assets/images/hashLogomark.svg";
import hashBurger from "./../assets/images/hashBurger.svg";
import defineLogo from "./../assets/images/defineLogoPink.svg";

function Header() {
	return (
		<div>
			<div className="header">
				<div>
					<img className="hashLogoDesktop" src={hashLogo}></img>
					<img className="hashLogoMobile" src={hashIcon}></img>
				</div>
				<img className="hamburger" src={hashBurger}></img>
				<ul className="navbarList">
					<img className="defineLogoContainer" src={defineLogo}></img>
					<li>Schedule</li>
					<li>FAQs</li>
					<li>Contact</li>
					<HUIButton
						text="Coming Soon!"
						icon="hashIcon"
						event="define"
						type="Primary"
						color="#25262c"
					></HUIButton>
				</ul>
			</div>
		</div>
	);
}

export default Header;
