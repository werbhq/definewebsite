import Header from "./../header/header.js";
import "./define.css";
import DefineHero from "./hero/definehero.js";
import DefineAbout from "./about/about";

function Define() {
	return (
		<div className="Define">
			{/* <Header></Header> */}
			<div className="plasticTexture"></div>
			{/* <div className="glitchTexture"></div> */}
			<div className="plainNoise"></div>
			<DefineHero></DefineHero>
			<DefineAbout></DefineAbout>
			{/* <HUIButton text="Coming Soon" icon="go"></HUIButton> */}
		</div>
	);
}

export default Define;
