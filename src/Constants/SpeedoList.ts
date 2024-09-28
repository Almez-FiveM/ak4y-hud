import SpeedoV1 from "../Components/Speedometer/SpeedoV1";
import SpeedoV2 from "../Components/Speedometer/SpeedoV2";
import SpeedoV3 from "../Components/Speedometer/SpeedoV3";
import SpeedoV4 from "../Components/Speedometer/SpeedoV4";
import SpeedoV5 from "../Components/Speedometer/SpeedoV5";
import SpeedoV6 from "../Components/Speedometer/SpeedoV6";
const SpeedoList: { [key: number]: { label: string; desc: string; page: () => JSX.Element } } = {
  0 : {
    label: 'SPEEDO V1',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV1,
  },
  1 : {
    label: 'SPEEDO V2',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV2,
  },
  2 : {
    label: 'SPEEDO V3',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV3,
  },
  3: {
    label: 'SPEEDO V4',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV4,
  },
  4: {
    label: 'SPEEDO V5',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV5,
  },
  5: {
    label: 'SPEEDO V6',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV6,
  },
}

export default SpeedoList;