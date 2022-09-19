import HUIButton from "../../components/button/button";
import "./../hero/definehero.css";
import LightBulbImage from "./../../assets/images/defineLightBulbVideo.gif";
import { BackgroundContext } from "../define";
import { useContext } from "react";

function DefineHero() {
	const setBackground = useContext(BackgroundContext);
	return (
		<div className="hero">
			<div className="heroSectionA">
				<h6 className="titlesponsor">Title Sponsor Name</h6>
				<h1 className="heroheader">define.</h1>
				<h3 className="tagline">
					<span>build for the</span>
					<span className="youthfulYellowFG">
						<br /> real world.
					</span>
				</h3>

				<br />
				<div className="buttonContainer">
					<HUIButton
						text="Coming Soon"
						icon="go"
						event="define"
						type="Primary"
						color="#25262c"
					></HUIButton>
					<br />
					<HUIButton
						text="Stay Tuned"
						icon="mail"
						event="define"
						type="Secondary"
						color="#ecf016"
					></HUIButton>
				</div>
			</div>
			<div className="heroSectionB">
				<img src={LightBulbImage} alt="" />
			</div>
		</div>
	);
}

export default DefineHero;
