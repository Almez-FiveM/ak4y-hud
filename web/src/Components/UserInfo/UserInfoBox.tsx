import React from 'react';
import { selectUserInfoSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import InfoList from '../../Constants/InfoList';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { updateUserInfo } from '../../Store/store';
import { useDispatch } from 'react-redux';
const UserInfoBox = () => {
  const userInfo = useSelector(selectUserInfoSettings);
  const dispatch = useDispatch();
  // updateInfo
  useNuiEvent('updateInfo', (data: any) => {
    dispatch(updateUserInfo(data));
  });
  
  return (
    <>
      <Flex
        position={'absolute'}
        top={'3vh'}
        right={'1vw'}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
        width={'20vw'}
        height={'40vh'}
        minHeight={'5vh'}
      >
        <Box
          as={InfoList[userInfo.selectedUserInfo].page}
        />
      </Flex>
    </>
  );
};

export default UserInfoBox;

