import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import Draggable from 'react-draggable';

const hudList = ["health", "thirst", "hunger", "stamina", "armor", "stress"];

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  translateX: number;
  translateY: number;
}

const StatusV4 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();
  let top = "-17%";
  // fetch resolution
  const resolution = window.screen.width;
  if (resolution > 1920) {
    top = "-4%";
  } 

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
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'.25vw'}
                  flexDirection={'column'}
                >
                  <Flex
                    width={'4.5vh'}
                    height={'4.5vh'}
                    background={'transparent'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    boxSizing={'border-box'}
                    borderRadius={'50%'}
                    className='status-gradient'
                    overflow={'hidden'}
                    pos={'relative'}
                    _before={
                      {
                        background: `radial-gradient(circle, ${hud[status].color} 0%, ${colord(hud[status].color).darken(0.40).toHex()} 100%)`,
                      }
                    }
                  >
                    <Box as={Icons[hud[status].icon]}
                      size={'1.4vh'} color={'#FFF'}
                      className='status-icon-gradient'
                      zIndex={1} />
                    <Box
                      pos={'absolute'}
                      top={hud[status].value ? `${80 - hud[status].value}%` : '100%'}
                      {...hud[status].value >= 99 && { top: top }}
                      right={'0'}
                      width={'100%'}
                      height={'100%'}
                      zIndex={0}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 60 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.1331 2.04941C28.6012 1.74334 29.1376 1.5575 29.6948 1.50837L45.3038 0.131934C46.2861 0.0453143 47.2746 0.202132 48.1819 0.588513L57.1931 4.42623C58.8952 5.15115 60 6.82247 60 8.67256L60 62C60 64.4853 57.9853 66.5 55.5 66.5L28.8462 66.5H2.2962C1.02805 66.5 0 65.472 0 64.2038L0 6.58288C0 4.48463 2.36764 3.26028 4.07986 4.4731V4.4731C9.9728 8.64727 17.8189 8.79332 23.8631 4.84134L28.1331 2.04941Z"
                          fill={hud[status].color} />
                        <path d="M59.4231 12.6726L59.4231 62C59.4231 64.1667 57.6667 65.9231 55.5 65.9231H30H2.15472C1.28333 65.9231 0.576923 65.2167 0.576923 64.3453L0.576923 10.5829C0.576923 8.95284 2.41624 8.0017 3.74639 8.94389C9.8327 13.255 17.9363 13.4059 24.1788 9.32421L28.4489 6.53228C28.8375 6.27815 29.2829 6.12385 29.7455 6.08306L45.3545 4.70663C46.2424 4.62834 47.1358 4.77008 47.9558 5.1193L56.967 8.95702C58.4564 9.59133 59.4231 11.0537 59.4231 12.6726Z"
                          fill={colord(hud[status].color).darken(0.15).toHex()}
                          stroke={colord(hud[status].color).lighten(0.025).toHex()}
                          strokeWidth="1"
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
        return null;
      })}
    </Flex>
  );
};

export default StatusV4;