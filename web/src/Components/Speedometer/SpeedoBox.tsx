import React from 'react';
import { selectSpeedometer } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import SpeedoList from '../../Constants/SpeedoList';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { BikeSpeedo } from './BikeSpeedo';
import { PlaneSpeedo } from './PlaneSpeedo';
import { BoatSpeedo } from './BoatSpeedo';
import { updateSpeedometerData } from '../../Store/store';
const SpeedoBox = () => {
  const speedo = useSelector(selectSpeedometer);
  const dispatch = useDispatch();
  
  useNuiEvent('updateSpeedometer', (data: any) => {
    for (const key in data) {
      // console.log(key, data[key]);
      dispatch(updateSpeedometerData(key, data[key]));
    }
  });

  return (
    <>
      <Flex
        position={'absolute'}
        bottom={0}
        right={0}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
      >
        {speedo.speedometerVisible && (
          <>
            {speedo.vehType === 'car' && (
              <Box
                as={SpeedoList[speedo.selectedSpeedometer].page}
              ></Box>
            )}
            {speedo.vehType === 'bike' && (
              <Box
                as={BikeSpeedo}
              ></Box>
            )}
            {speedo.vehType === 'plane' && (
              <Box
                as={PlaneSpeedo}
              ></Box>
            )}
            {speedo.vehType === 'boat' && (
              <Box
                as={BoatSpeedo}
              ></Box>
            )}
          </>
        )}
      </Flex>

    </>
  );
};

export default SpeedoBox;