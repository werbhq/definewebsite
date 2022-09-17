import HUIButton from "../../components/button/button";
import "./../hero/definehero.css";
import LightBulbImage from "./../../assets/images/lightBulbDefine.svg";

function DefineHero() {
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
				<HUIButton text="Coming Soon" icon="go" event="define"></HUIButton>
			</div>
			<div className="heroSectionB">
				<img src={LightBulbImage} alt="" />
			</div>
		</div>
	);
}

export default DefineHero;
