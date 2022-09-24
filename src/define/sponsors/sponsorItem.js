import getImageByKey from "./sponsorImages";

function SponsorItem(props) {
	return (
		<a href={props.URL} target="blank" className="sponsorItemLink">
			<img
				className={
					"sponsorItem sponsorItem" +
					props.type[0].toUpperCase() +
					props.type.slice(1, props.type.length)
				}
				src={getImageByKey(props.imageKey)}
			/>
		</a>
	);
}

export default SponsorItem;
