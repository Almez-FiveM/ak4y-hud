import StatusSettings from "../Components/Pages/StatusSettings";
import GeneralSettings from "../Components/Pages/GeneralSettings";
import Speedometer from "../Components/Pages/Speedometer";
import UserInfoSettings from "../Components/Pages/UserInfoSettings";

const Settings: { [key: number]: { label: string; type: string; page: () => JSX.Element } } = {
  [0] : {
    label: 'STATUS SETTINGS',
    type: 'status-settings',
    page: StatusSettings,
  },
  [1] : {
    label: 'GENERAL SETTINGS',
    type: 'general-settings',
    page: GeneralSettings,
  },
  [2] : {
    label: 'SPEEDOMETER',
    type: 'speedometer',
    page: Speedometer,
  },
  [3] : {
    label: 'USER INFO SETTINGS',
    type: 'user-info-settings',
    page: UserInfoSettings,
  }
}

export default Settings;