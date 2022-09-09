import Header from "./../header/header.js";
import "./define.css";
import DefineHero from "./hero/definehero.js";
import About from "./../about";

function Define() {
	return (
		<div className="Define">
			{/* <Header></Header> */}
			<div className="plasticTexture"></div>
			<div className="plainNoise"></div>
			<DefineHero></DefineHero>
			<About></About>
		</div>
	);
}

export default Define;
