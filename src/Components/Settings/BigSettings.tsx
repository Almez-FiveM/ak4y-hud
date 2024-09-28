import React from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';

interface BigSettingsProps {
  toggle: () => void;
  title: string;
  desc: string;
  boolean: boolean;
  icon: React.ReactNode;
  gridArea: string;
}

const BigSettings: React.FC<BigSettingsProps> = ({ toggle, title, desc, boolean, icon, gridArea}) => {
  console.log('MiniSettings', boolean, title);
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
      align={'center'}
      gridArea={gridArea}
    >
      <Box pos={'absolute'} right={'20%'} width={'140px'} height={'140px'} borderRadius={'50%'} bg={'rgba(109, 109, 109, 0.81)'} filter={'blur(140px)'}/>
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        className='settings-item-content'
        gap={6}
      >
        <Flex
          width={'70%'}
          height={'100%'}
          justifyContent={'flex-start'}
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
        <Flex
          width={'20%'}
          height={'50%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Flex
            width={'100%'} height={'100%'}
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

export default BigSettings;
