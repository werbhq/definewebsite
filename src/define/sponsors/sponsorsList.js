import DefineSeperator from '../../components/seperator/seperator';
import SponsorItem from './sponsorItem';

var data = [
    { imageKey: 'Wolfram', imagePath: 'Wolfram.svg', URL: 'https://www.wolfram.com/', type: 'gold' },
    { imageKey: 'GitHub', imagePath: 'GitHub.svg', URL: 'https://www.github.com', type: 'gold' },
    { imageKey: 'ICFoss', imagePath: 'echo3D.png', URL: 'https://www.wolfram.com/', type: 'silver' },
    { imageKey: 'Echo3D', imagePath: 'echo3D.png', URL: 'https://www.wolfram.com/', type: 'gold' },
    { imageKey: 'Voiceflow', imagePath: 'voiceflow.png', URL: 'https://www.wolfram.com/', type: 'gold' },
    { imageKey: 'FossUnited', imagePath: 'echo3D.png', URL: 'https://www.wolfram.com/', type: 'silver' },
    { imageKey: 'Testmail', imagePath: 'echo3D.png', URL: 'https://www.wolfram.com/', type: 'silver' },
    {
        imageKey: 'GitHubStudentDev',
        URL: 'https://www.wolfram.com/',
        type: 'educational',
        imagePath: 'echo3D.png',
    },
    {
        imageKey: 'InterviewCake',
        URL: 'https://www.wolfram.com/',
        type: 'educational',
        imagePath: 'echo3D.png',
    },
    {
        imageKey: 'Hoverrobotics',
        URL: 'https://www.wolfram.com/',
        type: 'platinum',
        imagePath: 'echo3D.png',
    },
    {
        imageKey: 'Werb',
        URL: 'https://attendoindia.netlify.app/',
        type: 'technical',
        imagePath: 'echo3D.png',
    },
];

var precedenceOrder = ['platinum', 'gold', 'silver', 'educational', 'technical'];

function DefineSponsorsList() {
    const listFull = [];
    var tempList = [],
        count = 0,
        flag = false;

    for (const i in precedenceOrder) {
        flag = false;
        for (var j in data) {
            if (data[j].type === precedenceOrder[i]) {
                flag = true;
                tempList.push(<SponsorItem {...data[j]}></SponsorItem>);
            }
        }
        if (flag) ++count;
        listFull.push(<div className="sponsorTier">{tempList}</div>);
        if (flag && count !== precedenceOrder.length - 1) listFull.push(<DefineSeperator></DefineSeperator>);
        tempList = [];
    }

    return <div className="sponsorList">{listFull}</div>;
}

export default DefineSponsorsList;
