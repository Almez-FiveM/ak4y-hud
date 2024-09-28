import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';

const hudList = ["health", "armor", "hunger", "thirst", "stamina", "stress"];

const StatusV7 = () => {
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
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'.25vw'}
                flexDirection={'column'}
              >
                <Flex
                  width={'4.5vh'}
                  height={'4.5vh'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  position={'relative'}
                  boxSizing={'border-box'}
                  pos={'relative'}
                  className='status-circular-wrapper'
                >
                  <Box as={hud[status].icon} size={'1.4vh'} color={hud[status].color} zIndex={1}/>
                  {[...Array(8)].map((_, i) => {
                    const thresholds = [75, 100, 75, 50, 25, 0, 25, 50];
                    let opacity = hud[status].value >= thresholds[i] ? 1 : 0.5;
                    if (i === 5 && hud[status].value === 0) opacity = 0.5;
                    return (
                      <Box
                        key={i}
                        position={'absolute'}
                        width={'100%'}
                        height={'100%'}
                        transform={`rotate(${i * 45}deg)`}
                        opacity={opacity}
                      >
                        <svg style={{ transform: 'rotate(-76deg)' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.871327 0C2.46713 0.650143 4.12204 1.18209 5.59964 2.00955C10.2097 4.43281 13.6378 8.03813 15.47 13.0029C16.1202 14.8351 15.5882 16.0172 13.5787 15.6034C9.38229 14.7169 5.24502 13.5348 1.16685 12.3527C0.75312 12.2345 0.339392 10.5205 0.575808 10.225C3.82652 7.03336 3.17641 4.01907 0.162109 1.00477C0.398525 0.65015 0.634912 0.29552 0.871327 0Z"
                            fill={hud[status].color} />
                        </svg>
                      </Box>
                    )
                  })}
                </Flex>
                <Text fontSize={'1.2vh'} color={hud[status].color}>
                  {generalSettings.showPercentageInStatus && hud[status].value + '%'}
                </Text>
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

export default StatusV7;