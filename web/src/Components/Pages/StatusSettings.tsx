import { Box, Flex, Grid } from '@chakra-ui/react';
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
    <Grid
      w={'100%'}
      h={'100%'}
      gridTemplateColumns={'repeat(5, 1fr)'}
      rowGap={'0'}
      columnGap={'2'}
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
              as={status.page}
            ></Box>
          </SettingsItem>
        );
      })}
    </Grid>
  );
};

export default StatusSettings;