import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';

const SpeedoV1 = () => {
  const speedo = useSelector(selectSpeedometer);
  return (
    <Flex
      display={'flex'}
      height={'auto'}
      width={'16vw'}
      flexDirection={'column'}
      mr={'2vw'}
      mb={'4vh'}
      gap={'.25vw'}
      p={'.5vh .5vw'}

      filter={'drop-shadow(0 0 1vw #000)'}
    >
      <Flex
        align={'center'}
        gap={'1vw'}
        height={'7vh'}
      >
        <Flex height={'100%'} align={'center'}>
          {speedo.speed < 10 && (
            <Text fontFamily={'Orbitron'} fontWeight={600} fontSize={'4vw'} color={'#fff5'}>0</Text>
          )}
          {speedo.speed < 100 && (
            <Text fontFamily={'Orbitron'} fontWeight={600} fontSize={'4vw'} color={'#fff5'}>0</Text>
          )}
          <Text fontFamily={'Orbitron'} fontWeight={600} fontSize={'4vw'}>{speedo.speed}</Text>
        </Flex>
        <Flex
          justify={'center'}
          align={'center'}
          pos={'relative'}
        >
          <Box
            pos={'absolute'}
            width={'100%'}
            height={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              as={speedo.nitrousIcon}
              size={'1.4vh'}
              color={speedo.nitrousColor}
              className='status-icon-gradient'
              zIndex={1}
            />
          </Box>
          <Box>
            <svg width={'67'} height={'75'}>
              <circle
                cx={'1.7vw'}
                cy={'2vw'}
                r={'1.5vw'}
                fill={'transparent'}
                stroke={'#bbb'}
                opacity={.4}
                strokeWidth={'6px'}
                strokeLinecap={'round'}
                strokeDasharray={`170`}
                strokeDashoffset={`0`}
              />
              <circle
                cx={'1.7vw'}
                cy={'2vw'}
                r={'1.5vw'}
                fill={'transparent'}
                stroke={speedo.nitrousColor}
                strokeWidth={'6px'}
                strokeDasharray={`${(speedo.nitrous / 100) * 113.097} 113.097`}
                strokeLinecap={'round'}
                strokeDashoffset={0}
              />
              <circle
                cx={'1.7vw'}
                cy={'2vw'}
                r={'1.05vw'}
                fill={colord(speedo.nitrousColor).alpha(0.2).toHex()}
                strokeDashoffset={0}
              />
            </svg>
          </Box>
        </Flex>
      </Flex>
      <Flex
        align={'center'}
        gap={'.5vw'}
        height={'2.2vh'}
      >
        <Text fontFamily={'Orbitron'} fontWeight={600} fontSize={'1.5vw'} color={'#fff5'}>KMH</Text>
        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7682 13.0682C15.9488 12.4698 15.5988 11.8376 15.0005 11.6683C14.8876 11.6344 14.786 11.6005 14.6731 11.5779C14.6618 10.5732 14.4586 9.60226 14.086 8.72167L7.95572 13.102C10.112 12.9779 12.2797 13.2149 14.3682 13.8359C14.9666 14.0052 15.5988 13.6665 15.7682 13.0682ZM11.0393 21.9482C11.1219 21.9669 11.2057 21.9757 11.2873 21.9757C11.8044 21.9757 12.2696 21.6196 12.3876 21.0936L13.5165 16.0619C13.6401 15.5106 13.3379 14.9539 12.8087 14.7564C10.3699 13.8502 7.68646 13.8502 5.24768 14.7564C4.71842 14.9538 4.41642 15.5106 4.53982 16.0619L5.66878 21.0936C5.8055 21.7033 6.41186 22.087 7.0171 21.948C7.62573 21.8113 8.00822 21.2082 7.8715 20.5997L6.9707 16.5822C8.32896 16.2426 9.72695 16.2426 11.0852 16.5822L10.1844 20.5997C10.048 21.2083 10.4306 21.8114 11.0393 21.9482ZM0.21103 15.8567C0.425534 16.1615 0.775512 16.3309 1.12549 16.3309C1.35128 16.3309 1.58837 16.2631 1.78029 16.1164L17.5858 4.82674C18.0938 4.46547 18.2067 3.76552 17.8454 3.25748C17.4842 2.74945 16.7842 2.63655 16.2762 2.99782L12.0087 6.04602C11.9306 5.98607 11.847 5.93922 11.7664 5.88515C12.17 5.32766 12.4151 4.64916 12.4151 3.91228C12.4151 2.04949 10.891 0.525391 9.02824 0.525391C7.16545 0.525391 5.64135 2.04949 5.64135 3.91228C5.64135 4.65266 5.88915 5.33376 6.29626 5.89271C4.77995 6.88755 3.68248 8.66646 3.43987 10.7764C3.406 11.036 3.38342 11.307 3.38342 11.5779C3.27052 11.6005 3.16892 11.6344 3.05602 11.6683C2.48025 11.8263 2.13027 12.4247 2.27703 13.0004L0.470692 14.2875C-0.0373415 14.6487 -0.150238 15.3487 0.21103 15.8567Z"
            fill={speedo.seatbelt ? speedo.nitrousColor : '#DFDFDF'} />
        </svg>
        <Icons.Engine
          color={speedo.engine ? speedo.nitrousColor : '#DFDFDF'}
        />
        <Icons.Headlights
          color={(speedo.lights === 2) ? '#5CF99D' : ((speedo.lights === 1) ? '#58D2EE' : '#DFDFDF')}
        />
      </Flex>
      <Flex
        align={'center'}
        gap={'.5vw'}
        height={'2.2vh'}
      >
        <Flex>
          <Box
            as={speedo.fuelIcon}
            size={'1.8vh'}
            color={speedo.fuelColor}
          ></Box>
        </Flex>
        <Flex
          width={'100%'}
          height={'.8vh'}
          bg={'#333'}
          borderRadius={'2px'}
        >
          <Flex
            width={speedo.fuel + '%'}
            height={'100%'}
            bg={speedo.fuelColor}
            borderRadius={'2px'}
            boxShadow={`0 5px 1vw ${speedo.fuelColor}`}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SpeedoV1;