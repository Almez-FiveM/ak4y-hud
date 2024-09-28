import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';

export const PlaneSpeedo = () => {
  const speedo = useSelector(selectSpeedometer);
  const speedToDashArray = speedo.speed * 5.75;
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
      zIndex={1}
    >
      <Flex className='PlaneSpeedometer'
        width={'16vw'}
        height={'28vh'}
        bg={'linear-gradient(180deg, #030303 -7.07%, #0F0F0F 47.51%, #202020 100%)'}
        pos={'relative'}
        borderRadius={'50%'}
      >
        <Flex pos={'absolute'} width={'100%'} height={'100%'} align={'center'} justify={'center'}>
          <svg width="110%" height="90%" viewBox="0 0 309 309" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="155.168" y="308.547" width="0.951122" height="12" transform="rotate(180 155.168 308.547)" fill="white" fillOpacity="0.3" data-index={1} {...speedo.speed >= 0 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="96.1436" y="297.118" width="0.951122" height="12" transform="rotate(-157.5 96.1436 297.118)" fill="white" fillOpacity="0.3" data-index={2} {...speedo.speed >= 10 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="45.9863" y="263.973" width="0.951122" height="12" transform="rotate(-135 45.9863 263.973)" fill="white" fillOpacity="0.3" data-index={3} {...speedo.speed >= 20 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="12.3311" y="214.156" width="0.951122" height="12" transform="rotate(-112.5 12.3311 214.156)" fill="white" fillOpacity="0.3" data-index={4} {...speedo.speed >= 30 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="0.300781" y="155.251" width="0.951122" height="12" transform="rotate(-90 0.300781 155.251)" fill="white" fillOpacity="0.3" data-index={5} {...speedo.speed >= 40 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="11.7285" y="96.2266" width="0.951122" height="12" transform="rotate(-67.5 11.7285 96.2266)" fill="white" fillOpacity="0.3" data-index={6} {...speedo.speed >= 50 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="44.875" y="46.0684" width="0.951122" height="12" transform="rotate(-45 44.875 46.0684)" fill="white" fillOpacity="0.3" data-index={7} {...speedo.speed >= 60 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="94.6914" y="12.4121" width="0.951122" height="12" transform="rotate(-22.5 94.6914 12.4121)" fill="white" fillOpacity="0.3" data-index={8} {...speedo.speed >= 70 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="153.597" y="0.382812" width="0.951122" height="12" fill="white" fillOpacity="0.3" data-index={9} {...speedo.speed >= 80 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="212.621" y="11.8105" width="0.951122" height="12" transform="rotate(22.5 212.621 11.8105)" fill="white" fillOpacity="0.3" data-index={10} {...speedo.speed >= 90 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="262.779" y="44.9561" width="0.951122" height="12" transform="rotate(45 262.779 44.9561)" fill="white" fillOpacity="0.3" data-index={11} {...speedo.speed >= 100 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="296.437" y="94.7734" width="0.951122" height="12" transform="rotate(67.5 296.437 94.7734)" fill="white" fillOpacity="0.3" data-index={12} {...speedo.speed >= 110 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="308.465" y="153.679" width="0.951122" height="12" transform="rotate(90 308.465 153.679)" fill="white" fillOpacity="0.3" data-index={13} {...speedo.speed >= 120 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="297.037" y="212.703" width="0.951122" height="12" transform="rotate(112.5 297.037 212.703)" fill="white" fillOpacity="0.3" data-index={14} {...speedo.speed >= 130 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="263.891" y="262.861" width="0.951122" height="12" transform="rotate(135 263.891 262.861)" fill="white" fillOpacity="0.3" data-index={15} {...speedo.speed >= 140 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
            <rect x="214.074" y="296.517" width="0.951122" height="12" transform="rotate(157.5 214.074 296.517)" fill="white" fillOpacity="0.3" data-index={16} {...speedo.speed >= 150 && { fill: '#FFEB3B', fillOpacity: 1, stroke: '#FFEB3B', strokeWidth: '1px' }} />
          </svg>
        </Flex>
        <Flex pos={'absolute'} width={'100%'} height={'100%'} justify={'center'} transform={'rotate(90deg)'}>
          <svg>
            <circle
              cx={'50%'}
              cy={'50%'}
              r={'48.5%'}
              fill={'transparent'}
              stroke='#FFEB3B'
              strokeWidth={'3px'}
              strokeLinecap='round'
              strokeDasharray={`${speedToDashArray} 925`}
            />
          </svg>
        </Flex>
        <Flex align={'center'} justify={'space-between'} w={'100%'} h={'100%'} py={'3vh'} flexDir={'column'}>
          <svg width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.335938 34.0093L14.3396 0.129395V34.0093H0.335938Z" fill="#FFEB3B" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3433 34.0093L14.3396 0.129395V34.0093H28.3433Z" fill="#988B19" />
          </svg>
          <svg width="161" height="115" viewBox="0 0 161 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.3684 43.7225L0.0163378 30.4723C-0.167691 28.6688 1.22589 27.0918 3.03831 27.0526L68.6563 25.6339C70.2577 25.5993 71.5699 24.3522 71.6861 22.7547L72.7915 7.55534C72.9224 5.75645 71.4982 4.22496 69.6946 4.22496H65.659C64.5872 4.22496 63.7183 3.35607 63.7183 2.28425C63.7183 1.21242 64.5872 0.343536 65.659 0.343536H75.6399C75.97 0.343536 76.2976 0.285821 76.6079 0.172996C78.4552 -0.49877 80.4085 0.869322 80.4085 2.83503V113.681C80.4085 114.324 79.8871 114.846 79.244 114.846C78.6009 114.846 78.0796 114.324 78.0796 113.681V106.227C78.0796 104.614 75.955 104.025 75.125 105.409C74.7981 105.953 74.1784 106.252 73.5488 106.167L57.0938 103.952C55.5529 103.744 54.4029 102.429 54.4029 100.874V93.7687C54.4029 92.2643 55.4813 90.9763 56.9622 90.7119L73.2184 87.809C74.8524 87.5172 75.968 85.9919 75.751 84.3462L71.8371 54.6657C71.6334 53.121 70.3166 51.9665 68.7586 51.9665H43.1468L4.02641 46.4823C2.61076 46.2839 1.51351 45.1446 1.3684 43.7225Z" fill="#FFEB3B" />
            <path d="M159.449 43.7225L160.801 30.4723C160.985 28.6688 159.591 27.0918 157.779 27.0526L92.1606 25.6339C90.5592 25.5993 89.247 24.3522 89.1308 22.7547L88.0254 7.55534C87.8945 5.75645 89.3187 4.22496 91.1223 4.22496H95.1579C96.2297 4.22496 97.0986 3.35607 97.0986 2.28425C97.0986 1.21242 96.2297 0.343536 95.1579 0.343536H85.1771C84.8469 0.343536 84.5193 0.285821 84.209 0.172996C82.3617 -0.49877 80.4085 0.869322 80.4085 2.83503V113.681C80.4085 114.324 80.9298 114.846 81.5729 114.846C82.216 114.846 82.7373 114.324 82.7373 113.681V106.227C82.7373 104.614 84.8619 104.025 85.692 105.409C86.0188 105.953 86.6385 106.252 87.2682 106.167L103.723 103.952C105.264 103.744 106.414 102.429 106.414 100.874V93.7687C106.414 92.2643 105.336 90.9763 103.855 90.7119L87.5985 87.809C85.9645 87.5172 84.8489 85.9919 85.0659 84.3462L88.9798 54.6657C89.1835 53.121 90.5003 51.9665 92.0583 51.9665H117.67L156.79 46.4823C158.206 46.2839 159.303 45.1446 159.449 43.7225Z" fill="#988B19" />
          </svg>
          <Flex
            justify={'center'}
            height={'auto'}
            zIndex={4}
            gap={'.5vh'}
            flexDir={'column'}
            align={'center'}
          >
            <Flex
              align={'center'}
              gap={'.5vw'}
              height={'1.75vh'}
            >
              <svg width="12" height="20" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7682 13.0682C15.9488 12.4698 15.5988 11.8376 15.0005 11.6683C14.8876 11.6344 14.786 11.6005 14.6731 11.5779C14.6618 10.5732 14.4586 9.60226 14.086 8.72167L7.95572 13.102C10.112 12.9779 12.2797 13.2149 14.3682 13.8359C14.9666 14.0052 15.5988 13.6665 15.7682 13.0682ZM11.0393 21.9482C11.1219 21.9669 11.2057 21.9757 11.2873 21.9757C11.8044 21.9757 12.2696 21.6196 12.3876 21.0936L13.5165 16.0619C13.6401 15.5106 13.3379 14.9539 12.8087 14.7564C10.3699 13.8502 7.68646 13.8502 5.24768 14.7564C4.71842 14.9538 4.41642 15.5106 4.53982 16.0619L5.66878 21.0936C5.8055 21.7033 6.41186 22.087 7.0171 21.948C7.62573 21.8113 8.00822 21.2082 7.8715 20.5997L6.9707 16.5822C8.32896 16.2426 9.72695 16.2426 11.0852 16.5822L10.1844 20.5997C10.048 21.2083 10.4306 21.8114 11.0393 21.9482ZM0.21103 15.8567C0.425534 16.1615 0.775512 16.3309 1.12549 16.3309C1.35128 16.3309 1.58837 16.2631 1.78029 16.1164L17.5858 4.82674C18.0938 4.46547 18.2067 3.76552 17.8454 3.25748C17.4842 2.74945 16.7842 2.63655 16.2762 2.99782L12.0087 6.04602C11.9306 5.98607 11.847 5.93922 11.7664 5.88515C12.17 5.32766 12.4151 4.64916 12.4151 3.91228C12.4151 2.04949 10.891 0.525391 9.02824 0.525391C7.16545 0.525391 5.64135 2.04949 5.64135 3.91228C5.64135 4.65266 5.88915 5.33376 6.29626 5.89271C4.77995 6.88755 3.68248 8.66646 3.43987 10.7764C3.406 11.036 3.38342 11.307 3.38342 11.5779C3.27052 11.6005 3.16892 11.6344 3.05602 11.6683C2.48025 11.8263 2.13027 12.4247 2.27703 13.0004L0.470692 14.2875C-0.0373415 14.6487 -0.150238 15.3487 0.21103 15.8567Z"
                  fill={speedo.seatbelt ? '#FFEB3B' : '#DFDFDF'} />
              </svg>
              <Icons.Engine
                size={'.7vw'}
                color={speedo.engine ? '#FFEB3B' : '#DFDFDF'}
              />
              <Icons.Headlights
                size={'.7vw'}
                color={(speedo.lights === 2) ? '#5CF99D' : ((speedo.lights === 1) ? '#FFEB3B' : '#DFDFDF')}
              />
            </Flex>
            <Flex height={'100%'} align={'center'} fontWeight={600} fontSize={'1.5vw'} color={'#7A7A7A'}>
              {speedo.speed < 10 && (
                <Text fontFamily={'Orbitron'} lineHeight={'1'}>0</Text>
              )}
              {speedo.speed < 100 && (
                <Text fontFamily={'Orbitron'} lineHeight={'1'}>0</Text>
              )}
              <Text fontFamily={'Orbitron'} lineHeight={'1'} color={'#FFF'}>{speedo.speed}</Text>
            </Flex>
            <Text pl={'.2vw'} fontFamily={'Orbitron'} fontSize={'.6vw'} lineHeight={'1'} color={'#fff'}>{speedo.speedometerType}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};