import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import { transform } from 'framer-motion';
const speedArray = [60, 80, 100, 120, 140, 0, 20, 40];

const SpeedoV5 = () => {
  const speedo = useSelector(selectSpeedometer);
  let speedToDash = (speedo.speed > 160 ? 160 : speedo.speed) * 5.35;
  let fuelToDash = speedo.fuel * 1.85;
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
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999}>
        <svg width="100%" height="100%" strokeDasharray={`${speedToDash} 1700`} style={
          {
            filter: `drop-shadow(0px 0px 10px ${colord("#F18141").alpha(0.5).toHex()})`
          }
        }
          viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_232_1007" fill="white">
            <path d="M136 272C99.9676 272 65.4078 257.701 39.909 232.242C14.4103 206.783 0.056764 172.246 0.000167763 136.214C-0.0564285 100.181 14.1885 65.5991 39.6072 40.0603C65.0258 14.5216 99.5405 0.113865 135.573 0.000671072C171.605 -0.112523 206.21 14.0781 231.788 39.4566C257.367 64.8351 271.829 99.3271 271.998 135.359C272.168 171.391 258.032 206.018 232.694 231.636C207.355 257.255 172.886 271.771 136.854 271.997L136.816 265.877C171.226 265.661 204.144 251.798 228.343 227.333C252.541 202.867 266.041 169.799 265.879 135.388C265.716 100.977 251.905 68.0375 227.478 43.801C203.05 19.5645 170.003 6.01254 135.592 6.12064C101.181 6.22874 68.2197 19.9881 43.9448 44.3776C19.67 68.7671 6.06611 101.793 6.12016 136.204C6.1742 170.615 19.8818 203.598 44.2331 227.911C68.5845 252.224 101.589 265.88 136 265.88L136 272Z" />
          </mask>
          <path d="M136 272C99.9676 272 65.4078 257.701 39.909 232.242C14.4103 206.783 0.056764 172.246 0.000167763 136.214C-0.0564285 100.181 14.1885 65.5991 39.6072 40.0603C65.0258 14.5216 99.5405 0.113865 135.573 0.000671072C171.605 -0.112523 206.21 14.0781 231.788 39.4566C257.367 64.8351 271.829 99.3271 271.998 135.359C272.168 171.391 258.032 206.018 232.694 231.636C207.355 257.255 172.886 271.771 136.854 271.997L136.816 265.877C171.226 265.661 204.144 251.798 228.343 227.333C252.541 202.867 266.041 169.799 265.879 135.388C265.716 100.977 251.905 68.0375 227.478 43.801C203.05 19.5645 170.003 6.01254 135.592 6.12064C101.181 6.22874 68.2197 19.9881 43.9448 44.3776C19.67 68.7671 6.06611 101.793 6.12016 136.204C6.1742 170.615 19.8818 203.598 44.2331 227.911C68.5845 252.224 101.589 265.88 136 265.88L136 272Z"
            stroke="url(#paint0_linear_12_5611)" stroke-width="6" mask="url(#path-1-inside-1_232_1007)" />
          <defs>
            <linearGradient id="paint0_linear_12_5611" x1="152.183" y1="-22.8355" x2="32.139" y2="213.789" gradientUnits="userSpaceOnUse">
              <stop stop-color={colord('#F18141').lighten(0.2).toHex()} />
              <stop offset="1" stop-color="#F18141" stop-opacity="0.84" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>

      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(185deg)'>
        <svg width={'45%'} height={'45%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'url(#paint0_linear_12_5604)'}
            strokeWidth={'3px'}
            strokeLinecap='round'
            strokeDasharray={`${fuelToDash} 400`}
          />
          <defs>
            <linearGradient id="paint0_linear_12_5604" x1="32.7695" y1="3.93414" x2="2.72835" y2="53.2016" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F18141" />
              <stop offset="1" stop-color="#543320" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={998} transform='rotate(185deg)'>
        <svg width={'45%'} height={'45%'} >
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
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={999} transform='rotate(365deg)'>
        <svg width={'45%'} height={'45%'} >
          <circle
            cx={'50%'}
            cy={'50%'}
            r={'45%'}
            fill={'transparent'}
            stroke={'url(#paint0_linear_12_5605)'}
            strokeWidth={'3px'}
            strokeLinecap='round'
            strokeDasharray={`${nitrousToDash} 400`}
          />
          <defs>
            <linearGradient id="paint0_linear_12_5605" x1="32.7695" y1="3.93414" x2="2.72835" y2="53.2016" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CF79E4" />
              <stop offset="1" stop-color="#4A2054" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Flex width={'99%'} align={"center"} justify={"center"} pos={'absolute'} height={'100%'} zIndex={998} transform='rotate(365deg)'>
        <svg width={'45%'} height={'45%'} >
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

      <Flex w={'110%'} h={'102%'} pos={'absolute'} >
        <svg width="100%" height="100%" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_12_5358" fill="white">
            <path d="M291.931 145.965C291.931 226.579 226.58 291.93 145.965 291.93C65.3509 291.93 0 226.579 0 145.965C0 65.3505 65.3509 -0.000427246 145.965 -0.000427246C226.58 -0.000427246 291.931 65.3505 291.931 145.965ZM9.21786 145.965C9.21786 221.488 70.4418 282.712 145.965 282.712C221.489 282.712 282.713 221.488 282.713 145.965C282.713 70.4414 221.489 9.21744 145.965 9.21744C70.4418 9.21744 9.21786 70.4414 9.21786 145.965Z" />
          </mask>
          <g filter="url(#filter0_i_12_5358)">
            <path d="M291.931 145.965C291.931 226.579 226.58 291.93 145.965 291.93C65.3509 291.93 0 226.579 0 145.965C0 65.3505 65.3509 -0.000427246 145.965 -0.000427246C226.58 -0.000427246 291.931 65.3505 291.931 145.965ZM9.21786 145.965C9.21786 221.488 70.4418 282.712 145.965 282.712C221.489 282.712 282.713 221.488 282.713 145.965C282.713 70.4414 221.489 9.21744 145.965 9.21744C70.4418 9.21744 9.21786 70.4414 9.21786 145.965Z" fill="url(#paint0_linear_12_5358)" />
          </g>
          <path d="M291.931 145.965C291.931 226.579 226.58 291.93 145.965 291.93C65.3509 291.93 0 226.579 0 145.965C0 65.3505 65.3509 -0.000427246 145.965 -0.000427246C226.58 -0.000427246 291.931 65.3505 291.931 145.965ZM9.21786 145.965C9.21786 221.488 70.4418 282.712 145.965 282.712C221.489 282.712 282.713 221.488 282.713 145.965C282.713 70.4414 221.489 9.21744 145.965 9.21744C70.4418 9.21744 9.21786 70.4414 9.21786 145.965Z" stroke="white" stroke-opacity="0.03" stroke-width="2.19497" mask="url(#path-1-inside-1_12_5358)" />
          <defs>
            <filter id="filter0_i_12_5358" x="0" y="-0.000427246" width="291.931" height="291.931" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3.1827" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12_5358" />
            </filter>
            <linearGradient id="paint0_linear_12_5358" x1="145.965" y1="-0.000427246" x2="145.965" y2="291.93" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1A1A1A" />
              <stop offset="1" stop-color="#161616" />
            </linearGradient>
          </defs>
        </svg>

      </Flex>

      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        justify={'center'}
        align={'center'}
        zIndex={3}
      >
        <svg width="92%" height="100%" viewBox="0 0 246 246" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="122.331" width="1.5" height="12.144" fill={speedo.speed >= 80 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="169.433" y="9.11853" width="1.5" height="12.144" transform="rotate(22.5 169.433 9.11853)" fill={speedo.speed >= 90 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="209.459" y="35.5684" width="1.5" height="12.144" transform="rotate(45 209.459 35.5684)" fill={speedo.speed >= 100 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="236.318" y="75.3232" width="1.5" height="12.144" transform="rotate(67.5 236.318 75.3232)" fill={speedo.speed >= 110 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="245.917" y="122.33" width="1.5" height="12.144" transform="rotate(90 245.917 122.33)" fill={speedo.speed >= 120 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="236.796" y="169.432" width="1.5" height="12.144" transform="rotate(112.5 236.796 169.432)" fill={speedo.speed >= 130 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="210.345" y="209.459" width="1.5" height="12.144" transform="rotate(135 210.345 209.459)" fill={speedo.speed >= 140 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="170.592" y="236.316" width="1.5" height="12.144" transform="rotate(157.5 170.592 236.316)" fill={speedo.speed >= 150 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="123.585" y="245.916" width="1.5" height="12.144" transform="rotate(180 123.585 245.916)" fill={speedo.speed >= 0 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="76.4834" y="236.797" width="1.5" height="12.144" transform="rotate(-157.5 76.4834 236.797)" fill={speedo.speed >= 10 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="36.457" y="210.346" width="1.5" height="12.144" transform="rotate(-135 36.457 210.346)" fill={speedo.speed >= 20 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="9.60059" y="170.591" width="1.5" height="12.144" transform="rotate(-112.5 9.60059 170.591)" fill={speedo.speed >= 30 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="-0.000244141" y="123.585" width="1.5" height="12.144" transform="rotate(-90 -0.000244141 123.585)" fill={speedo.speed >= 40 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="9.11914" y="76.4829" width="1.5" height="12.144" transform="rotate(-67.5 9.11914 76.4829)" fill={speedo.speed >= 50 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="35.5703" y="36.4546" width="1.5" height="12.144" transform="rotate(-45 35.5703 36.4546)" fill={speedo.speed >= 60 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
          <rect x="75.3252" y="9.59814" width="1.5" height="12.144" transform="rotate(-22.5 75.3252 9.59814)" fill={speedo.speed >= 70 ? 'rgba(255, 208, 87, 0.30)' : 'rgba(255, 255, 255, 0.30)'} />
        </svg>
      </Flex>
      <Flex
        width={'48%'}
        height={'48%'}
        pos={'absolute'}
        borderRadius={'50%'}
        bg={'linear-gradient(180deg, #8F783A 0%, rgba(81, 70, 41, 0) 100%)'}
        zIndex={2}
        filter={'drop-shadow(0px 0px 2px rgba(47, 37, 74, 0.25))'}
      />
      <Flex
        width={'45%'}
        height={'45%'}
        pos={'absolute'}
        borderRadius={'50%'}
        bg={'#0D0D0D'}
        zIndex={3}
        justify={'center'}
        align={'flex-end'}
        overflow={'hidden'}
      >
        <Flex
          w={'100%'}
          height={'35%'}
          bg={'#CF79E4'}
          opacity={.3}
          borderRadius={'50%'}
          filter={'blur(16px)'}
        ></Flex>
      </Flex>
      <Flex
        width={'45%'}
        height={'45%'}
        pos={'absolute'}
        borderRadius={'50%'}
        zIndex={3}
        justify={'center'}
        align={'flex-start'}
        overflow={'hidden'}
      >
        <Flex
          w={'100%'}
          height={'35%'}
          bg={'#F18141'}
          opacity={.3}
          borderRadius={'50%'}
          filter={'blur(16px)'}
        ></Flex>
      </Flex>
      <Flex
        width={'35%'}
        height={'10%'}
        pos={'absolute'}
        zIndex={3}
        justify={'space-between'}
        align={'center'}
        overflow={'hidden'}
      >
        <Icons.GasPump size={'.6vw'} color='#F18141'/>
        <Icons.Flash size={'.6vw'} color='#CF79E4'/>
      </Flex>

      <Flex
        width={'100%'}
        height={'40%'}
        pos={'absolute'}
        zIndex={3}
        justify={'center'}
        gap={2}
        mt={'2vh'}
        align={'center'}
        fontFamily={"Big Shoulders Display"}
        flexDir={'column'}
        color={'#fff'}
      >
        <Flex align={'center'} gap={0} flexDir={'column'} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'} fontWeight={600} fontSize={'3vw'} lineHeight={'1'}>
          <Flex>
            {speedo.speed < 10 && (
              <Text color={'#fff5'}>0</Text>
            )}
            {speedo.speed < 100 && (
              <Text color={'#fff5'}>0</Text>
            )}
            <Text >{speedo.speed}</Text>
          </Flex>
        </Flex>
        <Flex
          align={'center'}
          gap={'.5vw'}
          height={'1.75vh'}
        >
          <svg width="10" height="20" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7682 13.0682C15.9488 12.4698 15.5988 11.8376 15.0005 11.6683C14.8876 11.6344 14.786 11.6005 14.6731 11.5779C14.6618 10.5732 14.4586 9.60226 14.086 8.72167L7.95572 13.102C10.112 12.9779 12.2797 13.2149 14.3682 13.8359C14.9666 14.0052 15.5988 13.6665 15.7682 13.0682ZM11.0393 21.9482C11.1219 21.9669 11.2057 21.9757 11.2873 21.9757C11.8044 21.9757 12.2696 21.6196 12.3876 21.0936L13.5165 16.0619C13.6401 15.5106 13.3379 14.9539 12.8087 14.7564C10.3699 13.8502 7.68646 13.8502 5.24768 14.7564C4.71842 14.9538 4.41642 15.5106 4.53982 16.0619L5.66878 21.0936C5.8055 21.7033 6.41186 22.087 7.0171 21.948C7.62573 21.8113 8.00822 21.2082 7.8715 20.5997L6.9707 16.5822C8.32896 16.2426 9.72695 16.2426 11.0852 16.5822L10.1844 20.5997C10.048 21.2083 10.4306 21.8114 11.0393 21.9482ZM0.21103 15.8567C0.425534 16.1615 0.775512 16.3309 1.12549 16.3309C1.35128 16.3309 1.58837 16.2631 1.78029 16.1164L17.5858 4.82674C18.0938 4.46547 18.2067 3.76552 17.8454 3.25748C17.4842 2.74945 16.7842 2.63655 16.2762 2.99782L12.0087 6.04602C11.9306 5.98607 11.847 5.93922 11.7664 5.88515C12.17 5.32766 12.4151 4.64916 12.4151 3.91228C12.4151 2.04949 10.891 0.525391 9.02824 0.525391C7.16545 0.525391 5.64135 2.04949 5.64135 3.91228C5.64135 4.65266 5.88915 5.33376 6.29626 5.89271C4.77995 6.88755 3.68248 8.66646 3.43987 10.7764C3.406 11.036 3.38342 11.307 3.38342 11.5779C3.27052 11.6005 3.16892 11.6344 3.05602 11.6683C2.48025 11.8263 2.13027 12.4247 2.27703 13.0004L0.470692 14.2875C-0.0373415 14.6487 -0.150238 15.3487 0.21103 15.8567Z"
              fill={speedo.seatbelt ? '#E35ABD' : '#DFDFDF'} />
          </svg>
          <Icons.Engine
            size={'.7vw'}
            color={speedo.engine ? '#E35ABD' : '#DFDFDF'}
          />
          <Icons.Headlights
            size={'.7vw'}
            color={(speedo.lights === 2) ? '#5CF99D' : ((speedo.lights === 1) ? '#58D2EE' : '#DFDFDF')}
          />
        </Flex>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={3}
        align={'center'}
        justify={'center'}
        fontFamily={'JetBrains Mono'} fontWeight={600} fontSize={'.7vw'}
      >
        <Text pos={'absolute'} textColor={speedo.speed >= 0 ? '#F18141' : '#F2F2F2'} left={'7.8vw'} top={'23vh'}>0</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 20 ? '#F18141' : '#F2F2F2'} left={'3.75vw'} bottom={'6vh'}>20</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 40 ? '#F18141' : '#F2F2F2'} left={'2vw'} bottom={'13.2vh'}>40</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 60 ? '#F18141' : '#F2F2F2'} left={'3.5vw'} bottom={'20.8vh'}>60</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 80 ? '#F18141' : '#F2F2F2'} left={'7.6vw'} bottom={'23.5vh'}>80</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 100 ? '#F18141' : '#F2F2F2'} right={'3.5vw'} bottom={'20.8vh'}>100</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 120 ? '#F18141' : '#F2F2F2'} right={'2vw'} bottom={'13.2vh'}>120</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 140 ? '#F18141' : '#F2F2F2'} right={'3.75vw'} bottom={'6vh'}>140</Text>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        borderRadius={'50%'}
        bg={'radial-gradient(40% 50% at 50% 80%, rgba(74, 60, 23, .51) 0%, #121212 100%)'}
        zIndex={1}
        boxSizing='border-box'
      >
      </Flex>
    </Flex>
  );
};

export default SpeedoV5;