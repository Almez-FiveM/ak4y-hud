import { Box, Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import SpeedoItem from '../Settings/SpeedoItem';
import SpeedoList from '../../Constants/SpeedoList';
import { selectSpeedometer, updateSpeedometerData } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
const Speedometer = () => {
  const dispatch = useDispatch();
  const speedo = useSelector(selectSpeedometer);
  const handleUpdate = (index: number): void => {
    dispatch(updateSpeedometerData("selectedSpeedometer", index));
  };
  return (
    <Grid
      w={'100%'}
      h={'100%'}
      gridTemplateColumns={'repeat(3, 1fr)'}
      rowGap={'2'}
      columnGap={'2'}
    >
      {Object.values(SpeedoList).map((status, index) => {
        return (
          <SpeedoItem
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
          </SpeedoItem>
        );
      })}
    </Grid>
  );
};

export default Speedometer;