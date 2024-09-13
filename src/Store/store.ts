import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Icons from '../Constants/Icons';
const initialHudState = {
  selectedStatus: 7,
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
    value: 10,
    color: '#339DFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Shield,
  },
  hunger: {
    value: 25,
    color: '#FF7C33',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Hamburger,
  },
  thirst: {
    value: 50,
    color: '#50CAFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: Icons.Droplet,
  },
  stamina: {
    value: 75,
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

const initialGeneralSettingsState = {
  showSettingsMenu: false,
  showLocation: true,
  cinematicMode: false,
  showMinimap: true,
  editMode: false,
  hideEverything: false,
  showMicrophone: true,
  showPercentageInStatus: true,
  mapLocationEditMode: false,
};

const initialSpeedometerSettingsState = {
  selectedSpeedometer: 1,
};

const initialUserInfoSettingsState = {
  selectedUserInfo: 1,
};


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

    case 'UPDATE_ARMOR':
      return {
        ...state,
        armor: {
          ...state.armor,
          value: action.payload,
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

    case 'UPDATE_THIRST':
      return {
        ...state,
        thirst: {
          ...state.thirst,
          value: action.payload,
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

    case 'UPDATE_STRESS':
      return {
        ...state,
        stress: {
          ...state.stress,
          value: action.payload,
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
        showSettingsMenu: !state.showSettingsMenu,
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
const speedometerSettingsReducer = (state = initialSpeedometerSettingsState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_SPEEDOMETER':
      return {
        ...state,
        selectedSpeedometer: action.payload,
      };

    default:
      return state;
  }
};

// Define the reducer functions
const userInfoSettingsReducer = (state = initialUserInfoSettingsState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        selectedUserInfo: action.payload,
      };

    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  hud: hudReducer,
  generalSettings: generalSettingsReducer,
  speedometerSettings: speedometerSettingsReducer,
  userInfoSettings: userInfoSettingsReducer,
});

// Create the store
const store = configureStore({
  reducer: rootReducer
});

export default store;

export const selectHud = (state: { hud: any; }) => state.hud;
export const selectGeneralSettings = (state: { generalSettings: any; }) => state.generalSettings;
export const selectSpeedometerSettings = (state: { speedometerSettings: any; }) => state.speedometerSettings;
export const selectUserInfoSettings = (state: { userInfoSettings: any; }) => state.userInfoSettings;


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

export const toggleSettingsMenu = () => {
  return {
    type: 'TOGGLE_SETTINGS_MENU',
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

export const updateSpeedometer = (speedometer: number) => {
  return {
    type: 'UPDATE_SPEEDOMETER',
    payload: speedometer,
  };
};

export const updateUserInfo = (userInfo: number) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload: userInfo,
  };
};