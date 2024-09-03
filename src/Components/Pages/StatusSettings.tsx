import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SettingsItem from '../Settings/SettingsItem';
import StatusList from '../../Constants/StatusList';
import { updateSelectedStatus } from '../../Store/store';
import { useDispatch } from 'react-redux';
const StatusSettings = () => {
  const dispatch = useDispatch();
  const handleUpdate = (index: number): void => {
    dispatch(updateSelectedStatus(index));
  };
  return (
    <Flex
      w={'100%'}
      h={'100%'}
      gap={4}
    >
      {Object.values(StatusList).map((status, index) => {
        return (
          <SettingsItem
            key={index}
            index={index}
            click={(index) => handleUpdate(index)}
            style={
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
              }
            }
          >
            <Box
              style={
                {
                  zoom: 0.2,
                }
              }
              as={status.page}
            ></Box>
          </SettingsItem>
        );
      })}
    </Flex>
  );
};

export default StatusSettings;