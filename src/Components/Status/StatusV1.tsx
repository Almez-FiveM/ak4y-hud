import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';

const hudList = ["microphone", "health", "armor", "hunger", "thirst", "stamina", "stress"];

const StatusV1 = () => {
  const hud = useSelector(selectHud);
  const generalSettings = useSelector(selectGeneralSettings);
  return (
    <Flex
      position={'absolute'}
      bottom={0}
      left={0}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'auto'}
      padding={'1vh 1vw'}
      gap={'.5vw'}
      pl={'1vw'}
    >
      {hudList.map((status, index) => {
        if (hud[status].visible) {
          return (
            <Flex
              key={index}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'.25vw'}
              flexDirection={'column'}
            >
              <Flex
                width={'4.5vh'}
                height={'4.5vh'}
                background={'#101010'}
                border={'2px solid rgba(255, 255, 255, 0.26)'}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
              >
                <Box as={hud[status].icon}
                  size={'1.4vh'} color={hud[status].color} />
                <Box
                  pos={'absolute'}
                  top={0}
                  right={0}
                  width={'100%'}
                  height={'100%'}
                >
                  <svg>
                    <circle
                      cx={'22.5px'}
                      cy={'22px'}
                      r={'18px'}
                      fill={'transparent'}
                      stroke={hud[status].color}
                      strokeWidth={'2px'}
                      strokeDasharray={`${(hud[status].value / 100) * 113.097} 113.097`}
                    />
                  </svg>
                </Box>
              </Flex>
              <Text fontSize={'1.2vh'} color={hud[status].color}>
                {generalSettings.showPercentageInStatus && hud[status].value}%
              </Text>
            </Flex>
          )
        }
      })};
    </Flex>
  );
};

export default StatusV1;