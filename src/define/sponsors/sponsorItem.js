function SponsorItem({ imagePath, URL, type }) {
    const image = require(`./../../assets/images/sponsors/${imagePath}`);
    return (
        <a href={URL} target="blank" className="sponsorItemLink">
            <img
                className={'sponsorItem sponsorItem' + type[0].toUpperCase() + type.slice(1, type.length)}
                src={image}
                alt={imagePath.replace(/\..*/, '')}
            />
        </a>
    );
}

export default SponsorItem;
