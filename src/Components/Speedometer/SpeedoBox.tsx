import React from 'react';
import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import SpeedoList from '../../Constants/SpeedoList';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { BikeSpeedo } from './BikeSpeedo';
import { PlaneSpeedo } from './PlaneSpeedo';
const SpeedoBox = () => {
  const speedo = useSelector(selectSpeedometer);

  
  useNuiEvent('updateSpeedometer', (data: any) => {
    
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
      </Flex>

    </>
  );
};

export default SpeedoBox;