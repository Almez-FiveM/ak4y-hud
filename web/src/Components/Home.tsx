import { Flex } from '@chakra-ui/react';
import { selectGeneralSettings, selectHud, updateConfigData, updateMenuData } from '../Store/store';
import Background from '../Assets/bg.svg';
import Settings from './Settings';
import { useDispatch, useSelector } from 'react-redux';
import StatusBox from './Status/StatusBox';
import SpeedoBox from './Speedometer/SpeedoBox';
import { toggleSettingsMenu } from '../Store/store';
import UserInfoBox from './UserInfo/UserInfoBox';
import { useNuiEvent } from '../Hooks/useNuiEvent';
import EditMode from './Pages/EditMode';
import MenuBox from './Menu/MenuBox';
import Youtube from './Menu/Youtube';
import { useEffect } from 'react';

const Home = () => {
  const generalSettings = useSelector(selectGeneralSettings);
  const hud = useSelector(selectHud);
  const dispatch = useDispatch();

  const handleSettingsMenu = () => {
    dispatch(toggleSettingsMenu(!generalSettings.showSettingsMenu));
  };

  useNuiEvent('toggleSettings', (data: boolean) => {
    dispatch(toggleSettingsMenu(data));
  });

  useNuiEvent('updateMenuData', (data: any) => {
    for (let key in data) {
      dispatch(updateMenuData(key, data[key]));
    }
  });

  useNuiEvent('updateConfigData', (data: any) => {
    dispatch(updateConfigData(data.key, data.value));
  });

  useNuiEvent('updateMicrophone', (data: any) => {
    if (data.talkState !== null) {
      dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'value', value: (data.talkState * 33) } });
    }
    if (data.talking !== null) {
      dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'talking', value: data.talking } });
      if (data.talking) {
        dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'color', value: '#F6C358' } });
      } else {
        dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'color', value: '#fff' } });
      }
    }
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'value', value: 33 } });
    dispatch({ type: 'UPDATE_MICROPHONE_DATA', payload: { dataToUpdate: 'talking', value: true } });
    
  }, []);

  return (
    <>
      <Flex
        pos={'absolute'}
        top={0}
        left={0}
        w={'100vw'}
        h={'auto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'.5vw'}
      >
        <Flex
          w={'auto'}
          h={'auto'}
          padding={'1vh 1vw'}
          bg={'rgba(255, 255, 255, 0.1)'}
          borderRadius={'5px'}
          color={'white'}
          fontSize={'.8vw'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          cursor={'pointer'}
          onClick={() => {
            handleSettingsMenu();
          }}
        >
          Open settings menu
        </Flex>
      </Flex>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
        w={'100vw'}
        h={'100vh'}
        padding={'3.5vw'}
        zIndex={1}
        gap={8}
      >

        {generalSettings.editMode && (
          <EditMode />
        )}
        <Flex
          {...(generalSettings.editMode ? { opacity: 0.5 } : {})}
          width={'100%'}
          height={'100%'}
          justify={'center'}
          align={'center'}
        >
          {generalSettings.showSettingsMenu && (
            <Settings />
          )}
          {generalSettings.cinematicMode && (
            <Flex pos={'absolute'} justify={'space-between'} flexDir={'column'} width={'100%'} height={'100%'}>
              <Flex width={'100%'} zIndex={999} height={'15vh'} bg={'#000'} />
              <Flex width={'100%'} zIndex={999} height={'15vh'} bg={'#000'} />
            </Flex>
          )}
          {!generalSettings.cinematicMode && (
            <>
              {!generalSettings.showSettingsMenu && (
                <SpeedoBox />
              )}
              {!generalSettings.hideEverything && (
                <>
                  <StatusBox />
                  <UserInfoBox />
                </>
              )}
            </>
          )}
          <MenuBox/>
        </Flex>
      </Flex>
      <Youtube/>
    </>
  );
};

export default Home;