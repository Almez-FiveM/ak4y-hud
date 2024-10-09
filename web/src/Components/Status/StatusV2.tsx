import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import MicrophoneStatus from './MicrophoneStatus';
import Icons from '../../Constants/Icons';
import Draggable from 'react-draggable';

const hudList = ["stress", "health", "armor"];
const hudList2 = ["hunger", "thirst", "stamina",];
interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  translateX: number;
  translateY: number;
  hideBelow: number;
}

const StatusV2 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'auto'}
        padding={'-1vh 1vw'}
        gap={'.5vw'}
        pl={'1vw'}
      >
        {hudList.map((status, index) => {
          if (hud[status].visible && hud[status].hideBelow >= hud[status].value) {
            let dragging = false;
            const handleDrag = (e: any) => {
              dragging = true;
            };

            const handleDragEnd = (statusName: string, e: any) => {
              if (dragging) {
                dragging = false;
                dispatch({ type: 'UPDATE_' + statusName.toUpperCase() + '_COORDINATES', payload: { translateX: e.lastX, translateY: e.lastY } });
              }
            };
            return (
              <Draggable {...(!generalSettings.editMode && { disabled: true })} key={index}
                onStop={(e, data) => handleDragEnd(status, data)}
                onDrag={(e, data) => handleDrag(e)}
                defaultPosition={{ x: hud[status].translateX, y: hud[status].translateY }}
              >
                <Flex
                  key={index}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'.25vw'}
                  flexDirection={'column'}
                  pl={index === 0 ? '.2vw' : '0'}
                  style={
                    {
                      filter: `drop-shadow(0 0 2px ${hud[status].color})`
                    }
                  }
                >
                  <Flex
                    width={'4.5vh'}
                    height={'4.5vh'}
                    background={colord(hud[status].color).darken(0.45).toHex()}
                    borderRadius={'50%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    // is first child then add padding left
                    boxSizing={'border-box'}
                  >
                    <Box as={Icons[hud[status].icon]}
                      size={'1.4vh'} color={hud[status].color} />
                    <Box
                      pos={'absolute'}
                      top={0}
                      right={0}
                      width={'100%'}
                      height={'100%'}
                    >
                      <svg>
                        <circle
                          cx={'1.22vw'}
                          cy={'1.3vw'}
                          r={'1.2vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          opacity={.4}
                          strokeWidth={'2px'}
                          strokeLinecap={'round'}
                          strokeDasharray={`150`}
                          strokeDashoffset={`0`}
                        />
                        {hud[status].value > 0 && (
                          <circle
                            cx={'1.25vw'}
                            cy={'1.30vw'}
                            r={'1.2vw'}
                            fill={'transparent'}
                            stroke={hud[status].color}
                            strokeWidth={'2px'}
                            strokeDasharray={`${hud[status].value * 1.45} 145`}
                            strokeLinecap={'round'}
                            strokeDashoffset={0}
                          />
                        )}
                        <circle
                          cx={'1.25vw'}
                          cy={'1.30vw'}
                          r={'.9vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          strokeWidth={'1px'}
                          strokeDasharray={`113.097`}
                          strokeLinecap={'round'}
                          strokeDashoffset={0}
                        />
                      </svg>
                    </Box>
                  </Flex>
                  <Text fontSize={'1.2vh'} color={hud[status].color}>
                    {generalSettings.showPercentageInStatus && hud[status].value + '%'}
                  </Text>
                </Flex>
              </Draggable>
            )
          }
        })}
        {hud.microphone.visible && (
          <Flex
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            mr={'-.5vw'}
            ml={'-.5vw'}
            mt={'.5vh'}
            {...!generalSettings.showPercentageInStatus && { marginBottom: '-1.5vh' }}
          >
            <Flex
              width={'8vh'}
              height={'auto'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'relative'}
              boxSizing={'border-box'}
            >
              <svg width="100%" height="100%" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3899 69.2905C24.5643 73.2125 28.5801 76.3702 33.1402 78.5299C37.7002 80.6896 42.6877 81.7959 47.7332 81.767C52.7787 81.738 57.7532 80.5745 62.2881 78.3626C66.8231 76.1507 70.8024 72.947 73.9315 68.9888L69.5708 65.5416C66.9588 68.8458 63.6369 71.5201 59.8513 73.3665C56.0656 75.2129 51.9132 76.1842 47.7013 76.2084C43.4894 76.2326 39.3261 75.3091 35.5195 73.5062C31.7129 71.7034 28.3605 69.0674 25.7107 65.7934L21.3899 69.2905Z"
                  {
                  ...hud["microphone"].value >= 99 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M78.9451 60.1912C80.7545 55.4812 81.4813 50.4245 81.0716 45.3955C80.6619 40.3665 79.1263 35.4941 76.5784 31.139C74.0306 26.784 70.5357 23.0578 66.3527 20.2363C62.1696 17.4149 57.4055 15.5705 52.4131 14.8397L51.608 20.3398C55.7756 20.9498 59.7525 22.4895 63.2444 24.8447C66.7363 27.1999 69.6536 30.3105 71.7805 33.946C73.9074 37.5815 75.1893 41.6488 75.5313 45.8468C75.8733 50.0449 75.2666 54.2661 73.7562 58.1979L78.9451 60.1912Z"
                  {
                  ...hud["microphone"].value >= 66 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M42.2863 14.8977C37.3026 15.6857 32.5599 17.5847 28.4096 20.454C24.2592 23.3233 20.8074 27.0893 18.3097 31.4734C15.812 35.8574 14.3325 40.7472 13.9806 45.7805C13.6286 50.8138 14.4134 55.8619 16.2768 60.5508L21.4425 58.498C19.887 54.5838 19.2319 50.3699 19.5257 46.1682C19.8194 41.9665 21.0545 37.8847 23.1395 34.225C25.2245 30.5654 28.106 27.4215 31.5706 25.0264C35.0352 22.6312 38.9942 21.046 43.1544 20.3881L42.2863 14.8977Z"
                  {
                  ...hud["microphone"].value >= 33 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M41.5461 48.1277V40.1354C41.5461 38.5456 42.1776 37.0209 43.3018 35.8968C44.4259 34.7727 45.9506 34.1411 47.5404 34.1411C49.1302 34.1411 50.6548 34.7727 51.779 35.8968C52.9031 37.0209 53.5346 38.5456 53.5346 40.1354V48.1277C53.5346 49.7175 52.9031 51.2422 51.779 52.3663C50.6548 53.4905 49.1302 54.122 47.5404 54.122C45.9506 54.122 44.4259 53.4905 43.3018 52.3663C42.1776 51.2422 41.5461 49.7175 41.5461 48.1277ZM57.5308 48.1277C57.5308 47.8628 57.4256 47.6087 57.2382 47.4213C57.0509 47.234 56.7967 47.1287 56.5318 47.1287C56.2668 47.1287 56.0127 47.234 55.8254 47.4213C55.638 47.6087 55.5327 47.8628 55.5327 48.1277C55.5327 50.2475 54.6907 52.2803 53.1918 53.7792C51.693 55.2781 49.6601 56.1201 47.5404 56.1201C45.4207 56.1201 43.3878 55.2781 41.8889 53.7792C40.3901 52.2803 39.548 50.2475 39.548 48.1277C39.548 47.8628 39.4428 47.6087 39.2554 47.4213C39.068 47.234 38.8139 47.1287 38.549 47.1287C38.284 47.1287 38.0299 47.234 37.8425 47.4213C37.6552 47.6087 37.5499 47.8628 37.5499 48.1277C37.553 50.6036 38.4739 52.9903 40.1348 54.8264C41.7956 56.6625 44.0782 57.8176 46.5413 58.0682V62.1144C46.5413 62.3793 46.6466 62.6335 46.8339 62.8208C47.0213 63.0082 47.2754 63.1134 47.5404 63.1134C47.8053 63.1134 48.0595 63.0082 48.2468 62.8208C48.4342 62.6335 48.5394 62.3793 48.5394 62.1144V58.0682C51.0025 57.8176 53.2852 56.6625 54.946 54.8264C56.6068 52.9903 57.5278 50.6036 57.5308 48.1277Z"
                  fill={hud["microphone"].color} />
              </svg>
            </Flex>
            <Flex height={'24px'} />
          </Flex>
        )}
        {hudList2.map((status, index) => {
          if (hud[status].visible) {
            let dragging = false;
            const handleDrag = (e: any) => {
              dragging = true;
            };

            const handleDragEnd = (statusName: string, e: any) => {
              if (dragging) {
                dragging = false;
                dispatch({ type: 'UPDATE_' + statusName.toUpperCase() + '_COORDINATES', payload: { translateX: e.lastX, translateY: e.lastY } });
              }
            };
            return (
              <Draggable {...(!generalSettings.editMode && { disabled: true })} key={index}
                onStop={(e, data) => handleDragEnd(status, data)}
                onDrag={(e, data) => handleDrag(e)}
                defaultPosition={{ x: hud[status].translateX, y: hud[status].translateY }}
              >
                <Flex
                  key={index}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'.25vw'}
                  flexDirection={'column'}
                  pl={index === 0 ? '.2vw' : '0'}
                >
                  <Flex
                    width={'4.5vh'}
                    height={'4.5vh'}
                    background={colord(hud[status].color).darken(0.45).toHex()}
                    borderRadius={'50%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    // is first child then add padding left
                    boxSizing={'border-box'}
                  >
                    <Box as={Icons[hud[status].icon]}
                      size={'1.4vh'} color={hud[status].color} />
                    <Box
                      pos={'absolute'}
                      top={0}
                      right={0}
                      width={'100%'}
                      height={'100%'}
                    >
                      <svg>
                        <circle
                          cx={'1.22vw'}
                          cy={'1.3vw'}
                          r={'1.2vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          opacity={.4}
                          strokeWidth={'2px'}
                          strokeLinecap={'round'}
                          strokeDasharray={`150`}
                          strokeDashoffset={`0`}
                        />
                        <circle
                          cx={'1.25vw'}
                          cy={'1.30vw'}
                          r={'1.2vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          strokeWidth={'2px'}
                          strokeDasharray={`${(hud[status].value * 1.4)} 140`}
                          strokeLinecap={'round'}
                          strokeDashoffset={0}
                          style={
                            {
                              filter: `drop-shadow(0 0 2px ${hud[status].color})`,
                            }
                          }
                        />
                        <circle
                          cx={'1.25vw'}
                          cy={'1.30vw'}
                          r={'.9vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          strokeWidth={'1px'}
                          strokeDasharray={`113.097`}
                          strokeLinecap={'round'}
                          strokeDashoffset={0}
                        />
                      </svg>
                    </Box>
                  </Flex>
                  <Text fontSize={'1.2vh'} color={hud[status].color}>
                    {generalSettings.showPercentageInStatus && hud[status].value + '%'}
                  </Text>
                </Flex>
              </Draggable>
            )
          }
        })}
      </Flex>
    </>
  );
};

export default StatusV2;