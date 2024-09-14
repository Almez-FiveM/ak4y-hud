import StatusV1 from "../Components/Status/StatusV1";
import StatusV2 from "../Components/Status/StatusV2";
import StatusV3 from "../Components/Status/StatusV3";
import StatusV4 from "../Components/Status/StatusV4";
import StatusV5 from "../Components/Status/StatusV5";
import StatusV6 from "../Components/Status/StatusV6";
import StatusV7 from "../Components/Status/StatusV7";
import StatusV8 from "../Components/Status/StatusV8";

const StatusList: { [key: number]: { label: string; desc: string; page: () => JSX.Element } } = {
  0 : {
    label: 'STATUS V1',
    desc: 'STATUS DESCRIPTION',
    page: StatusV1,
  },
  1 : {
    label: 'STATUS V2',
    desc: 'STATUS DESCRIPTION',
    page: StatusV2,
  },
  2 : {
    label: 'STATUS V3',
    desc: 'STATUS DESCRIPTION',
    page: StatusV3,
  },
  3 : {
    label: 'STATUS V4',
    desc: 'STATUS DESCRIPTION',
    page: StatusV4,
  },
  4 : {
    label: 'STATUS V5',
    desc: 'STATUS DESCRIPTION',
    page: StatusV5,
  },
  5 : {
    label: 'STATUS V6',
    desc: 'STATUS DESCRIPTION',
    page: StatusV6,
  },
  6 : {
    label: 'STATUS V7',
    desc: 'STATUS DESCRIPTION',
    page: StatusV7,
  },
  7 : {
    label: 'STATUS V8',
    desc: 'STATUS DESCRIPTION',
    page: StatusV8,
  },
}



export default StatusList;
