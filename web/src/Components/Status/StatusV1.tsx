import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import Icons from '../../Constants/Icons';
import Draggable from 'react-draggable';

const hudList = ["microphone", "health", "armor", "hunger", "thirst", "stamina", "stress"];

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  translateX: number;
  translateY: number;
}

const StatusV1 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();
  return (
    <Flex
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'auto'}
      padding={'1vh 1vw'}
      gap={'.5vw'}
      pl={'1vw'}
    >
      {hudList.map((status, index) => {
        if (hud[status].visible) {
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
                >
                  <Flex
                    width={'4.5vh'}
                    height={'4.5vh'}
                    background={'#101010'}
                    border={'2px solid rgba(255, 255, 255, 0.26)'}
                    borderRadius={'50%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                  >
                    <Box as={Icons[hud[status].icon]}
                      size={'1.4vh'} color={hud[status].color} />
                    <Box
                      pos={'absolute'}
                      top={0}
                      right={0}
                      width={'100%'}
                      height={'100%'}
                      transform={'rotate(90deg)'}
                    >
                      <svg>
                        <circle
                          cx={'1.2vw'}
                          cy={'2.1vh'}
                          r={'.9vw'}
                          fill={'transparent'}
                          stroke={hud[status].color}
                          strokeWidth={'2px'}
                          strokeDasharray={`${(hud[status].value / 100) * 144.097} 144.097`}
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
        }
      })}
    </Flex>
  );
};

export default StatusV1;