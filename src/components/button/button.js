import './button.css';
import Icon from './../icon/icon';

function HUIButton(props) {
    const color = props.color == undefined ? 'var(--blasphemous-black)' : props.color;
    return props.link === undefined ? (
        <button
            className={'hUIButton ' + props.event + 'Button ' + props.type + (props.variant !== undefined ? 'Var' + props.variant : '')}
            style={{ color: color, background: props.bgcolor }}
        >
            {props.text}
            <Icon icon={props.icon} color={color} className="icon"></Icon>
        </button>
    ) : (
        <a
            className={'hUIButton ' + props.event + 'Button ' + props.type + (props.variant !== undefined ? 'Var' + props.variant : '')}
            style={{
                color: color,
                background: props.bgcolor,
            }}
            href={props.link}
            target="_blank"
            rel="noreferrer"
        >
            {props.text}
            <Icon icon={props.icon} color={color} className="icon"></Icon>
        </a>
    );
}

export default HUIButton;
