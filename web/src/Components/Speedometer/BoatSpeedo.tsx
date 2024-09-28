import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';

export const BoatSpeedo = () => {
  const speedo = useSelector(selectSpeedometer);

const calculateDegrees = (speed: number) => {
  let minSpeed = 0;
  let maxSpeed = 180;
  let minDegree = -18;
  let maxDegree = 198;

  let degree = ((speed - minSpeed) / (maxSpeed - minSpeed)) * (maxDegree - minDegree) + minDegree;
  let val = Math.min(Math.max(degree, minDegree), maxDegree);
  return val;
}

  return (
    <Flex
      display={'flex'}
      width={'16.5vw'}
      height={'28.8vh'}
      mr={'2vw'}
      mb={'4vh'}
      gap={'.25vw'}
      pos={'relative'}
      justify={'center'}
      align={'center'}
    >
      <Flex pos={'absolute'} width={'100%'}
        top={0} height={'100%'} zIndex={2} justify={'center'} align={'center'}
      >
        <Box width={'45px'} height={'45px'} bgImage={"https://files.catbox.moe/365gtd.png"} bgSize={'cover'} bgPos={'center'} bgRepeat={'no-repeat'} borderRadius={'50%'} zIndex={3} filter={'drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.8))'}/>
      </Flex>
      <Flex pos={'absolute'} width={'100%'} bottom={0} height={'50%'} zIndex={2} justify={'center'} align={'center'}>
        <Flex 
          width={'90px'} height={'32px'} 
          bg={'#0A272B'} border={'1px solid rgba(228, 228, 228, 0.28)'} 
          filter={'drop-shadow(0px 0px 15px rgba(38, 195, 214, 0.47))'} borderRadius={'8px'} 
          zIndex={3}
          justify={'center'} align={'center'}
        >
            <Text fontSize={'.75vw'} fontFamily={'Orbitron'} whiteSpace={'nowrap'} color={'#26C3D6'}>{speedo.speed} {speedo.speedometerType}</Text>
        </Flex>
      </Flex>
      <Flex pos={'absolute'} width={'100%'} top={0} height={'65%'} justify={'flex-start'} pb={'3.5vh'} zIndex={1} pl={'2.2vw'} align={'flex-end'}>
        <Flex
          bgImage={'https://files.catbox.moe/ysxywe.png'}
          bgPosition={'center'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          transformOrigin={'right center'}
          transform={`rotate(${calculateDegrees(speedo.speed)}deg)`}
          width={'115px'}
          borderRadius={'12px 0 0 12px'}
          height={'16px'}
          filter={'drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.8))'}
        />
      </Flex>
      <Flex className='PlaneSpeedometer'
        width={'16vw'}
        height={'28vh'}
        bgImage={'https://files.catbox.moe/rd7s0p.png'}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        pos={'relative'}
        borderRadius={'50%'}
      />
    </Flex>
  );
};