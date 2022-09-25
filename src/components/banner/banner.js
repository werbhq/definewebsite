import './banner.css';

function Banner({ open, content, color, isDocked }) {
    return (
        <div className="bannerContainer">
            <div
                className={
                    'banner ' +
                    (open ? 'bannerOpen' : 'bannerClosed') +
                    (isDocked == true ? ' bannerDocked' : '') +
                    ' ' +
                    (color == undefined ? 'blue' : color) +
                    'BG'
                }
            >
                {content}
            </div>
        </div>
    );
}

export default Banner;
