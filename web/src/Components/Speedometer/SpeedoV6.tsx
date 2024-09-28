import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';

const SpeedoV6 = () => {
  const speedo = useSelector(selectSpeedometer);
  let speedToDash = speedo.speed * 5.35;
  let fuelToDash = speedo.fuel * 3.10;
  let nitrousToDash = speedo.nitrous * 3.10;
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
      <Flex w={'96%'} h={'98%'} pos={'absolute'} bg={'linear-gradient(180deg, rgba(214, 214, 214, 0.58) 0%, rgba(214, 214, 214, 0) 84.4%)'} borderRadius={'50%'} />
      <Flex width={'100%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(130deg)'>
        <svg width={'94%'} height={'94%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'#5ACBE3'}
            strokeWidth={'4px'}
            strokeLinecap='round'
            strokeDasharray={`${fuelToDash} 800`}
          />
        </svg>
      </Flex>
      <Flex width={'100%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(130deg)'>
        <svg width={'94%'} height={'94%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'#fff3'}
            strokeWidth={'4px'}
            strokeLinecap='round'
            strokeDasharray={`300 800`}
          />
        </svg>
      </Flex>
      <Flex width={'100%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(275deg)'>
        <svg width={'94%'} height={'94%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'#E35ABD'}
            strokeWidth={'4px'}
            strokeLinecap='round'
            strokeDasharray={`${nitrousToDash} 800`}
          />
        </svg>
      </Flex>
      <Flex width={'100%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(275deg)'>
        <svg width={'94%'} height={'94%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'#fff3'}
            strokeWidth={'4px'}
            strokeLinecap='round'
            strokeDasharray={`300 800`}
          />
        </svg>
      </Flex>
      <Flex
        width={'100%'}
        height={'40%'}
        pos={'absolute'}
        zIndex={3}
        justify={'flex-start'}
        mt={'2vh'}
        align={'center'}
        fontFamily={"Bayon"}
        flexDir={'column'}
        color={'#5CDCF9'}
        filter={`drop-shadow(0px 4px 4px ${colord('#5CDCF9').alpha(0.5).toHex()}`}
      >
        <Flex align={'center'} gap={0} flexDir={'column'} fontWeight={600} fontSize={'3.5vw'} lineHeight={'1'}>
          <Flex className='speedometer-inset-shadow'>
            {speedo.speed < 10 && (
              <Text color={colord('#5CDCF9').alpha(0.5).toHex()}>0</Text>
            )}
            {speedo.speed < 100 && (
              <Text color={colord('#5CDCF9').alpha(0.5).toHex()}>0</Text>
            )}
            <Text >{speedo.speed}</Text>
          </Flex>
        </Flex>
        <Text fontSize={'1.4vw'} color={'#636363'} letterSpacing={'0.11em'}>{speedo.speedometerType}</Text>
      </Flex>

      <Flex pos={'absolute'} w={'50%'} h={'50%'} zIndex={3}>
        <svg width="100%" height="100%" viewBox="0 0 134 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.5591 3.29774C30.9763 7.79749 19.2578 16.6534 11.2212 28.492C3.1845 40.3305 -0.721244 54.4901 0.109695 68.7747C0.940634 83.0593 6.46182 96.6705 15.8169 107.497C25.1721 118.324 37.8383 125.762 51.8512 128.656L52.2291 126.827C38.619 124.015 26.3168 116.792 17.2305 106.276C8.14427 95.7603 2.78177 82.5402 1.97471 68.6662C1.16765 54.7922 4.96114 41.0395 12.7668 29.5412C20.5725 18.0429 31.9542 9.44155 45.1466 5.07113L44.5591 3.29774Z" fill="url(#paint0_linear_1_3178)" />
          <path d="M89.4409 3.29774C103.024 7.79749 114.742 16.6534 122.779 28.492C130.815 40.3305 134.721 54.4901 133.89 68.7747C133.059 83.0593 127.538 96.6705 118.183 107.497C108.828 118.324 96.1617 125.762 82.1488 128.656L81.7709 126.827C95.381 124.015 107.683 116.792 116.769 106.276C125.856 95.7603 131.218 82.5402 132.025 68.6662C132.832 54.7922 129.039 41.0395 121.233 29.5412C113.427 18.0429 102.046 9.44155 88.8534 5.07113L89.4409 3.29774Z" fill="url(#paint1_linear_1_3178)" />
          <defs>
            <linearGradient id="paint0_linear_1_3178" x1="65" y1="0" x2="65" y2="130" gradientUnits="userSpaceOnUse">
              <stop stop-color="#101319" stop-opacity="0" />
              <stop offset="0.5" stop-color="#58D2EE" />
              <stop offset="1" stop-color="#101319" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_3178" x1="69" y1="0" x2="69" y2="130" gradientUnits="userSpaceOnUse">
              <stop stop-color="#101319" stop-opacity="0" />
              <stop offset="0.5" stop-color="#58D2EE" />
              <stop offset="1" stop-color="#101319" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>

      <Flex
        width={'50%'}
        height={'72%'}
        pos={'absolute'}
        zIndex={3}
        justify={'space-between'}
        align={'flex-end'}
      >
        <Icons.GasPump size={'.7vw'} color='#58D2EE' />
        <Flex
          align={'center'}
          gap={'.5vw'}
          height={'2vh'}
          mb={'-1vh'}
        >
          <svg width="14" height="24" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7682 13.0682C15.9488 12.4698 15.5988 11.8376 15.0005 11.6683C14.8876 11.6344 14.786 11.6005 14.6731 11.5779C14.6618 10.5732 14.4586 9.60226 14.086 8.72167L7.95572 13.102C10.112 12.9779 12.2797 13.2149 14.3682 13.8359C14.9666 14.0052 15.5988 13.6665 15.7682 13.0682ZM11.0393 21.9482C11.1219 21.9669 11.2057 21.9757 11.2873 21.9757C11.8044 21.9757 12.2696 21.6196 12.3876 21.0936L13.5165 16.0619C13.6401 15.5106 13.3379 14.9539 12.8087 14.7564C10.3699 13.8502 7.68646 13.8502 5.24768 14.7564C4.71842 14.9538 4.41642 15.5106 4.53982 16.0619L5.66878 21.0936C5.8055 21.7033 6.41186 22.087 7.0171 21.948C7.62573 21.8113 8.00822 21.2082 7.8715 20.5997L6.9707 16.5822C8.32896 16.2426 9.72695 16.2426 11.0852 16.5822L10.1844 20.5997C10.048 21.2083 10.4306 21.8114 11.0393 21.9482ZM0.21103 15.8567C0.425534 16.1615 0.775512 16.3309 1.12549 16.3309C1.35128 16.3309 1.58837 16.2631 1.78029 16.1164L17.5858 4.82674C18.0938 4.46547 18.2067 3.76552 17.8454 3.25748C17.4842 2.74945 16.7842 2.63655 16.2762 2.99782L12.0087 6.04602C11.9306 5.98607 11.847 5.93922 11.7664 5.88515C12.17 5.32766 12.4151 4.64916 12.4151 3.91228C12.4151 2.04949 10.891 0.525391 9.02824 0.525391C7.16545 0.525391 5.64135 2.04949 5.64135 3.91228C5.64135 4.65266 5.88915 5.33376 6.29626 5.89271C4.77995 6.88755 3.68248 8.66646 3.43987 10.7764C3.406 11.036 3.38342 11.307 3.38342 11.5779C3.27052 11.6005 3.16892 11.6344 3.05602 11.6683C2.48025 11.8263 2.13027 12.4247 2.27703 13.0004L0.470692 14.2875C-0.0373415 14.6487 -0.150238 15.3487 0.21103 15.8567Z"
              fill={speedo.seatbelt ? '#58D2EE' : '#585858'} />
          </svg>
          <Icons.Engine
            size={'.8vw'}
            color={speedo.engine ? '#58D2EE' : '#585858'}
          />
          <Icons.Headlights
            size={'.8vw'}
            color={(speedo.lights === 2) ? '#5CF99D' : ((speedo.lights === 1) ? '#58D2EE' : '#585858')}
          />
        </Flex>
        <Icons.Flash size={'.8vw'} color='#E35ABD' />
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        borderRadius={'50%'}
        bg={'rgba(5, 7, 15, 0.85)'}
        zIndex={1}
        boxSizing='border-box'
      >
      </Flex>
    </Flex>
  );
};

export default SpeedoV6;