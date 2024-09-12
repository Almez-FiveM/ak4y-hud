import React from 'react';
import { selectHud } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import StatusList from '../../Constants/StatusList';
import MicrophoneStatus from './MicrophoneStatus';

const hudsWithoutMicrophone = [2, 3, 5]

const StatusBox = () => {
  const hud = useSelector(selectHud);
  return (
    <>
      <Flex
        position={'absolute'}
        bottom={0}
        left={0}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
      >
        <Box
          as={StatusList[hud.selectedStatus].page}
        ></Box>
      </Flex>

      {hudsWithoutMicrophone.includes(hud.selectedStatus) && <MicrophoneStatus></MicrophoneStatus>}
    </>
  );
};

export default StatusBox;