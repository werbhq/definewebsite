import "./banner.css";

function Banner(props) {
	return (
		<div className={"banner " + (props.open ? "bannerOpen" : "bannerClosed")}>
			{props.content}
		</div>
	);
}

export default Banner;
