import SpeedoV1 from "../Components/Speedometer/SpeedoV1";
const SpeedoList: { [key: number]: { label: string; desc: string; page: () => JSX.Element } } = {
  0 : {
    label: 'SPEEDO V1',
    desc: 'SPEEDO DESCRIPTION',
    page: SpeedoV1,
  },
}

export default SpeedoList;