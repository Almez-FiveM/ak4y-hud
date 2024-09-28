import React from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';

interface MiniSettingsProps {
  toggle: () => void;
  title: string;
  desc: string;
  boolean: boolean;
  icon: React.ReactNode;
}

const MiniSettings: React.FC<MiniSettingsProps> = ({ toggle, title, desc, boolean, icon }) => {
  return (
    <Flex
      width={'100%'}
      height={'100%'}
      className="settings-item"
      bg={'#272223'}
      border={'1px solid  rgba(255, 255, 255, 0.15)'}
      position={'relative'}
      overflow={'hidden'}
      justify={'center'}
    >
      <Box
        pos={'absolute'}
        bottom={'0'}
        width={'75px'}
        height={'3px'}
        bg={'#6D6D6D'}
      ></Box>
      <Box
        pos={'absolute'}
        bottom={'-50%'}
        width={'140px'}
        height={'140px'}
        borderRadius={'50%'}
        bg={'rgba(109, 109, 109, 0.81)'}
        filter={'blur(140px)'}
      ></Box>
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDir={'column'}
        className='settings-item-content'
      >
        <Flex
          width={'100%'}
          height={'50%'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'.6vw'}
        >
          <Flex>
            {icon}
          </Flex>
          <Flex justifyContent={'center'} alignItems={'flex-start'} flexDir={'column'} gap={1}>
            <Text fontSize={'1vw'} fontWeight={600} color={'#fff'} lineHeight={'1'}>{title}</Text>
            <Text fontSize={'.6vw'} fontFamily={'Roboto'} color={'#fff'} lineHeight={'1'}>{desc}</Text>
          </Flex>
        </Flex>
        <Divider w={'100%'}></Divider>
        <Flex
          pt={'1vh'}
          width={'100%'}
          height={'40%'}
          justifyContent={'center'}
          alignItems={'flex-start'}
        >
          <Flex
            width={'50%'} height={'70%'}
            bg={'rgba(255,255,255,0.02)'} borderRadius={'8px'}
            border={'1px solid rgba(255, 255, 255, 0.08)'}
            backdropBlur={'6px'}
            padding={'.6vh .2vw'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'.5vw'}
          >
            <Flex
              width={'40%'} height={'100%'}
              borderRadius={'6px'}
              justify={'center'}
              align={'center'}
              textAlign={'center'}
              lineHeight={'100%'}
              {...boolean ? { bg: '#E81131', filter: 'drop-shadow(0px 0px 12px rgba(232, 17, 49, 0.55))' } : {}}
              onClick={() => { if (!boolean) { toggle() } }}
              cursor={'pointer'}
            >
              <Text fontSize={'.6vw'} fontFamily={'Roboto'} fontWeight={600}>ON</Text>
            </Flex>
            <Flex
              width={'40%'} height={'100%'}
              borderRadius={'6px'}
              justify={'center'}
              align={'center'}
              textAlign={'center'}
              lineHeight={'100%'}
              {...!boolean ? { bg: '#E81131', filter: 'drop-shadow(0px 0px 12px rgba(232, 17, 49, 0.55))' } : {}}
              onClick={() => { if (boolean) { toggle() } }}
              cursor={'pointer'}
            >
              <Text fontSize={'.6vw'} fontFamily={'Roboto'} fontWeight={600}>OFF</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MiniSettings;
