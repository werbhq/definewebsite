import "./header.css";
import HUIButton from "../components/button/button";
import hashLogo from "./../assets/images/hashlogo White.svg";
import hashIcon from "./../assets/images/hashLogomark.svg";
import hashBurger from "./../assets/images/hashBurger.svg";
import { NavbarContext } from "../define/define";

import React, { useContext, useState } from "react";
import DefineLogo from "../define/defineLogo/defineLogo";

function Header() {
	const [sizeClass, setSizeClass] = useState("");
	const { active, setActive } = useContext(NavbarContext);
	return (
		<div>
			<div className={"header " + sizeClass}>
				<div className="navSectionLeft">
					<img className="hashLogoDesktop" src={hashLogo}></img>
					<img className="hashLogoMobile" src={hashIcon}></img>
				</div>
				<img
					className="hamburger"
					onClick={() => {
						console.log("hey" + active);
						setActive(!active);
					}}
					src={hashBurger}
				></img>
				<ul className="navbarList">
					<li>
						<DefineLogo></DefineLogo>
					</li>
					<li>Schedule</li>
					<li>FAQs</li>
					<li>Contact</li>
					<HUIButton
						text="Coming Soon!"
						icon="hashIcon"
						event="define"
						type="primary"
						variant="1"
						color="var(--blasphemous-black)"
					></HUIButton>
				</ul>
				<div className="headerBackground"></div>
			</div>
		</div>
	);
}

export default Header;
