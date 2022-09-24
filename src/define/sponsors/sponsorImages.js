import Wolfram from "./../../assets/images/sponsors/Wolfram.svg";
import GitHub from "./../../assets/images/sponsors/GitHub.svg";
import Echo3D from "./../../assets/images/sponsors/echo3D.png";
import Voiceflow from "./../../assets/images/sponsors/voiceflow.png";
import GitHubStudentDev from "./../../assets/images/sponsors/GitHubStudentDev.png";

const images = {
	Wolfram,
	GitHub,
	Echo3D,
	Voiceflow,
	GitHubStudentDev,
};

function getImageByKey(key) {
	return images[key];
}

export default getImageByKey;
