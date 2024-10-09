import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import { transform } from 'framer-motion';
const speedArray = [60, 80, 100, 120, 140, 0, 20, 40];
const SpeedoV2 = () => {
  const speedo = useSelector(selectSpeedometer);
  let speedToDash = (speedo.speed > 160 ? 160 : speedo.speed) * 5.5;
  let fuelToDash = speedo.fuel * 1.9;
  let nitrousToDash = speedo.nitrous * 1.85;
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
      <Flex width={'95%'} pos={'absolute'} height={'96%'} bg={'#1B1B1B'} borderRadius={'50%'} zIndex={0} border={'1px solid rgba(255, 255, 255, 0.25)'} />
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        transform={'rotate(90deg)'}
        zIndex={4}
      >
        <svg style={{ transition: 'all 0.5s ease', filter: 'drop-shadow(0 0 .2vw #E3AC5A)' }}>
          <circle
            cx={'50.5%'}
            cy={'50%'}
            r={'7.3vw'}
            fill={'transparent'}
            stroke={'url(#paint0_linear_1_119)'}
            strokeWidth={'12px'}
            strokeDasharray={`${speedToDash} 900`}
          />
          <defs>
            <linearGradient id="paint0_linear_1_119" x1="200.466" y1="177.759" x2="436" y2="350" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B88436" stop-opacity="0.82" />
              <stop offset="1" stop-color="#E3AC5A" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>


      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(90deg)'>
        <svg width={'50%'} height={'50%'} >
          {speedo.fuel > 0 && (
            <circle
              cx={'50%'}
              cy={'52%'}
              r={'45%'}
              fill={'transparent'}
              stroke={'#DBA655'}
              strokeWidth={'3px'}
              strokeLinecap='round'
              strokeDasharray={`${fuelToDash} 430`}
            />  
          )}
        </svg>
      </Flex>
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={998} transform='rotate(90deg)'>
        <svg width={'50%'} height={'50%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'rgba(255, 255, 255, 0.1)'}
            strokeWidth={'3px'}
            strokeLinecap='round'
            strokeDasharray={`190 400`}
          />
        </svg>
      </Flex>

      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(294deg)'>
        <svg width={'50%'} height={'50%'} >
          {speedo.nitrous > 0 && (
            <circle
              cx={'50%'}
              cy={'50%'}
              r={'45%'}
              fill={'transparent'}
              stroke={'#8E5AE3'}
              strokeWidth={'3px'}
              strokeLinecap='round'
              strokeDasharray={`${nitrousToDash} 430`}
            />
          )}
        </svg>
      </Flex>
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={998} transform='rotate(294deg)'>
        <svg width={'50%'} height={'50%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'rgba(255, 255, 255, 0.1)'}
            strokeWidth={'3px'}
            strokeLinecap='round'
            strokeDasharray={`185 400`}
          />
        </svg>
      </Flex>

      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={3}
        align={'center'}
        justify={'center'}
        fontFamily={'JetBrains Mono'} fontWeight={600} fontSize={'.6vw'}
      >
        <Text pos={'absolute'} textColor={speedo.speed >= 0 ? '#E3AC5A' : '#F2F2F2'} left={'7.8vw'} top={'23vh'}>0</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 20 ? '#E3AC5A' : '#F2F2F2'} left={'4vw'} bottom={'6vh'}>20</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 40 ? '#E3AC5A' : '#F2F2F2'} left={'2.25vw'} bottom={'13.2vh'}>40</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 60 ? '#E3AC5A' : '#F2F2F2'} left={'4vw'} bottom={'20.4vh'}>60</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 80 ? '#E3AC5A' : '#F2F2F2'} left={'7.6vw'} bottom={'23vh'}>80</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 100 ? '#E3AC5A' : '#F2F2F2'} right={'4vw'} bottom={'20.4vh'}>100</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 120 ? '#E3AC5A' : '#F2F2F2'} right={'2.25vw'} bottom={'13.2vh'}>120</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 140 ? '#E3AC5A' : '#F2F2F2'} right={'4vw'} bottom={'6vh'}>140</Text>
      </Flex>

      <Flex pos={'absolute'} width={'85%'} height={'85%'} align={'center'} justify={'center'} zIndex={3}>
        <svg width="100%" height="100%" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="155.168" y="308.547" width="0.951122" height="12" transform="rotate(180 155.168 308.547)" fill="white" fillOpacity="0.3" data-index={1} {...speedo.speed >= 0 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="96.1436" y="297.118" width="0.951122" height="12" transform="rotate(-157.5 96.1436 297.118)" fill="white" fillOpacity="0.3" data-index={2} {...speedo.speed >= 10 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="45.9863" y="263.973" width="0.951122" height="12" transform="rotate(-135 45.9863 263.973)" fill="white" fillOpacity="0.3" data-index={3} {...speedo.speed >= 20 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="12.3311" y="214.156" width="0.951122" height="12" transform="rotate(-112.5 12.3311 214.156)" fill="white" fillOpacity="0.3" data-index={4} {...speedo.speed >= 30 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="0.300781" y="155.251" width="0.951122" height="12" transform="rotate(-90 0.300781 155.251)" fill="white" fillOpacity="0.3" data-index={5} {...speedo.speed >= 40 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="11.7285" y="96.2266" width="0.951122" height="12" transform="rotate(-67.5 11.7285 96.2266)" fill="white" fillOpacity="0.3" data-index={6} {...speedo.speed >= 50 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="44.875" y="46.0684" width="0.951122" height="12" transform="rotate(-45 44.875 46.0684)" fill="white" fillOpacity="0.3" data-index={7} {...speedo.speed >= 60 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="94.6914" y="12.4121" width="0.951122" height="12" transform="rotate(-22.5 94.6914 12.4121)" fill="white" fillOpacity="0.3" data-index={8} {...speedo.speed >= 70 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="153.597" y="0.382812" width="0.951122" height="12" fill="white" fillOpacity="0.3" data-index={9} {...speedo.speed >= 80 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="212.621" y="11.8105" width="0.951122" height="12" transform="rotate(22.5 212.621 11.8105)" fill="white" fillOpacity="0.3" data-index={10} {...speedo.speed >= 90 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="262.779" y="44.9561" width="0.951122" height="12" transform="rotate(45 262.779 44.9561)" fill="white" fillOpacity="0.3" data-index={11} {...speedo.speed >= 100 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="296.437" y="94.7734" width="0.951122" height="12" transform="rotate(67.5 296.437 94.7734)" fill="white" fillOpacity="0.3" data-index={12} {...speedo.speed >= 110 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="308.465" y="153.679" width="0.951122" height="12" transform="rotate(90 308.465 153.679)" fill="white" fillOpacity="0.3" data-index={13} {...speedo.speed >= 120 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="297.037" y="212.703" width="0.951122" height="12" transform="rotate(112.5 297.037 212.703)" fill="white" fillOpacity="0.3" data-index={14} {...speedo.speed >= 130 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="263.891" y="262.861" width="0.951122" height="12" transform="rotate(135 263.891 262.861)" fill="white" fillOpacity="0.3" data-index={15} {...speedo.speed >= 140 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
          <rect x="214.074" y="296.517" width="0.951122" height="12" transform="rotate(157.5 214.074 296.517)" fill="white" fillOpacity="0.3" data-index={16} {...speedo.speed >= 150 && { fill: '#E3AC5A', fillOpacity: 1, stroke: '#E3AC5A', strokeWidth: '1px' }} />
        </svg>
      </Flex>

      <Flex
        width={'35%'}
        height={'55%'}
        pos={'absolute'}
        zIndex={3}
        justify={'space-between'}
        align={'center'}
        flexDir={'column'}
        overflow={'hidden'}
      >
        <Icons.GasPump size={'.6vw'} color='#DBA655' style={{ marginTop: '10%' }} />
        <Icons.Flash size={'.6vw'} color='#8E5AE3' />
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
            r={'4vw'}
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
            <Text fontSize={'2.2vw'} color={'#fff5'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>0</Text>
          )}
          {speedo.speed < 100 && (
            <Text fontSize={'2.2vw'} color={'#fff5'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>0</Text>
          )}
          <Text fontSize={'2.2vw'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'}>{speedo.speed}</Text>
        </Flex>
        <Flex flexDir={'column'} align={'center'}>
          <Text fontSize={'1.2vw'} color={'#5E5E5E'} letterSpacing={'0.25vw'} lineHeight={'1'}>{speedo.speedometerType}</Text>
          <Text fontSize={'.8vw'} color={'#363636'}>({speedo.gear})</Text>
        </Flex>
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