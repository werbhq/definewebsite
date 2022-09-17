import "./button.css";
import Icon from "./../icon/icon";

function HUIButton(props) {
	return (
		<button
			className={"hUIButton " + props.event + "Button" + props.type}
			style={{ color: props.color }}
		>
			{props.text}
			<Icon icon={props.icon} color={props.color} className="icon"></Icon>
		</button>
	);
}

export default HUIButton;
