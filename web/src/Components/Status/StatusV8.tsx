import { selectGeneralSettings, selectHud } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';
import Draggable from 'react-draggable';

const hudList = ["health", "armor", "hunger", "thirst", "stamina", "stress"];


interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  translateX: number;
  translateY: number;
}

const StatusV8 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  const dispatch = useDispatch();
  return (
    <>
      <Flex
        position={'absolute'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'auto'}
        padding={'1vh 1vw'}
        gap={'.5vw'}
        pl={'1vw'}
        mb={'14vh'}
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
                  className='hexagon'
                  pos={'relative'}
                  _before={
                    {
                      borderTopColor: colord(hud[status].color).darken(0.35).toHex(),
                      borderRightColor: colord(hud[status].color).darken(0.35).toHex(),
                    }
                  }

                  _after={
                    {
                      borderBottomColor: colord(hud[status].color).darken(0.35).toHex(),
                      borderLeftColor: colord(hud[status].color).darken(0.35).toHex(),
                    }
                  }
                >
                  <Box
                    pos={'absolute'}
                    width={'55%'}
                    top={'-48%'}
                    left={'calc(50% - .35vh)'}
                    zIndex={99}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M41.2269 29.4812L0.563477 5.19227L7.65911 1.09863L41.2269 21.5668V29.4812Z"
                        fill={hud[status].color}
                      />
                    </svg>
                  </Box>
                  <Flex
                    width={'5vh'}
                    height={'3vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    boxSizing={'border-box'}
                    pos={'relative'}
                    borderColor={colord(hud[status].color).darken(0.35).toHex()}
                    borderStyle={'solid'}
                    borderWidth={'2px'}
                    borderTop={0}
                    borderBottom={0}
                  >
                    <Box
                      pos={'absolute'}
                      width={'100%'}
                      margin={0}
                      height={'6vh'}
                      clipPath={'polygon(50% 0, 50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0% 75%, 0% 25%)'}
                      zIndex={0}
                      background={`conic-gradient(from 260.39deg at 33.58% 74.99%, rgba(0, 0, 0, 0) 0deg, ${hud[status].color} 0deg, rgba(0, 0, 0, 0) 360deg)`}
                      overflow={'hidden'}
                    />
                    <Box
                      pos={'absolute'}
                      width={'85%'}
                      margin={0}
                      height={'4.5vh'}
                      clipPath={'polygon(50% 0, 50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0% 75%, 0% 25%)'}
                      zIndex={0}
                      background={`radial-gradient(35% 35% at 50% 50%, ${colord(hud[status].color).alpha(0.01).toHex()} 0%, #121212 100%)`}
                      overflow={'hidden'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Box as={Icons[hud[status].icon]} size={'1.4vh'} color={hud[status].color} zIndex={1} />
                    </Box>
                  </Flex>
                  {/* {generalSettings.showPercentageInStatus && ( */}
                  <Box
                    position={'absolute'}
                    bottom={'-4vh'}
                    border={`1px solid ${hud[status].color}`}
                    width={'4vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    background={colord(hud[status].color).darken(0.35).toHex()}
                    className='cubic-text-bg'
                    _before={
                      {
                        background: hud[status].color,
                      }
                    }
                    _after={
                      {
                        background: hud[status].color,
                      }
                    }
                  >
                    <Text fontSize={'1vh'} color={'#fff'}>
                      {hud[status].value + '%'}
                    </Text>
                  </Box>
                </Flex>
              </Draggable>
            )
          } else {
            return null;
          }
        })}
      </Flex>
    </>
  );
};

export default StatusV8;