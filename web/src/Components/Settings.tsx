import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SettingsCfg from '../Constants/Settings';
import settings_bg from '../Assets/settings_bg.png';
import SettingsHeader from './Settings/SettingsHeader';
import { useDispatch } from 'react-redux';

const Settings = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        direction={'column'}
        w={'72.5%'}
        h={'75%'}
        bgImage={'url(' + settings_bg + ')'}
        bgSize={'cover'}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        zIndex={9999}
        borderRadius={'10px'}
        overflow={'hidden'}
      >
        <SettingsHeader onClick={(index) => setSelected(index)} selected={selected}/>

        <Flex className="settingsBody"
          w={'full'}
          h={'90%'}
          padding={'1vh 1vw'}
          overflow={'hidden'}
        >
          <Flex
            as={SettingsCfg[selected].page}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Settings;
