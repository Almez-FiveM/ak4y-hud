import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";

const hudList = ["health", "armor", "hunger", "thirst", "stamina", "stress"];


const StatusV10 = () => {
  const hud = useSelector(selectHud);
  const generalSettings = useSelector(selectGeneralSettings);
  return (
    <>
      <Flex
        position={'absolute'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'auto'}
        padding={'1vh 1vw'}
        gap={'.5vw'}
        pl={'1vw'}
        mb={'8vh'}
      >
        {hudList.map((status, index) => {
          if (hud[status].visible) {
            return (
              <Flex
                flexDir={'column'}
                key={index}
                align={'center'}
                gap={'.25vw'}
              >
                <Flex
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexDirection={'column'}
                  pos={'relative'}
                  width={'5vh'}
                  height={'5vh'}
                >
                  <Flex
                    pos={'absolute'}
                    width={'100%'}
                    height={'100%'}
                    background={'rgba(255, 255, 255, 0.25)'}
                    borderRadius={'6px'}
                    align={'flex-start'}
                    justify={'flex-start'}
                  >
                    <Flex
                      width={`${hud[status].value}%`}
                      height={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      position={'relative'}
                      background={hud[status].color}
                      borderRadius={'6px'}
                    />
                  </Flex>
                  <Flex
                    width={'85%'}
                    height={'85%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    boxSizing={'border-box'}
                    pos={'relative'}
                    boxShadow={'inset 0px 8.37216px 8.37216px rgba(113, 113, 113, 0.38)'}
                    background={'#0A0A0A'}
                    borderRadius={'6px'}
                    zIndex={12}
                  >
                    <Box as={hud[status].icon} size={'1.4vh'} color={hud[status].color} zIndex={1} />
                  </Flex>
                </Flex>
                {generalSettings.showPercentageInStatus && (
                  <Text fontSize={'1vh'} color={'#fff'}>
                    {hud[status].value + '%'}
                  </Text>
                )}
              </Flex>
            )
          } else {
            return null;
          }
        })}
      </Flex>
    </>
  );
};

export default StatusV10;