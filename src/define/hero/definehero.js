import HUIButton from "../../components/button/button";
import "./../hero/definehero.css";

function DefineHero() {
	return (
		<div className="hero">
			<div className="herosectiona">
				<h6 className="titlesponsor">Title Sponsor Name</h6>
				<h1 className="heroheader">define.</h1>
				<h3 className="tagline">
					<span>build for the</span>
					<span className="youthfulYellowFG">
						<br /> real world.
					</span>
				</h3>

				<br />
				<HUIButton text="Coming Soon" icon="go"></HUIButton>
			</div>
		</div>
	);
}

export default DefineHero;
