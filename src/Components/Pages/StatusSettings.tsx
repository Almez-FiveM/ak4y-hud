import { Flex } from '@chakra-ui/react';
import React from 'react';
import SettingsItem from '../Settings/SettingsItem';

const StatusSettings = () => {
  return (
    <Flex
    w={'100%'}
    h={'100%'}
    gap={4}
  >
    <SettingsItem
      index={1}
      style={
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }
      }
    >
      STATUS V1
    </SettingsItem>
    <SettingsItem
      index={2}
      style={
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }
      }
    >
      STATUS V2
    </SettingsItem>
  </Flex>
  );
};

export default StatusSettings;