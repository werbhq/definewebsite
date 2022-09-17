import "./button.css";
import Icon from "./../icon/icon";

function HUIButton(props) {
	return (
		<button className={"hUIButton " + props.event + "Button"}>
			{props.text}
			<Icon icon={props.icon} color={props.color}></Icon>
		</button>
	);
}

export default HUIButton;
