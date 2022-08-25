import "./header.css";
import HUIButton from "../components/button/button";
import hashLogo from "./../assets/images/hashlogo White.svg";
import defineLogo from "./../assets/images/defineLogoPink.svg";

function Header() {
	return (
		<div>
			<div className="header">
				<div>
					<img className="hashLogoContainer" src={hashLogo}></img>
				</div>
				<ul className="navbarList">
					<img className="defineLogoContainer" src={defineLogo}></img>
					<li>Schedule</li>
					<li>FAQs</li>
					<li>Contact</li>
					<HUIButton text="Grab Tickets!" icon={hashLogo}></HUIButton>
				</ul>
			</div>
		</div>
	);
}

export default Header;
