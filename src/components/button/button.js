import './button.css';
import Icon from './../icon/icon';

function HUIButton(props) {
    return props.link == undefined ? (
        <button
            className={'hUIButton ' + props.event + 'Button ' + props.type + (props.variant != undefined ? 'Var' + props.variant : '')}
            style={{ color: props.color, background: props.bgcolor }}
        >
            {props.text}
            <Icon icon={props.icon} color={props.color} className="icon"></Icon>
        </button>
    ) : (
        <a
            className={'hUIButton ' + props.event + 'Button ' + props.type + (props.variant != undefined ? 'Var' + props.variant : '')}
            style={{
                color: props.color,
                background: props.bgcolor,
            }}
            href={props.link}
            target="_blank"
        >
            {props.text}
            <Icon icon={props.icon} color={props.color} className="icon"></Icon>
        </a>
    );
}

export default HUIButton;
