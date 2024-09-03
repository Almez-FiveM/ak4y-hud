import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";

const hudList = ["stress", "health", "armor", "microphone", "hunger", "thirst", "stamina",];

const StatusV2 = () => {
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
              pl={index === 0 ? '.2vw' : '0'}
            >
              <Flex
                width={'4.5vh'}
                height={'4.5vh'}
                background={colord(hud[status].color).darken(0.45).toHex()}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                // is first child then add padding left
                boxSizing={'border-box'}
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
                      cx={'1.22vw'}
                      cy={'1.3vw'}
                      r={'1.2vw'}
                      fill={'transparent'}
                      stroke={hud[status].color}
                      opacity={.4}
                      strokeWidth={'2px'}
                      strokeLinecap={'round'}
                      strokeDasharray={`150`}
                      strokeDashoffset={`0`}
                    />
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'1.2vw'}
                      fill={'transparent'}
                      stroke={hud[status].color}
                      strokeWidth={'2px'}
                      strokeDasharray={`${(hud[status].value / 100) * 113.097} 113.097`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
                    />
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'.9vw'}
                      fill={'transparent'}
                      stroke={hud[status].color}
                      strokeWidth={'1px'}
                      strokeDasharray={`113.097`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
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

export default StatusV2;