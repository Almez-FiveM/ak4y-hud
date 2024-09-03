import StatusV1 from "../Components/Status/StatusV1";
import StatusV2 from "../Components/Status/StatusV2";
import StatusV3 from "../Components/Status/StatusV3";
import StatusV4 from "../Components/Status/StatusV4";

const StatusList: { [key: number]: { label: string; desc: string; page: () => JSX.Element } } = {
  [0] : {
    label: 'STATUS V1',
    desc: 'STATUS DESCRIPTION',
    page: StatusV1,
  },
  [1] : {
    label: 'STATUS V2',
    desc: 'STATUS DESCRIPTION',
    page: StatusV2,
  },
  [2] : {
    label: 'STATUS V3',
    desc: 'STATUS DESCRIPTION',
    page: StatusV3,
  },
  [3] : {
    label: 'STATUS V4',
    desc: 'STATUS DESCRIPTION',
    page: StatusV4,
  },
}

export default StatusList;