import "./navbar.css";
import defineLogo from "./../../assets/images/defineLogoPink.svg";
import HUIButton from "../button/button";
import { React, useState } from "react";

function Navbar() {
	const [navActive, setNavActive] = useState(false);

	return (
		<div
			className={navActive ? "NavBar" : "NavBar closed"}
			onClick={() => (navActive ? setNavActive(false) : setNavActive(true))}
		>
			<ul className="navbarList">
				<li>
					<img className="defineLogoContainer" src={defineLogo}></img>
				</li>
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
	);
}

export default Navbar;
