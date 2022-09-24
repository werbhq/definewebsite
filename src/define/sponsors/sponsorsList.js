import DefineSeperator from "../../components/seperator/seperator";
import SponsorItem from "./sponsorItem";

var data = [
	{ imageKey: "Wolfram", URL: "https://www.wolfram.com/", type: "gold" },
	{ imageKey: "GitHub", URL: "https://www.github.xom", type: "silver" },
	{ imageKey: "FOSS", URL: "https://www.wolfram.com/", type: "silver" },
	{ imageKey: "Echo3D", URL: "https://www.wolfram.com/", type: "gold" },
	{ imageKey: "Voiceflow", URL: "https://www.wolfram.com/", type: "gold" },
];

var precedence = ["platinum", "gold", "silver"];

function DefineSponsorsList() {
	var listFull = [],
		tempList = [],
		count = 0,
		flag = false;
	for (var i in precedence) {
		flag = false;
		for (var j in data) {
			if (data[j].type == precedence[i]) {
				flag = true;
				tempList.push(
					<SponsorItem
						imageKey={data[j].imageKey}
						URL={data[j].URL}
						type={data[j].type}
					></SponsorItem>
				);
			}
		}
		if (flag) ++count;
		listFull.push(<div className="sponsorTier">{tempList}</div>);
		if (flag && i != precedence.length - 1)
			listFull.push(<DefineSeperator></DefineSeperator>);
		tempList = [];
	}

	return <div className="sponsorList">{listFull}</div>;
}

export default DefineSponsorsList;
