import { selectSpeedometer } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import { transform } from 'framer-motion';
const speedArray = [60, 80, 100, 120, 140, 160, 0, 20, 40];
const SpeedoV3 = () => {
  const speedo = useSelector(selectSpeedometer);
  let speedToDash = speedo.speed * 3.42;
  let fuelToDash = speedo.fuel * 1.7;
  let nitrousToDash = speedo.nitrous * 1.7;
  return (
    <Flex
      display={'flex'}
      height={'28vh'}
      width={'16vw'}
      gap={'.25vw'}
      mr={'2vw'}
      mb={'4vh'}
      justifyContent={'center'}
      alignItems={'center'}
      pos={'relative'}
      boxSizing='border-box'
    >
      <Flex align={'center'} justify={'center'} pos={'absolute'}>
        <svg width="100%" height="100%" viewBox="0 0 268 230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_1_3766)">
            <path d="M225.217 226C243.258 207.895 255.544 184.828 260.521 159.715C265.499 134.602 262.944 108.573 253.18 84.9171C243.417 61.2616 226.882 41.0429 205.669 26.8177C184.455 12.5926 159.514 5 134 5C108.486 5 83.5454 12.5926 62.3315 26.8177C41.1176 41.0429 24.5833 61.2616 14.8196 84.9171C5.0559 108.573 2.50126 134.602 7.47875 159.715C12.4562 184.827 24.7423 207.895 42.7833 226" stroke="url(#paint0_linear_1_3766)" strokeWidth="10" />
          </g>
          <defs>
            <filter id="filter0_i_1_3766" x="0.673584" y="0.673584" width="266.653" height="228.813" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="0.43264" />
              <feGaussianBlur stdDeviation="0.43264" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_3766" />
            </filter>
            <linearGradient id="paint0_linear_1_3766" x1="134" y1="5" x2="133.621" y2="235.294" gradientUnits="userSpaceOnUse">
              <stop stopColor="#296F54" />
              <stop offset="1" stopColor="#000101" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Flex align={'center'} justify={'center'} pos={'absolute'}>
        <svg width="100%" height="100%" viewBox="0 0 250 214" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M212.335 213.018C229.673 195.68 241.48 173.591 246.264 149.542C251.047 125.493 248.592 100.567 239.209 77.9133C229.826 55.2601 213.936 35.898 193.548 22.2756C173.161 8.65325 149.192 1.38233 124.672 1.38232C100.153 1.38232 76.1837 8.65325 55.7964 22.2756C35.409 35.898 19.519 55.2601 10.1357 77.9133C0.752448 100.566 -1.70264 125.493 3.0809 149.542C7.86445 173.59 19.6718 195.68 37.0098 213.018" stroke="#389B75" strokeWidth="0.86528" />
        </svg>

      </Flex>
      <Flex align={'center'} justify={'center'} pos={'absolute'}>
        <svg width="92%" height="92%" viewBox="0 0 248 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M208.552 207.4C225.343 190.692 236.778 169.404 241.41 146.229C246.043 123.054 243.665 99.0328 234.578 77.2024C225.491 55.3721 210.102 36.7134 190.358 23.5858C170.614 10.4582 147.401 3.45142 123.655 3.45142C99.9085 3.45141 76.6956 10.4582 56.9513 23.5858C37.2071 36.7134 21.8184 55.3721 12.7311 77.2024C3.64382 99.0327 1.26617 123.054 5.89882 146.229C10.5315 169.404 21.9663 190.692 38.7574 207.4" stroke="#294439" strokeWidth="6.92224" />
        </svg>

      </Flex>
      <Flex align={'center'} justify={'center'} pos={'absolute'} w={'100%'} className='speedometer-bar'>
        <svg width="88%" height="100%" viewBox="0 0 231 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_224_955" fill="white">
            <path d="M33.7658 198.142C33.3496 198.555 32.6754 198.548 32.2715 198.123C16.6881 181.717 6.16266 161.055 1.99774 138.667C-2.23259 115.927 0.288869 92.4263 9.24327 71.1378C18.1977 49.8493 33.1828 31.7286 52.3038 19.0672C71.4247 6.40586 93.8227 -0.227504 116.665 0.00595446C139.508 0.239413 161.769 7.32921 180.634 20.3788C199.499 33.4284 214.12 51.8516 222.649 73.3189C231.177 94.7861 233.23 118.333 228.548 140.982C223.938 163.281 213.003 183.723 197.096 199.807C196.684 200.224 196.009 200.217 195.602 199.796L193.945 198.083C193.544 197.669 193.552 197.011 193.956 196.601C209.244 181.14 219.753 161.49 224.184 140.056C228.686 118.282 226.712 95.6434 218.513 75.0048C210.314 54.3661 196.257 36.6539 178.12 24.108C159.983 11.5621 138.581 4.74596 116.62 4.52151C94.6593 4.29706 73.1259 10.6744 54.7429 22.8471C36.36 35.0198 21.9532 52.441 13.3444 72.9079C4.73561 93.3748 2.31147 115.968 6.37852 137.83C10.3818 159.35 20.4975 179.211 35.4742 194.982C35.8707 195.399 35.8647 196.058 35.456 196.464L33.7658 198.142Z" />
          </mask>
          <path d="M33.7658 198.142C33.3496 198.555 32.6754 198.548 32.2715 198.123C16.6881 181.717 6.16266 161.055 1.99774 138.667C-2.23259 115.927 0.288869 92.4263 9.24327 71.1378C18.1977 49.8493 33.1828 31.7286 52.3038 19.0672C71.4247 6.40586 93.8227 -0.227504 116.665 0.00595446C139.508 0.239413 161.769 7.32921 180.634 20.3788C199.499 33.4284 214.12 51.8516 222.649 73.3189C231.177 94.7861 233.23 118.333 228.548 140.982C223.938 163.281 213.003 183.723 197.096 199.807C196.684 200.224 196.009 200.217 195.602 199.796L193.945 198.083C193.544 197.669 193.552 197.011 193.956 196.601C209.244 181.14 219.753 161.49 224.184 140.056C228.686 118.282 226.712 95.6434 218.513 75.0048C210.314 54.3661 196.257 36.6539 178.12 24.108C159.983 11.5621 138.581 4.74596 116.62 4.52151C94.6593 4.29706 73.1259 10.6744 54.7429 22.8471C36.36 35.0198 21.9532 52.441 13.3444 72.9079C4.73561 93.3748 2.31147 115.968 6.37852 137.83C10.3818 159.35 20.4975 179.211 35.4742 194.982C35.8707 195.399 35.8647 196.058 35.456 196.464L33.7658 198.142Z"
            stroke="url(#paint0_linear_224_955)" strokeWidth="40" mask="url(#path-1-inside-1_224_955)"
            strokeDasharray={`${speedToDash} 900`}
          />
          <defs>
            <linearGradient id="paint0_linear_224_955" x1="127.833" y1="5.86184" x2="31.1523" y2="201.517" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6CDAAF" />
              <stop offset="1" stopColor="#1D4E3B" />
            </linearGradient>
          </defs>
        </svg>
      </Flex>
      <Flex align={'center'} justify={'center'} pos={'absolute'} w={'100%'} top={'3%'} h={'100%'} className="middle-circle">
        <svg width="52%" height="100%" viewBox="0 0 144 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M117.85 126.606C129.207 117.161 137.363 104.433 141.199 90.1685C145.034 75.9038 144.361 60.8016 139.272 46.9347C134.183 33.0677 124.926 21.1157 112.774 12.7188C100.621 4.322 86.1676 -0.108066 71.3969 0.0366366C56.6262 0.181339 42.2623 4.89372 30.2765 13.527C18.2907 22.1603 9.2704 34.2914 4.45367 48.2554C-0.36306 62.2194 -0.740183 77.3319 3.37406 91.5187C7.4883 105.706 15.8923 118.271 27.4325 127.492L29.6235 124.75C18.6493 115.982 10.6576 104.032 6.74515 90.5411C2.83272 77.0501 3.19135 62.679 7.7718 49.4C12.3523 36.121 20.93 24.5849 32.3279 16.3751C43.7258 8.16528 57.3851 3.68406 71.4313 3.54646C85.4774 3.40885 99.2219 7.62161 110.778 15.6066C122.335 23.5915 131.137 34.9573 135.977 48.144C140.817 61.3307 141.457 75.6921 137.809 89.2571C134.162 102.822 126.406 114.926 115.606 123.907L117.85 126.606Z" fill="url(#paint0_linear_1_3802)" />
          <defs>
            <linearGradient id="paint0_linear_1_3802" x1="72.0978" y1="0.0332031" x2="72.0978" y2="143.144" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6CD8AE" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>

      </Flex>
      <Flex align={'center'} justify={'center'} pos={'absolute'} w={'100%'}>
        <svg width="94%" height="100%" viewBox="0 0 248 211" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="122.005" y="0.000244141" width="2.59584" height="5.19168" fill="white" />
          <rect x="188.856" y="18.6042" width="2.59584" height="5.19168" transform="rotate(32.9096 188.856 18.6042)" fill="white" />
          <rect width="2.59584" height="5.19168" transform="matrix(-0.839529 0.543316 0.543316 0.839529 58.7803 19.0364)" fill="white" />
          <rect x="237.059" y="73.9192" width="2.59584" height="5.19168" transform="rotate(66.2703 237.059 73.9192)" fill="white" />
          <rect width="2.59584" height="5.19168" transform="matrix(-0.402423 0.915454 0.915454 0.402423 10.5769 74.3523)" fill="white" />
          <rect x="247.636" y="131.354" width="2.59584" height="5.19168" transform="rotate(93.97 247.636 131.354)" fill="white" />
          <rect width="2.59584" height="5.19168" transform="matrix(0.0692347 0.9976 0.9976 -0.0692347 0.000244141 131.786)" fill="white" />
          <rect x="215.545" y="208.196" width="2.59584" height="5.19168" transform="rotate(133.082 215.545 208.196)" fill="white" />
          <rect width="2.59584" height="5.19168" transform="matrix(0.683044 0.730377 0.730377 -0.683044 32.0903 208.628)" fill="white" />
        </svg>
      </Flex>
      <Flex
        width={'100%'}
        height={'100%'}
        pos={'absolute'}
        zIndex={2}
        align={'center'}
        justify={'center'}
        fontFamily={'Orbitron'} fontWeight={600} fontSize={'.75vw'}
      >
        <Text pos={'absolute'} textColor={speedo.speed >= 0 ? '#6CDAAF' : '#FFF'} left={'3.25svw'} bottom={'4vh'}>0</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 20 ? '#6CDAAF' : '#FFF'} left={'1.75vw'} bottom={'10.25vh'}>20</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 40 ? '#6CDAAF' : '#FFF'} left={'2.3vw'} bottom={'15.5vh'}>40</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 60 ? '#6CDAAF' : '#FFF'} left={'4.4vw'} bottom={'20vh'}>60</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 80 ? '#6CDAAF' : '#FFF'} left={'7.3vw'} bottom={'22vh'}>80</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 100 ? '#6CDAAF' : '#FFF'} right={'4.4vw'} bottom={'20vh'}>100</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 120 ? '#6CDAAF' : '#FFF'} right={'2.3vw'} bottom={'15.5vh'}>120</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 140 ? '#6CDAAF' : '#FFF'} right={'1.75vw'} bottom={'10.25vh'}>140</Text>
        <Text pos={'absolute'} textColor={speedo.speed >= 160 ? '#6CDAAF' : '#FFF'} right={'3.25vw'} bottom={'4vh'}>160</Text>
      </Flex>
      <Flex
        width={'50%'}
        height={'50%'}
        pos={'absolute'}
        zIndex={2}
        justify={'flex-end'}
        align={'center'}
        fontFamily={"Orbitron"}
        flexDir={'column'}
      >
        <Flex align={'center'} gap={0} textShadow={'0px 0px 30px rgba(255, 255, 255, 0.25)'} fontWeight={600} fontSize={'1.8vw'} lineHeight={'1'}>
          {speedo.speed < 10 && (
            <Text color={'#fff5'}>0</Text>
          )}
          {speedo.speed < 100 && (
            <Text color={'#fff5'}>0</Text>
          )}
          <Text >{speedo.speed}</Text>
        </Flex>
        <Text fontSize={'.6vw'} fontWeight={600}>{speedo.speedometerType}</Text>
        <Flex
          align={'center'}
          gap={'.5vw'}
          height={'2.2vh'}
          mt={'1vh'}
        >
          <svg width="12" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7682 13.0682C15.9488 12.4698 15.5988 11.8376 15.0005 11.6683C14.8876 11.6344 14.786 11.6005 14.6731 11.5779C14.6618 10.5732 14.4586 9.60226 14.086 8.72167L7.95572 13.102C10.112 12.9779 12.2797 13.2149 14.3682 13.8359C14.9666 14.0052 15.5988 13.6665 15.7682 13.0682ZM11.0393 21.9482C11.1219 21.9669 11.2057 21.9757 11.2873 21.9757C11.8044 21.9757 12.2696 21.6196 12.3876 21.0936L13.5165 16.0619C13.6401 15.5106 13.3379 14.9539 12.8087 14.7564C10.3699 13.8502 7.68646 13.8502 5.24768 14.7564C4.71842 14.9538 4.41642 15.5106 4.53982 16.0619L5.66878 21.0936C5.8055 21.7033 6.41186 22.087 7.0171 21.948C7.62573 21.8113 8.00822 21.2082 7.8715 20.5997L6.9707 16.5822C8.32896 16.2426 9.72695 16.2426 11.0852 16.5822L10.1844 20.5997C10.048 21.2083 10.4306 21.8114 11.0393 21.9482ZM0.21103 15.8567C0.425534 16.1615 0.775512 16.3309 1.12549 16.3309C1.35128 16.3309 1.58837 16.2631 1.78029 16.1164L17.5858 4.82674C18.0938 4.46547 18.2067 3.76552 17.8454 3.25748C17.4842 2.74945 16.7842 2.63655 16.2762 2.99782L12.0087 6.04602C11.9306 5.98607 11.847 5.93922 11.7664 5.88515C12.17 5.32766 12.4151 4.64916 12.4151 3.91228C12.4151 2.04949 10.891 0.525391 9.02824 0.525391C7.16545 0.525391 5.64135 2.04949 5.64135 3.91228C5.64135 4.65266 5.88915 5.33376 6.29626 5.89271C4.77995 6.88755 3.68248 8.66646 3.43987 10.7764C3.406 11.036 3.38342 11.307 3.38342 11.5779C3.27052 11.6005 3.16892 11.6344 3.05602 11.6683C2.48025 11.8263 2.13027 12.4247 2.27703 13.0004L0.470692 14.2875C-0.0373415 14.6487 -0.150238 15.3487 0.21103 15.8567Z"
              fill={speedo.seatbelt ? '#6CDAAF' : '#DFDFDF'} />
          </svg>
          <Icons.Engine
            size={'.8vw'}
            color={speedo.engine ? '#6CDAAF' : '#DFDFDF'}
          />
          <Icons.Headlights
            size={'.8vw'}
            color={(speedo.lights === 2) ? '#5CF99D' : ((speedo.lights === 1) ? '#58D2EE' : '#DFDFDF')}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SpeedoV3;