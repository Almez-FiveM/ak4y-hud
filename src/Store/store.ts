import { Hide } from '@chakra-ui/react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const initialHudState = {
  selectedStatus: 1,
  health: {
    value: 100,
    color: 'red',
    visible: true,
    hideBelow: 80,
  },
  armor: {
    value: 100,
    color: 'blue',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
  },
  hunger: {
    value: 100,
    color: 'orange',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
  },
  thirst: {
    value: 100,
    color: 'aqua',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
  },
  stamina: {
    value: 100,
    color: 'purple',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
  },
  stress: {
    value: 100,
    color: 'brown',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
  },
};

const initialGeneralSettingsState = {
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