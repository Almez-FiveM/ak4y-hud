import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import { transform } from 'framer-motion';
const speedArray = [60, 80, 100, 120, 140, 0, 20, 40];
const SpeedoV2 = () => {
  const speedo = useSelector(selectSpeedometer);
  let speedToDash = (speedo.speed > 160 ? 160 : speedo.speed) * 5.34;
  let fuelToDash = speedo.fuel * 1.7;
  let nitrousToDash = speedo.nitrous * 1.7;
  return (
    <Flex
      display={'flex'}
      height={'28vh'}
      width={'16vw'}
      mr={'2vw'}
      mb={'4vh'}
      gap={'.25vw'}
      p={'.5vh .5vw'}
      justifyContent={'center'}
      alignItems={'center'}
      pos={'relative'}
      boxSizing='border-box'
    >
      <Flex width={'98.5%'} pos={'absolute'} height={'100%'} bg={'#1B1B1B'} borderRadius={'50%'} zIndex={0} border={'3px solid rgba(255, 255, 255, 0.25)'} />
      <Flex
        width={'98.5%'}
        height={'100%'}
        pos={'absolute'}
        transform={'rotate(90deg)'}
        zIndex={2}
      >
        <svg>
          <circle
            cx={'14vh'}
            cy={'7.85vw'}
            r={'7.4vw'}
            fill={'transparent'}
            stroke='#B88436' //#B88436
            strokeWidth={'10px'}
            strokeDasharray={`${speedToDash} 900`}
          />
        </svg>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
        transform={'rotate(90deg)'}
      >
        <svg>
          <circle
            cx={'14vh'}
            cy={'7.85vw'}
            r={'6.5vw'}
            fill={'transparent'}
            stroke='rgba(255, 255, 255, 0.3)'
            strokeWidth={'6px'}
            strokeDasharray={`1 45`}
            strokeDashoffset={0}
          >
          </circle>
        </svg>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
        transform={'rotate(90deg)'}
      >
        <svg>
          <circle
            cx={'14vh'}
            cy={'7.85vw'}
            r={'6.5vw'}
            fill='transparent'
            stroke={speedo.fuelColor}
            strokeWidth={'4px'}
            strokeDasharray={`${fuelToDash} 400`}
          />
        </svg>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
        transform={'rotate(90deg)'}
      >
        <svg>
          <circle
            cx={'14vh'}
            cy={'7.85vw'}
            r={'6.5vw'}
            fill='transparent'
            stroke='rgba(255, 255, 255, 0.09)'
            strokeWidth={'4px'}
            strokeDasharray={`170 400`}
          />
        </svg>
      </Flex>
      
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
        className='3131'
        align={'center'}
        justify={'center'}
      >
        {speedArray.map((k, i) => {
          return (
            <Box
              key={i}
              position={'absolute'}
              width={'50%'}
              height={'50%'}
              transform={`rotate(${i * 45}deg)`}
            >
              <Box
                position={'absolute'}
                transform={`rotate(${i * -45}deg)`}
              >
                <Text
                  fontSize={'.8vw'}
                >
                  {k}
                </Text>
              </Box>
            </Box>
          )
        })}
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
      >
        <svg>
          <circle
            cx={'14vh'}
            cy={'7.85vw'}
            r={'3.5vw'}
            fill={'transparent'}
            stroke='rgba(255, 255, 255, 0.3)'
            strokeWidth={'1px'}
            strokeDasharray={`10 20`}
          >
          </circle>
        </svg>
      </Flex>
      <Flex
        width={'45%'}
        height={'45%'}
        pos={'absolute'}
        zIndex={2}
        justify={'center'}
        align={'center'}
        fontFamily={"JetBrains Mono, monospace"}
        flexDir={'column'}
      >
        <Flex align={'center'}>
          {speedo.speed < 10 && (
            <Text fontSize={'2vw'} color={'#fff5'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>0</Text>
          )}
          {speedo.speed < 100 && (
            <Text fontSize={'2vw'} color={'#fff5'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>0</Text>
          )}
          <Text fontSize={'2vw'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>{speedo.speed}</Text>
        </Flex>
        <Text fontSize={'1.2vw'} color={'#5E5E5E'} letterSpacing={'0.25vw'}>{speedo.speedometerType}</Text>
      </Flex>
      <Flex
        width={'94%'}
        height={'92.5%'}
        borderRadius={'50%'}
        bg={'linear-gradient(180deg, #030303 0%, #202020 100%)'}
        zIndex={1}
        border={'3px solid rgba(255, 255, 255, 0.25)'}
      >
      </Flex>
    </Flex>
  );
};

export default SpeedoV2;