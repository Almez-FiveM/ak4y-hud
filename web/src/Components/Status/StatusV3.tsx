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

const StatusV3 = () => {
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
                key={index}
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
                  borderRadius={'6px'}
                  className='status-gradient box-gradient'
                  overflow={'hidden'}
                  pos={'relative'}
                  _before={
                    {
                      background: `radial-gradient(circle, ${colord(hud[status].color).lighten(.20).toHex()} 0%, ${colord(hud[status].color).darken(0.20).toHex()} 100%)`,
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
                    {...hud[status].value >= 99 && { top: '-32%' }}
                    right={'0'}
                    width={'100%'}
                    height={'100%'}
                    zIndex={0}
                  >
                    <svg width="100%" height="100" viewBox="0 0 60 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.1331 2.04941C28.6012 1.74334 29.1376 1.5575 29.6948 1.50837L45.3038 0.131934C46.2861 0.0453143 47.2746 0.202132 48.1819 0.588513L57.8554 4.7083C59.1559 5.26217 60 6.53913 60 7.95269V7.95269C60 9.85156 58.4607 11.3909 56.5618 11.3909L28.8462 11.3909L0.346913 11.3909C0.155318 11.3909 0 11.2356 0 11.044L0 6.58288C0 4.48463 2.36764 3.26028 4.07986 4.4731V4.4731C9.9728 8.64727 17.8189 8.79332 23.8631 4.84134L28.1331 2.04941Z" 
                        fill={hud[status].color} />
                      <path d="M59.4231 11.6726L59.4231 102C59.4231 104.167 57.6667 105.923 55.5 105.923L30 105.923H3.60495C1.93262 105.923 0.576923 104.567 0.576923 102.895L0.576923 9.58289C0.576923 7.95285 2.41624 7.0017 3.74639 7.94389C9.8327 12.255 17.9363 12.4059 24.1788 8.32421L28.4489 5.53228C28.8375 5.27815 29.2829 5.12385 29.7455 5.08306L45.3545 3.70663C46.2424 3.62834 47.1358 3.77008 47.9558 4.1193L56.967 7.95702C58.4564 8.59133 59.4231 10.0537 59.4231 11.6726Z"
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
        } else {
          return null;
        }
      })}
    </Flex>
  );
};

export default StatusV3;