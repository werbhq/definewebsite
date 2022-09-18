import Header from "./../header/header.js";
import "./define.css";
import DefineHero from "./hero/definehero.js";
import DefineAbout from "./about/about";
import DefineTheme from "./theme/theme.js";
import Navbar from "./../components/navbar/navbar.js";

function Define() {
	return (
		<div className="Define">
			<Header></Header>
			{/* <Navbar></Navbar> */}
			<div className="plasticTexture"></div>
			{/* <div className="glitchTexture"></div> */}
			<div className="plainNoise"></div>
			<DefineHero></DefineHero>
			<DefineAbout></DefineAbout>
			<DefineTheme></DefineTheme>
			{/* <HUIButton text="Coming Soon" icon="go"></HUIButton> */}
		</div>
	);
}

export default Define;
