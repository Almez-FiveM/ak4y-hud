import { Flex } from '@chakra-ui/react';
import { selectGeneralSettings } from '../Store/store';
import Background from '../Assets/bg.svg';
import Settings from './Settings';
import { useDispatch, useSelector } from 'react-redux';
import StatusBox from './Status/StatusBox';
import SpeedoBox from './Speedometer/SpeedoBox';
import { toggleSettingsMenu } from '../Store/store';

const Home = () => {
  const generalSettings = useSelector(selectGeneralSettings);

  const dispatch = useDispatch();
  
  const handleSettingsMenu = () => {
    dispatch(toggleSettingsMenu());
  };
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
        bgImage={'url(' + Background + ')'}
        bgSize={'cover'}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        padding={'3.5vw'}
        zIndex={1}
        gap={8}
      >
        {generalSettings.showSettingsMenu && (
          <Settings/>
        )}
        <StatusBox/>
        <SpeedoBox/>
      </Flex>
    </>
  );
};

export default Home;
