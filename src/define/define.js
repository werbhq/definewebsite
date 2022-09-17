import Header from "./../header/header.js";
import "./define.css";
import DefineHero from "./hero/definehero.js";
import About from "./../about";
import HUIButton from "../components/button/button.js";

function Define() {
	return (
		<div className="Define">
			{/* <Header></Header> */}
			<div className="plasticTexture"></div>
			<div className="plainNoise"></div>
			<DefineHero></DefineHero>
			<About></About>
			{/* <HUIButton text="Coming Soon" icon="go"></HUIButton> */}
		</div>
	);
}

export default Define;
