import HUIButton from "../../components/button/button";
import "./../hero/definehero.css";
import LightBulbImage from "./../../assets/images/defineLightBulbVideo.gif";
import { BackgroundContext } from "../define";
import { useContext, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function DefineHero() {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.6,
	});

	const { background, setBackground } = useContext(BackgroundContext);
	const [shrink, setShrink] = useState(false);

	if (inView) {
		setBackground("blackBG");
	}

	return (
		<div className="hero" ref={ref}>
			<div className="heroSectionA">
				{/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
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
						type="primary"
						variant="1"
						color="var(--blasphemous-black)"
					></HUIButton>
					<br />
					<HUIButton
						text="Stay Tuned"
						icon="mail"
						event="define"
						type="secondary"
						color="var(--youthful-yellow)"
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
