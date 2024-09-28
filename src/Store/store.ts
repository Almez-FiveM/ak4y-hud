import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Icons from '../Constants/Icons';
const initialHudState = {
  selectedStatus: 8,
  microphone: {
    value: 66,
    color: '#FFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: false,
    icon: Icons.Microphone,
  },
  health: {
    value: 0,
    color: '#FF3333',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Heart,
  },
  armor: {
    value: 15,
    color: '#339DFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Shield,
  },
  hunger: {
    value: 30,
    color: '#FF7C33',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Hamburger,
  },
  thirst: {
    value: 45,
    color: '#50CAFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Droplet,
  },
  stamina: {
    value: 60,
    color: '#8133FF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Flash,
  },
  stress: {
    value: 100,
    color: '#df9a67',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Stress,
  },
};

const initialSpeedometerState = {
  selectedSpeedometer: 4,
  speedometerVisible: true,
  speed: 180,
  speedometerType: 'KMH',
  speedometerColor: '#5ACBE3',
  fuel: 50,
  fuelColor: '#FFD850',
  fuelIcon: Icons.GasPump,
  nitrous: 50,
  nitrousColor: '#E35ABD',
  nitrousIcon: Icons.Flash,
  seatbelt: true,
  doors: false,
  lights: 0, // 0: off, 1: low beam, 2: high beam
  engine: false,
  vehType: "boat" as VehicleType,
};

// CarTypes
type VehicleType = "car" | "bike" | "plane" | "boat";

const initialGeneralSettingsState = {
  showSettingsMenu: false,
  showLocation: true,
  showMinimap: true,
  hideEverything: false,
  editMode: false,
  cinematicMode: false,
  showMicrophone: true,
  showPercentageInStatus: true,
  mapLocationEditMode: false,
};

const initialUserInfoSettingsState = {
  selectedUserInfo: 1,
  onlineCount: 34,
  id: 940,
  cash: 100000,
  bank: 500000,
  job: 'Unemployed',
  weapon: 'weapon_shotgun',
  weaponLabel: 'Shotgun UR1',
  ammoCount: 10,
  ammoMax: 400,
};

const initialConfigState = {
  serverLogo: 'https://files.catbox.moe/406f5v.png',
  inventoryImagePath: 'https://cfx-nui-ox_inventory/images/',
}

// Define the reducer functions
const hudReducer = (state = initialHudState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_STATUS':
      return {
        ...state,
        selectedStatus: action.payload,
      };
    case 'UPDATE_HEALTH':
      return {
        ...state,
        health: {
          ...state.health,
          value: action.payload,
        },
      };
    case 'TOGGLE_HEALTH':
      return {
        ...state,
        health: {
          ...state.health,
          visible: !state.health.visible,
        },
      };
    case 'UPDATE_ARMOR':
      return {
        ...state,
        armor: {
          ...state.armor,
          value: action.payload,
        },
      };
    case 'TOGGLE_ARMOR':
      return {
        ...state,
        armor: {
          ...state.armor,
          visible: !state.armor.visible,
        },
      };
    case 'UPDATE_HUNGER':
      return {
        ...state,
        hunger: {
          ...state.hunger,
          value: action.payload,
        },
      };
    case 'TOGGLE_HUNGER':
      return {
        ...state,
        hunger: {
          ...state.hunger,
          visible: !state.hunger.visible,
        },
      };
    case 'UPDATE_THIRST':
      return {
        ...state,
        thirst: {
          ...state.thirst,
          value: action.payload,
        },
      };
    case 'TOGGLE_THIRST':
      return {
        ...state,
        thirst: {
          ...state.thirst,
          visible: !state.thirst.visible,
        },
      };
    case 'TOGGLE_MICROPHONE':
      return {
        ...state,
        microphone: {
          ...state.microphone,
          visible: !state.microphone.visible,
        },
      };
    case 'UPDATE_STAMINA':
      return {
        ...state,
        stamina: {
          ...state.stamina,
          value: action.payload,
        },
      };
    case 'TOGGLE_STAMINA':
      return {
        ...state,
        stamina: {
          ...state.stamina,
          visible: !state.stamina.visible,
        },
      };
    case 'UPDATE_STRESS':
      return {
        ...state,
        stress: {
          ...state.stress,
          value: action.payload,
        },
      };
    case 'TOGGLE_STRESS':
      return {
        ...state,
        stress: {
          ...state.stress,
          visible: !state.stress.visible,
        },
      };
    default:
      return state;
  }
};

// Define the reducer functions
const generalSettingsReducer = (state = initialGeneralSettingsState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_MENU':
      return {
        ...state,
        showSettingsMenu: action.payload,
      };
    case 'TOGGLE_LOCATION':
      return {
        ...state,
        showLocation: !state.showLocation,
      };

    case 'TOGGLE_CINEMATIC_MODE':
      return {
        ...state,
        cinematicMode: !state.cinematicMode,
      };

    case 'TOGGLE_MINIMAP':
      return {
        ...state,
        showMinimap: !state.showMinimap,
      };

    case 'TOGGLE_EDIT_MODE':
      return {
        ...state,
        editMode: !state.editMode,
      };

    case 'TOGGLE_HIDE_EVERYTHING':
      return {
        ...state,
        hideEverything: !state.hideEverything,
      };

    case 'TOGGLE_MICROPHONE':
      return {
        ...state,
        showMicrophone: !state.showMicrophone,
      };

    case 'TOGGLE_PERCENTAGE_IN_STATUS':
      return {
        ...state,
        showPercentageInStatus: !state.showPercentageInStatus,
      };

    case 'TOGGLE_MAP_LOCATION_EDIT_MODE':
      return {
        ...state,
        mapLocationEditMode: !state.mapLocationEditMode,
      };

    default:
      return state;
  }
};

// Define the reducer functions
const userInfoSettingsReducer = (state = initialUserInfoSettingsState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_USER_INFO':
      return {
        ...state,
        selectedUserInfo: action.payload,
      };
    
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Define the reducer functions
const speedometerReducer = (state = initialSpeedometerState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_SPEEDOMETER_DATA':
      return {
        ...state,
        [action.payload.dataToUpdate]: action.payload.value,
      };

    default:
      return state;
  }
};

const configReducer = (state = initialConfigState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_CONFIG_DATA':
      return {
        ...state,
        [action.payload.dataToUpdate]: action.payload.value,
      };
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  hud: hudReducer,
  speedometer: speedometerReducer,
  generalSettings: generalSettingsReducer,
  userInfoSettings: userInfoSettingsReducer,
  config: configReducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer
});

export default store;

export const selectHud = (state: { hud: any; }) => state.hud;
export const selectSpeedometer = (state: { speedometer: any; }) => state.speedometer;
export const selectGeneralSettings = (state: { generalSettings: any; }) => state.generalSettings;
export const selectUserInfoSettings = (state: { userInfoSettings: any; }) => state.userInfoSettings;
export const selectConfig = (state: { config: any; }) => state.config;

// Define the action creators
export const updateSelectedStatus = (status: number) => {
  return {
    type: 'UPDATE_SELECTED_STATUS',
    payload: status,
  };
}

export const updateHealth = (health: number) => {
  return {
    type: 'UPDATE_HEALTH',
    payload: health,
  };
};

export const updateArmor = (armor: number) => {
  return {
    type: 'UPDATE_ARMOR',
    payload: armor,
  };
};

export const updateHunger = (hunger: number) => {
  return {
    type: 'UPDATE_HUNGER',
    payload: hunger,
  };
};

export const updateThirst = (thirst: number) => {
  return {
    type: 'UPDATE_THIRST',
    payload: thirst,
  };
};

export const updateStamina = (stamina: number) => {
  return {
    type: 'UPDATE_STAMINA',
    payload: stamina,
  };
};

export const updateStress = (stress: number) => {
  return {
    type: 'UPDATE_STRESS',
    payload: stress,
  };
};

export const toggleHealth = () => {
  return {
    type: 'TOGGLE_HEALTH',
  };
};

export const toggleArmor = () => {
  return {
    type: 'TOGGLE_ARMOR',
  };
};

export const toggleHunger = () => {
  return {
    type: 'TOGGLE_HUNGER',
  };
};

export const toggleThirst = () => {
  return {
    type: 'TOGGLE_THIRST',
  };
};

export const toggleStamina = () => {
  return {
    type: 'TOGGLE_STAMINA',
  };
};

export const toggleStress = () => {
  return {
    type: 'TOGGLE_STRESS',
  };
};

export const toggleSettingsMenu = (bool: boolean) => {
  return {
    type: 'TOGGLE_SETTINGS_MENU',
    payload: bool,
  };
};

export const toggleLocation = () => {
  return {
    type: 'TOGGLE_LOCATION',
  };
};

export const toggleCinematicMode = () => {
  return {
    type: 'TOGGLE_CINEMATIC_MODE',
  };
};

export const toggleMinimap = () => {
  return {
    type: 'TOGGLE_MINIMAP',
  };
};

export const toggleEditMode = () => {
  return {
    type: 'TOGGLE_EDIT_MODE',
  };
};

export const toggleHideEverything = () => {
  return {
    type: 'TOGGLE_HIDE_EVERYTHING',
  };
};

export const toggleMicrophone = () => {
  return {
    type: 'TOGGLE_MICROPHONE',
  };
};

export const togglePercentageInStatus = () => {
  return {
    type: 'TOGGLE_PERCENTAGE_IN_STATUS',
  };
};

export const toggleMapLocationEditMode = () => {
  return {
    type: 'TOGGLE_MAP_LOCATION_EDIT_MODE',
  };
};

export const updateSpeedometerData = (dataToUpdate: any, value: any) => {
  return {
    type: 'UPDATE_SPEEDOMETER_DATA',
    payload: {
      dataToUpdate,
      value,
    },
  };
};

export const updateUserInfo = (userInfo: number) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload: userInfo,
  };
};

export const updateSelectedUserInfo = (userInfo: number) => {
  return {
    type: 'UPDATE_SELECTED_USER_INFO',
    payload: userInfo,
  };
};

export const updateConfigData = (dataToUpdate: any, value: any) => {
  return {
    type: 'UPDATE_CONFIG_DATA',
    payload: {
      dataToUpdate,
      value,
    },
  };
}