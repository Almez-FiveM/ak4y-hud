import InfoV1 from "../Components/UserInfo/InfoV1";
import InfoV2 from "../Components/UserInfo/InfoV2";
const InfoList: { [key: number]: { label: string; desc: string; image: string; page: () => JSX.Element } } = {
  0 : {
    label: 'INFO V1',
    desc: 'INFO DESCRIPTION',
    image: 'https://files.catbox.moe/i8e1up.png',
    page: InfoV1,
  },
  1 : {
    label: 'INFO V2',
    desc: 'INFO DESCRIPTION',
    image: 'https://files.catbox.moe/drba5r.png',
    page: InfoV2,
  },

}



export default InfoList;
