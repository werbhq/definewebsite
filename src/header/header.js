import "./header.css";
import HUIButton from "../components/button";

function Header() {
	return (
		<div>
			<div className="header">
				<div></div>
				<ul className="navbarList">
					<li>Schedule</li>
					<li>FAQs</li>
					<li>Contact</li>
					<HUIButton text="Grab Tickets!"></HUIButton>
				</ul>
			</div>
		</div>
	);
}

export default Header;
