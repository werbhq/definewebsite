import DefineSeperator from '../../components/seperator/seperator';
import SponsorItem from './sponsorItem';

var data = [
    { imageKey: 'Wolfram', imagePath: 'Wolfram.svg', URL: 'https://www.wolfram.com/', type: 'gold' },
    { imageKey: 'GitHub', imagePath: 'GitHub.svg', URL: 'https://www.github.com', type: 'gold' },
    { imageKey: 'Echo3D', imagePath: 'echo3D.png', URL: 'https://www.echo3d.co/', type: 'gold' },
    { imageKey: 'Voiceflow', imagePath: 'voiceflow.png', URL: 'https://www.voiceflow.com/', type: 'gold' },
    { imageKey: 'FossUnited', imagePath: 'FOSSUnited.svg', URL: 'https://fossunited.org', type: 'silver' },
    { imageKey: 'ICFoss', URL: 'https://www.wolfram.com/', type: 'silver' },
    { imageKey: 'Testmail', URL: 'https://www.wolfram.com/', type: 'silver' },
    {
        imageKey: 'InterviewCake',
        URL: 'https://www.wolfram.com/',
        type: 'educational',
    },
    {
        imageKey: 'Hoverrobotics',
        URL: 'https://www.wolfram.com/',
        type: 'platinum',
    },
    {
        imageKey: 'Werb',
        URL: 'https://attendoindia.netlify.app/',
        type: 'technical',
    },
];

var precedenceOrder = ['platinum', 'gold', 'silver', 'educational', 'technical'];

function DefineSponsorsList() {
    var listFull = [];

    for (const i in precedenceOrder) {
        const tempList = [];

        for (const e of data) {
            if (e.type === precedenceOrder[i]) {
                if (e.imagePath !== undefined) tempList.push(<SponsorItem {...e}></SponsorItem>);
            }
        }

        if (tempList.length !== 0) {
            listFull.push(<div className="sponsorTier">{tempList}</div>);
            listFull.push(<DefineSeperator></DefineSeperator>);
        }
    }

    listFull.pop();

    return <div className="sponsorList">{listFull}</div>;
}

export default DefineSponsorsList;
