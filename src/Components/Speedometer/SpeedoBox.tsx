import React from 'react';
import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import SpeedoList from '../../Constants/SpeedoList';

const SpeedoBox = () => {
  const speedo = useSelector(selectSpeedometer);
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
        <Box
          as={SpeedoList[speedo.selectedSpeedometer].page}
        ></Box>
      </Flex>

    </>
  );
};

export default SpeedoBox;