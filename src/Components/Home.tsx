import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Background from '../Assets/bg.svg';
import Settings from './Settings';
const Home = () => {

  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
        w={'100vw'}
        h={'100vh'}
        bgImage={'url(' + Background + ')'}
        bgSize={'cover'}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        padding={'3.5vw'}
        zIndex={1}
        gap={8}
      >
        <Settings/>
      </Flex>
    </>
  );
};

export default Home;
