import StatusV1 from "../Components/Status/StatusV1";
import StatusV10 from "../Components/Status/StatusV10";
import StatusV2 from "../Components/Status/StatusV2";
import StatusV3 from "../Components/Status/StatusV3";
import StatusV4 from "../Components/Status/StatusV4";
import StatusV5 from "../Components/Status/StatusV5";
import StatusV6 from "../Components/Status/StatusV6";
import StatusV7 from "../Components/Status/StatusV7";
import StatusV8 from "../Components/Status/StatusV8";
import StatusV9 from "../Components/Status/StatusV9";

import v1 from "../Assets/huds/v1.png";
import v2 from "../Assets/huds/v2.png";
import v3 from "../Assets/huds/v3.png";
import v4 from "../Assets/huds/v4.png";
import v5 from "../Assets/huds/v5.png";
import v6 from "../Assets/huds/v6.png";
import v7 from "../Assets/huds/v7.png";
import v8 from "../Assets/huds/v8.png";
import v9 from "../Assets/huds/v9.png";
import v10 from "../Assets/huds/v10.png";

const StatusList: { [key: number]: { label: string; desc: string; page: () => JSX.Element; image?: string } } = {
  0 : {
    label: 'STATUS V1',
    desc: 'STATUS DESCRIPTION',
    page: StatusV1,
    image: v1,
  },
  1 : {
    label: 'STATUS V2',
    desc: 'STATUS DESCRIPTION',
    page: StatusV2,
    image: v2,
  },
  2 : {
    label: 'STATUS V3',
    desc: 'STATUS DESCRIPTION',
    page: StatusV3,
    image: v3,
  },
  3 : {
    label: 'STATUS V4',
    desc: 'STATUS DESCRIPTION',
    page: StatusV4,
    image: v4,
  },
  4 : {
    label: 'STATUS V5',
    desc: 'STATUS DESCRIPTION',
    page: StatusV5,
    image: v5,
  },
  5 : {
    label: 'STATUS V6',
    desc: 'STATUS DESCRIPTION',
    page: StatusV6,
    image: v6,
  },
  6 : {
    label: 'STATUS V7',
    desc: 'STATUS DESCRIPTION',
    page: StatusV7,
    image: v7,
  },
  7 : {
    label: 'STATUS V8',
    desc: 'STATUS DESCRIPTION',
    page: StatusV8,
    image: v8,
  },
  8 : {
    label: 'STATUS V9',
    desc: 'STATUS DESCRIPTION',
    page: StatusV9,
    image: v9,
  },
  9 : {
    label: 'STATUS V10',
    desc: 'STATUS DESCRIPTION',
    page: StatusV10,
    image: v10,
  },
}



export default StatusList;
