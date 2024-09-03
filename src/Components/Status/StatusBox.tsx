import React from 'react';
import { selectHud } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import StatusList from '../../Constants/StatusList';

const StatusBox = () => {
  const hud = useSelector(selectHud);
  console.log(hud.selectedStatus);
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={'row'}
    >
      <Box
        as={StatusList[hud.selectedStatus].page}
      ></Box>
    </Flex>
  );
};

export default StatusBox;