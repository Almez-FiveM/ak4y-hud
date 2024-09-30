import React from 'react';
import { selectGeneralSettings, selectSpeedometer } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import SpeedoList from '../../Constants/SpeedoList';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { BikeSpeedo } from './BikeSpeedo';
import { PlaneSpeedo } from './PlaneSpeedo';
import { BoatSpeedo } from './BoatSpeedo';
import { updateSpeedometerData } from '../../Store/store';
import Draggable from 'react-draggable';
const SpeedoBox = () => {
  const speedo = useSelector(selectSpeedometer);
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();

  useNuiEvent('updateSpeedometer', (data: any) => {
    for (const key in data) {
      dispatch(updateSpeedometerData(key, data[key]));
    }
  });
  console.log(speedo);
  const handleDragEnd = (data: any) => {
    console.log(data);
    dispatch(updateSpeedometerData('translateX', data.x));
    dispatch(updateSpeedometerData('translateY', data.y));
  };
  return (
    <>
      <Draggable 
        onStop={(e, data) => handleDragEnd(data)}
        defaultPosition={{ x: speedo.translateX, y: speedo.translateY }}
        handle='.speedohandle'
      >
        <Flex
          position={'absolute'}
          bottom={0}
          right={0}
          justifyContent={'space-between'}
          alignItems={'center'}
          direction={'row'}
        >
          <Box bg={'#fff'} width={'30px'} height={'30px'}
            // make it a rectangle
            borderRadius={'0'}
            clipPath={'polygon(0 0, 100% 0, 0% 100%, 0 100%)'}
            pos={'absolute'} top={0} left={0} className='speedohandle'
            zIndex={12312312}
            display={generalSettings.editMode ? 'block' : 'none'}
          ></Box>
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
      </Draggable>
    </>
  );
};

export default SpeedoBox;