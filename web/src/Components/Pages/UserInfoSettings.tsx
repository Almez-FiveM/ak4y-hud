import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateSelectedUserInfo } from '../../Store/store';
import InfoList from '../../Constants/InfoList';
import InfoItem from '../Settings/InfoItem';

const UserInfoSettings = () => {
  const dispatch = useDispatch();
  const handleUpdate = (index: number): void => {
    dispatch(updateSelectedUserInfo(index));
  };

  return (
    <Grid
      w={'100%'}
      h={'100%'}
      gridTemplateColumns={'repeat(4, 1fr)'}
      rowGap={'0'}
      columnGap={'2'}
    >
      {Object.values(InfoList).map((status, index) => {
        return (
          <InfoItem
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
          </InfoItem>
        );
      })}
    </Grid>
  );
};

export default UserInfoSettings;