import HUIButton from "../../components/button/button";
import "./../theme/theme.css";
import AboutGlobe from "./../../assets/images/DefineGlobe.png";

function DefineTheme() {
	return (
		<div className="defineTheme">
			<div className="heroSectionA">
				<h2 className="mainheading">diving into</h2>
				<h2 className="heroheader">
					<span className="brilliantBlueFG">the theme</span>
				</h2>
				<br></br>
				<br></br>
				<h3 className="subheading">
					building for
					<span className="brilliantBlueFG"> the real world.</span>
				</h3>
				<br />

				<p className="description" style={{ maxWidth: "300px" }}>
					We’re all about building solutions that actually impact
					<span className="brilliantBlueFG">
						{" "}
						real problems around the globe.
					</span>
				</p>
				<br></br>
				<h3 className="subheading">more updates coming soon.</h3>
			</div>
			<div className="heroSectionB">
				<img src={AboutGlobe} alt="" />
			</div>
		</div>
	);
}

export default DefineTheme;
