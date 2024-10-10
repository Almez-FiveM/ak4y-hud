import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import Draggable from 'react-draggable';

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  hideBelow: number;
  translateX: number;
  translateY: number;
}

const StatusV5 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();
  const handleDragEnd = (statusName: string, e: any) => {
    console.log("UPDATE_" + statusName.toUpperCase() + "_COORDINATES", { translateX: e.lastX, translateY: e.lastY });
    dispatch({ type: 'UPDATE_' + statusName.toUpperCase() + '_COORDINATES', payload: { translateX: e.lastX, translateY: e.lastY } });
  };

  return (
    <Flex
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'auto'}
      flexDirection={'column'}
      pl={'2vw'}
      width={'18vw'}
      minH={'10vh'}
      gap={'1.5vh'}
      pb={'1vh'}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'1.5vh'}
        width={'100%'}
        gap={'.25vw'}
      >
        {hud["health"].visible && hud["health"].hideBelow >= hud["health"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("health", data)}
            defaultPosition={{ x: hud["health"].translateX, y: hud["health"].translateY }}
          >
            <Flex
              gap={'.5vw'}
              width={'48%'}
              height={'2.5vh'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Box as={Icons[hud["health"].icon]} size={'2vh'} color={hud["health"].color} />
              <Flex
                width={'100%'}
                height={'.65vh'}
                alignItems={'center'}
                borderRadius={'2px'}
                bg={colord(hud["health"].color).alpha(0.41).toHex()}
              >
                <Box
                  width={`${hud["health"].value}%`}
                  filter={`drop-shadow(0px 0px 10px ${hud["health"].color})`}
                  height={'100%'}
                  bg={hud["health"].color}
                  borderRadius={'2px'}
                />
              </Flex>
            </Flex>
          </Draggable>
        )}
        {hud["armor"].visible && hud["armor"].hideBelow >= hud["armor"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("armor", data)}
            defaultPosition={{ x: hud["armor"].translateX, y: hud["armor"].translateY }}
          >
            <Flex
              gap={'.5vw'}
              width={'48%'}
              height={'2.5vh'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Flex
                width={'100%'}
                height={'.65vh'}
                alignItems={'center'}
                flexDirection={'row-reverse'}
                borderRadius={'2px'}
                bg={colord(hud["armor"].color).alpha(0.41).toHex()}
              >
                <Box
                  width={`${hud["armor"].value}%`}
                  filter={`drop-shadow(0px 0px 10px ${hud["armor"].color})`}
                  height={'100%'}
                  bg={hud["armor"].color}
                  borderRadius={'2px'}
                />
              </Flex>
              <Box as={Icons[hud["armor"].icon]} size={'2vh'} color={hud["armor"].color} />
            </Flex>
          </Draggable>
        )}
      </Flex>
      <Flex
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'7vh'}
        px={'1vw'}
        gap={'.5vw'}
      >
        {hud["stress"].visible && hud["stress"].hideBelow >= hud["stress"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("stress", data)}
            defaultPosition={{ x: hud["stress"].translateX, y: hud["stress"].translateY }}
          >
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
                background={colord(hud["stress"].color).darken(0.45).toHex()}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                boxSizing={'border-box'}
                transform={'rotate(-90deg)'}
              >
                <Box as={Icons[hud["stress"].icon]}
                  transform={'rotate(90deg)'}
                  size={'1.4vh'} color={hud["stress"].color} />
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
                      stroke={hud["stress"].color}
                      opacity={.4}
                      strokeWidth={'2px'}
                      strokeLinecap={'round'}
                      strokeDasharray={`150`}
                      strokeDashoffset={`0`}
                    />
                    {hud["stress"].value > 0 && (
                      <circle
                        cx={'1.25vw'}
                        cy={'1.30vw'}
                        r={'1.2vw'}
                        fill={'transparent'}
                        stroke={hud["stress"].color}
                        strokeWidth={'2px'}
                        strokeDasharray={`${(hud["stress"].value / 100) * 145} 145`}
                        strokeLinecap={'round'}
                        strokeDashoffset={0}
                        style={
                          {
                            filter: `drop-shadow(0 0 2px ${hud["stress"].color})`
                          }
                        }
                      />
                    )}
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'.9vw'}
                      fill={'transparent'}
                      stroke={hud["stress"].color}
                      strokeWidth={'1px'}
                      strokeDasharray={`145`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
                    />
                  </svg>
                </Box>
              </Flex>
              <Text fontSize={'1.2vh'} color={hud["stress"].color}>
                {generalSettings.showPercentageInStatus && hud["stress"].value + '%'}
              </Text>
            </Flex>
          </Draggable>
        )}
        {hud["hunger"].visible && hud["hunger"].hideBelow >= hud["hunger"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("hunger", data)}
            defaultPosition={{ x: hud["hunger"].translateX, y: hud["hunger"].translateY }}
          >
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
                background={colord(hud["hunger"].color).darken(0.45).toHex()}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                boxSizing={'border-box'}
                transform={'rotate(-90deg)'}
              >
                <Box as={Icons[hud["hunger"].icon]}
                  transform={'rotate(90deg)'}
                  size={'1.4vh'} color={hud["hunger"].color} />
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
                      stroke={hud["hunger"].color}
                      opacity={.4}
                      strokeWidth={'2px'}
                      strokeLinecap={'round'}
                      strokeDasharray={`150`}
                      strokeDashoffset={`0`}
                    />
                    {hud["hunger"].value > 0 && (
                      <circle
                        cx={'1.25vw'}
                        cy={'1.30vw'}
                        r={'1.2vw'}
                        fill={'transparent'}
                        stroke={hud["hunger"].color}
                        strokeWidth={'2px'}
                        strokeDasharray={`${(hud["hunger"].value / 100) * 145} 145`}
                        strokeLinecap={'round'}
                        strokeDashoffset={0}
                        style={
                          {
                            filter: `drop-shadow(0 0 2px ${hud["hunger"].color})`
                          }
                        }
                      />
                    )}
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'.9vw'}
                      fill={'transparent'}
                      stroke={hud["hunger"].color}
                      strokeWidth={'1px'}
                      strokeDasharray={`145`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
                    />
                  </svg>
                </Box>
              </Flex>
              <Text fontSize={'1.2vh'} color={hud["hunger"].color}>
                {generalSettings.showPercentageInStatus && hud["hunger"].value + '%'}
              </Text>
            </Flex>
          </Draggable>
        )}
        {hud["microphone"].visible && hud["microphone"].hideBelow >= hud["microphone"].value && (

          <Flex
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'.25vw'}
            flexDirection={'column'}
          >
            <Flex
              width={'7.5vh'}
              height={'7.5vh'}
              borderRadius={'50%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'relative'}
              boxSizing={'border-box'}
              {...generalSettings.showPercentageInStatus && { marginBottom: '2vh', marginTop: '1vh' }}
            >
              <svg width="95" height="96" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3899 69.2905C24.5643 73.2125 28.5801 76.3702 33.1402 78.5299C37.7002 80.6896 42.6877 81.7959 47.7332 81.767C52.7787 81.738 57.7532 80.5745 62.2881 78.3626C66.8231 76.1507 70.8024 72.947 73.9315 68.9888L69.5708 65.5416C66.9588 68.8458 63.6369 71.5201 59.8513 73.3665C56.0656 75.2129 51.9132 76.1842 47.7013 76.2084C43.4894 76.2326 39.3261 75.3091 35.5195 73.5062C31.7129 71.7034 28.3605 69.0674 25.7107 65.7934L21.3899 69.2905Z"
                  {
                  ...hud["microphone"].value >= 3 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M78.9451 60.1912C80.7545 55.4812 81.4813 50.4245 81.0716 45.3955C80.6619 40.3665 79.1263 35.4941 76.5784 31.139C74.0306 26.784 70.5357 23.0578 66.3527 20.2363C62.1696 17.4149 57.4055 15.5705 52.4131 14.8397L51.608 20.3398C55.7756 20.9498 59.7525 22.4895 63.2444 24.8447C66.7363 27.1999 69.6536 30.3105 71.7805 33.946C73.9074 37.5815 75.1893 41.6488 75.5313 45.8468C75.8733 50.0449 75.2666 54.2661 73.7562 58.1979L78.9451 60.1912Z"
                  {
                  ...hud["microphone"].value >= 2 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M42.2863 14.8977C37.3026 15.6857 32.5599 17.5847 28.4096 20.454C24.2592 23.3233 20.8074 27.0893 18.3097 31.4734C15.812 35.8574 14.3325 40.7472 13.9806 45.7805C13.6286 50.8138 14.4134 55.8619 16.2768 60.5508L21.4425 58.498C19.887 54.5838 19.2319 50.3699 19.5257 46.1682C19.8194 41.9665 21.0545 37.8847 23.1395 34.225C25.2245 30.5654 28.106 27.4215 31.5706 25.0264C35.0352 22.6312 38.9942 21.046 43.1544 20.3881L42.2863 14.8977Z"
                  {
                  ...hud["microphone"].value >= 1 ? {
                    fill: hud["microphone"].color,
                  } : {
                    fill: colord(hud["microphone"].color).alpha(0.41).toHex(),
                  }
                  } />
                <path d="M41.5461 48.1277V40.1354C41.5461 38.5456 42.1776 37.0209 43.3018 35.8968C44.4259 34.7727 45.9506 34.1411 47.5404 34.1411C49.1302 34.1411 50.6548 34.7727 51.779 35.8968C52.9031 37.0209 53.5346 38.5456 53.5346 40.1354V48.1277C53.5346 49.7175 52.9031 51.2422 51.779 52.3663C50.6548 53.4905 49.1302 54.122 47.5404 54.122C45.9506 54.122 44.4259 53.4905 43.3018 52.3663C42.1776 51.2422 41.5461 49.7175 41.5461 48.1277ZM57.5308 48.1277C57.5308 47.8628 57.4256 47.6087 57.2382 47.4213C57.0509 47.234 56.7967 47.1287 56.5318 47.1287C56.2668 47.1287 56.0127 47.234 55.8254 47.4213C55.638 47.6087 55.5327 47.8628 55.5327 48.1277C55.5327 50.2475 54.6907 52.2803 53.1918 53.7792C51.693 55.2781 49.6601 56.1201 47.5404 56.1201C45.4207 56.1201 43.3878 55.2781 41.8889 53.7792C40.3901 52.2803 39.548 50.2475 39.548 48.1277C39.548 47.8628 39.4428 47.6087 39.2554 47.4213C39.068 47.234 38.8139 47.1287 38.549 47.1287C38.284 47.1287 38.0299 47.234 37.8425 47.4213C37.6552 47.6087 37.5499 47.8628 37.5499 48.1277C37.553 50.6036 38.4739 52.9903 40.1348 54.8264C41.7956 56.6625 44.0782 57.8176 46.5413 58.0682V62.1144C46.5413 62.3793 46.6466 62.6335 46.8339 62.8208C47.0213 63.0082 47.2754 63.1134 47.5404 63.1134C47.8053 63.1134 48.0595 63.0082 48.2468 62.8208C48.4342 62.6335 48.5394 62.3793 48.5394 62.1144V58.0682C51.0025 57.8176 53.2852 56.6625 54.946 54.8264C56.6068 52.9903 57.5278 50.6036 57.5308 48.1277Z"
                  fill={hud["microphone"].color} />
              </svg>
            </Flex>

          </Flex>)}
        {hud["stamina"].visible && hud["stamina"].hideBelow >= hud["stamina"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("stamina", data)}
            defaultPosition={{ x: hud["stamina"].translateX, y: hud["stamina"].translateY }}
          >
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
                background={colord(hud["stamina"].color).darken(0.45).toHex()}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                boxSizing={'border-box'}
                transform={'rotate(-90deg)'}
              >
                <Box as={Icons[hud["stamina"].icon]}
                  transform={'rotate(90deg)'}
                  size={'1.4vh'} color={hud["stamina"].color} />
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
                      stroke={hud["stamina"].color}
                      opacity={.4}
                      strokeWidth={'2px'}
                      strokeLinecap={'round'}
                      strokeDasharray={`150`}
                      strokeDashoffset={`0`}
                    />
                    <svg>
                      {hud["stamina"].value > 0 && (
                        <circle
                          cx={'1.25vw'}
                          cy={'1.30vw'}
                          r={'1.2vw'}
                          fill={'transparent'}
                          stroke={hud["stamina"].color}
                          strokeWidth={'2px'}
                          strokeDasharray={`${(hud["stamina"].value / 100) * 145} 145`}
                          strokeLinecap={'round'}
                          strokeDashoffset={0}
                          style={
                            {
                              filter: `drop-shadow(0 0 2px ${hud["stamina"].color})`
                            }
                          }
                        />
                      )}
                    </svg>
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'.9vw'}
                      fill={'transparent'}
                      stroke={hud["stamina"].color}
                      strokeWidth={'1px'}
                      strokeDasharray={`145`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
                    />
                  </svg>
                </Box>
              </Flex>
              <Text fontSize={'1.2vh'} color={hud["stamina"].color}>
                {generalSettings.showPercentageInStatus && hud["stamina"].value + '%'}
              </Text>
            </Flex>
          </Draggable>
        )}
        {hud["thirst"].visible && hud["thirst"].hideBelow >= hud["thirst"].value && (
          <Draggable {...(!generalSettings.editMode && { disabled: true })}
            onStop={(e, data) => handleDragEnd("thirst", data)}
            defaultPosition={{ x: hud["thirst"].translateX, y: hud["thirst"].translateY }}
          >
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
                background={colord(hud["thirst"].color).darken(0.45).toHex()}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
                boxSizing={'border-box'}
                transform={'rotate(-90deg)'}
              >
                <Box as={Icons[hud["thirst"].icon]}
                  transform={'rotate(90deg)'}
                  size={'1.4vh'} color={hud["thirst"].color} />
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
                      stroke={hud["thirst"].color}
                      opacity={.4}
                      strokeWidth={'2px'}
                      strokeLinecap={'round'}
                      strokeDasharray={`150`}
                      strokeDashoffset={`0`}
                    />
                    {hud["thirst"].value > 0 && (
                      <circle
                        cx={'1.25vw'}
                        cy={'1.30vw'}
                        r={'1.2vw'}
                        fill={'transparent'}
                        stroke={hud["thirst"].color}
                        strokeWidth={'2px'}
                        strokeDasharray={`${(hud["thirst"].value / 100) * 145} 145`}
                        strokeLinecap={'round'}
                        strokeDashoffset={0}
                        style={
                          {
                            filter: `drop-shadow(0 0 2px ${hud["thirst"].color})`
                          }
                        }
                      />
                    )}
                    <circle
                      cx={'1.25vw'}
                      cy={'1.30vw'}
                      r={'.9vw'}
                      fill={'transparent'}
                      stroke={hud["thirst"].color}
                      strokeWidth={'1px'}
                      strokeDasharray={`145`}
                      strokeLinecap={'round'}
                      strokeDashoffset={0}
                    />
                  </svg>
                </Box>
              </Flex>
              <Text fontSize={'1.2vh'} color={hud["thirst"].color}>
                {generalSettings.showPercentageInStatus && hud["thirst"].value + '%'}
              </Text>
            </Flex>
          </Draggable>
        )}
      </Flex>
    </Flex>
  );
};

export default StatusV5;