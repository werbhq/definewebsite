import React from "react";
import PropTypes from "prop-types";
import iconPath from "./../../utils/iconData";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

function Icon(props) {
	const styles = { ...defaultStyles, ...props.style };
	return (
		<svg
			className={props.className}
			style={styles}
			viewBox={props.viewBox}
			width={`${props.size}px`}
			height={`${props.size}px`}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<path fill={props.color} d={iconPath[props.icon]} />
		</svg>
	);
}

Icon.defaultProps = {
	size: 16,
	color: "#000000",
	viewBox: "0 0 24 24",
	style: {},
	className: "",
};

Icon.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	viewBox: PropTypes.string.isRequired,
	style: PropTypes.shape(PropTypes.object),
	className: PropTypes.string,
};

export default Icon;
