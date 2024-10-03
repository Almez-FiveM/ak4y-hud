import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import { updateMenuData, selectMenu } from '../../Store/store';
import { useDispatch } from 'react-redux';
import Icons from '../../Constants/Icons';

const GamesFrame = () => {
  const menu = useSelector(selectMenu);
  const game = menu.gameURL;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(updateMenuData('gameURL', ''));
  };

  return (
    <>
      {game !== '' && (
        <Flex
          pos={'absolute'}
          width={'65vw'}
          height={'65vh'}
          align={'center'}
          justify={'center'}
          bg={'#171717'}
          borderRadius={'10px'}
          // center the frame
          left={'20vw'}
          top={'-10vh'}
          zIndex={999}
          px={4}
          py={8}
          pb={4}
        >
          <Box pos={'absolute'} right={4} top={2} cursor={'pointer'} onClick={handleClose}>
            <Icons.Close/>
          </Box>
          <iframe src={game} width={'100%'} height={'100%'}></iframe>
        </Flex>
      )}
    </>
  );
};

export default GamesFrame;