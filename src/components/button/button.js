import "./button.css";
import Icon from "./../icon/icon";

function HUIButton(props) {
	return (
		<button className="hUIButton">
			{props.text}
			<Icon icon={props.icon} color="#ecf016"></Icon>
		</button>
	);
}

export default HUIButton;
