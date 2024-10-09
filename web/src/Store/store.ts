import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { fetchNui } from '../Helpers/fetchNui';

const initialHudState = {
  selectedStatus: 0,
  microphone: {
    value: 10,
    color: '#FFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: false,
    icon: "Microphone",
    translateX: 0,
    translateY: 0,
  },
  health: {
    value: 20,
    color: '#FF3333',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Heart",
    translateX: 0,
    translateY: 0,
  },
  armor: {
    value: 40,
    color: '#339DFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Shield",
    translateX: 0,
    translateY: 0,
  },
  hunger: {
    value: 60,
    color: '#FF7C33',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Hamburger",
    translateX: 0,
    translateY: 0,
  },
  thirst: {
    value: 80,
    color: '#50CAFF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Droplet",
    translateX: 0,
    translateY: 0,
  },
  stamina: {
    value: 95,
    color: '#8133FF',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Flash",
    translateX: 0,
    translateY: 0,
  },
  stress: {
    value: 100,
    color: '#df9a67',
    visible: true,
    hideBelow: 80,
    useHideBelow: true,
    icon: "Stress",
    translateX: 0,
    translateY: 0,
  },
};

const initialSpeedometerState = {
  selectedSpeedometer: 4,
  speedometerVisible: true,
  speed: 160,
  speedometerType: 'KMH',
  speedometerColor: '#5ACBE3',
  fuel: 75,
  fuelColor: '#FFD850',
  fuelIcon: "GasPump",
  nitrous: 75,
  nitrousColor: '#E35ABD',
  nitrousIcon: "Flash",
  seatbelt: false,
  doors: false,
  lights: 0, // 0: off, 1: low beam, 2: high beam
  engine: false,
  vehType: "car" as VehicleType,
  translateX: 0,
  translateY: 0,
  gear: 'N',
};

// CarTypes
type VehicleType = "car" | "bike" | "plane" | "boat";

const initialGeneralSettingsState = {
  showSettingsMenu: false,
  showLocation: true,
  showMinimap: 0,
  hideEverything: false,
  editMode: false,
  cinematicMode: false,
  showMicrophone: true,
  showPercentageInStatus: true,
  mapLocationEditMode: false,
};

const initialUserInfoSettingsState = {
  selectedUserInfo: 0,
  onlineCount: 34,
  id: 940,
  cash: 100000,
  bank: 500000,
  job: 'Unemployed',
  weapon: 'weapon_shotgun',
  weaponLabel: 'Shotgun UR1',
  ammoCount: 10,
  ammoMax: 400,
  time: '12:00',
  translateX: 0,
  translateY: 0,
};

const initialMenuState = {
  selectedMenu: 1,
  streetName: 'Innocence Blvd',
  nightMode: false,
  time: '12:00',
  gameURL: '',
  media: {
    queuedSongs: [],
    currentSong: {
      songName: 'NO MEDIA',
      artist: 'Artist',
      duration: 0,
      currentTime: 0,
    },
    thumbnail: 'https://files.catbox.moe/i5bfz3.png',
    currentURL: '',
    playing: true,
    volume: 100,
  },
  vehicleDoors: {
    0: true,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  },
  neons: {
    0: true,
    1: true,
    2: false,
    3: false,
  }
}

const initialConfigState = {
  serverLogo: 'https://files.catbox.moe/406f5v.png',
  inventoryImagePath: 'nui://ox_inventory/web/images/',
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
          value: Math.floor(action.payload),
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
          value: Math.floor(action.payload),
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
          value: Math.floor(action.payload),
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
          value: Math.floor(action.payload),
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
          value: Math.floor(action.payload),
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
          value: Math.floor(action.payload),
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
    case 'UPDATE_HEALTH_DATA':
      return {
        ...state,
        health: {
          ...state.health,
          ...action.payload,
        },
      };
    case 'UPDATE_ARMOR_DATA':
      return {
        ...state,
        armor: {
          ...state.armor,
          ...action.payload,
        },
      };
    case 'UPDATE_HUNGER_DATA':
      return {
        ...state,
        hunger: {
          ...state.hunger,
          ...action.payload,
        },
      };
    case 'UPDATE_THIRST_DATA':
      return {
        ...state,
        thirst: {
          ...state.thirst,
          ...action.payload,
        },
      };
    case 'UPDATE_STAMINA_DATA':
      return {
        ...state,
        stamina: {

          ...action.payload,
        },
      };
    case 'UPDATE_STRESS_DATA':
      return {
        ...state,
        stress: {
          ...state.stress,
          ...action.payload,
        },
      };
    case 'UPDATE_MICROPHONE_DATA':
      return {
        ...state,
        microphone: {
          ...state.microphone,
          ...action.payload,
        },
      };
    case 'UPDATE_HEALTH_COORDINATES':
      return {
        ...state,
        health: {
          ...state.health,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
        },
      };
    case 'UPDATE_ARMOR_COORDINATES':
      return {
        ...state,
        armor: {
          ...state.armor,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
        },
      };
    case 'UPDATE_HUNGER_COORDINATES':
      return {
        ...state,
        hunger: {
          ...state.hunger,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
        },
      };
    case 'UPDATE_THIRST_COORDINATES':
      return {
        ...state,
        thirst: {
          ...state.thirst,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
        },
      };
    case 'UPDATE_STAMINA_COORDINATES':
      return {
        ...state,
        stamina: {
          ...state.stamina,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
        },
      };
    case 'UPDATE_STRESS_COORDINATES':
      return {
        ...state,
        stress: {
          ...state.stress,
          translateX: action.payload.translateX,
          translateY: action.payload.translateY,
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
      fetchNui('toggleMinimap', {
        showMinimap: action.payload,
      });
      return {
        ...state,
        showMinimap: action.payload,
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
      fetchNui('setMinimapEditMode', !state.mapLocationEditMode);
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

const menuReducer = (state = initialMenuState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'UPDATE_MENU_DATA':
      return {
        ...state,
        [action.payload.dataToUpdate]: action.payload.value,
      };
    case 'ADD_SONG':
      return {
        ...state,
        media: {
          ...state.media,
          queuedSongs: [
            ...state.media.queuedSongs,
            action.payload,
          ],
        },
      };
    case 'REMOVE_SONG_FROM_QUEUE': 
      // payload is index  
      const newQueue = [...state.media.queuedSongs];
      newQueue.splice(action.payload, 1);
      return {
        ...state,
        media: {
          ...state.media,
          queuedSongs: newQueue,
        },
      };
    case 'REORDER_SONGS':
      return {
        ...state,
        media: {
          ...state.media,
          queuedSongs: action.payload,
        },
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
  menu: menuReducer,
});

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


const persistor = persistStore(store);

export const purgeStore = () => {
  console.log('Purging store');
  persistor.purge();
};

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

export const selectHud = (state: { hud: any; }) => state.hud;
export const selectSpeedometer = (state: { speedometer: any; }) => state.speedometer;
export const selectGeneralSettings = (state: { generalSettings: any; }) => state.generalSettings;
export const selectUserInfoSettings = (state: { userInfoSettings: any; }) => state.userInfoSettings;
export const selectConfig = (state: { config: any; }) => state.config;
export const selectMenu = (state: { menu: any; }) => state.menu;

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

export const updateHudData = (dataToUpdate: any, value: any) => {
  return {
    type: 'UPDATE_HUD_DATA',
    payload: {
      dataToUpdate,
      value,
    },
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

export const toggleMinimap = (num: number) => {
  return {
    type: 'TOGGLE_MINIMAP',
    payload: num,
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

export const updateMenuData = (dataToUpdate: any, value: any) => {
  return {
    type: 'UPDATE_MENU_DATA',
    payload: {
      dataToUpdate,
      value,
    },
  };
}

purgeStore();