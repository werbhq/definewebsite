import HUIButton from "../../components/button/button";
import "./../about/about.css";
import AboutTree from "./../../assets/images/about_pic.png";
import React, { useState, createContext, useContext, useRef } from "react";
import { BackgroundContext } from "../define";
import useIntersection from "../../components/intersection/useIntersection.js";
import { useInView } from "react-intersection-observer";

function DefineAbout() {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.6,
	});

	const { background, setBackground } = useContext(BackgroundContext);

	if (inView) {
		setBackground("pinkBG");
	}
	return (
		<div className="defineAbout" ref={ref}>
			<div className="heroSectionA">
				<h2 className="mainheading">let's define</h2>
				<h2 className="heroheader">
					<span className="youthfulYellowFG">define.</span>
				</h2>
				<br></br>
				<br></br>
				<p className="description">
					Define is a 24-hour offline <br />
					hackathon to channelise your <br />
					creative minds and bring out <br />
					solutions for
					<span className="youthfulYellowFG"> real-world problems.</span>
				</p>
				<br></br>
				<h3 className="subheading">
					in short,
					<span className="youthfulYellowFG"> a chance to</span>
				</h3>
				<br></br>
				<ul className="benefits">
					<li>
						<p>Interact and learn</p>
					</li>
					<li>
						<p>Play around with multiple domains</p>
					</li>
					<li>
						<p>Build solutions that impact</p>
					</li>
					<li>
						<p>Gain awesome goodies.</p>
					</li>
					<li>
						<p>Have a whole lot of fun</p>
					</li>
				</ul>
			</div>
			<div className="heroSectionB">
				<img src={AboutTree} alt="" />
			</div>
		</div>
	);
}

export default DefineAbout;
