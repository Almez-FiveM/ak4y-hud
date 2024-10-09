import SpeedoV1 from "../Components/Speedometer/SpeedoV1";
import SpeedoV2 from "../Components/Speedometer/SpeedoV2";
import SpeedoV3 from "../Components/Speedometer/SpeedoV3";
import SpeedoV4 from "../Components/Speedometer/SpeedoV4";
import SpeedoV5 from "../Components/Speedometer/SpeedoV5";
import SpeedoV6 from "../Components/Speedometer/SpeedoV6";

import spev1 from "../Assets/huds/spev1.png";
import spev2 from "../Assets/huds/spev2.png";
import spev3 from "../Assets/huds/spev3.png";
import spev4 from "../Assets/huds/spev4.png";
import spev5 from "../Assets/huds/spev5.png";
import spev6 from "../Assets/huds/spev6.png";

const SpeedoList: { [key: number]: { label: string; desc: string; page: () => JSX.Element, image?: string } } = {
  0 : {
    label: 'SPEEDO V1',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV1,
    image: spev1,
  },
  1 : {
    label: 'SPEEDO V2',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV2,
    image: spev2,
  },
  2 : {
    label: 'SPEEDO V3',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV3,
    image: spev3,
  },
  3: {
    label: 'SPEEDO V4',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV4,
    image: spev4,
  },
  4: {
    label: 'SPEEDO V5',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV5,
    image: spev5,
  },
  5: {
    label: 'SPEEDO V6',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV6,
    image: spev6,
  },
}

export default SpeedoList;