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

const StatusV9 = () => {
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
                  key={index}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'.25vw'}
                  flexDirection={'column'}
                  pos={'relative'}
                >
                  <Flex
                    width={'4.5vh'}
                    height={'5vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    boxSizing={'border-box'}
                    pos={'relative'}
                  >
                    <Box
                      width={'100%'}
                      height={'100%'}
                      pos={'absolute'}
                      filter={`drop-shadow(0px 0px 8px ${hud[status].color})`}
                      zIndex={0}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 75 87" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style={
                          {
                            filter: `drop-shadow(0px 0px 4px ${hud[status].color})`,
                          }
                        }
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M37.0635 0L0 22.401V63.741L36.8598 86.3456L74.3306 63.741V22.401L37.0635 0ZM29.9359 11.6078L40.7291 5.09113L71.8868 23.8265V58.2426L61.2972 64.1483V68.6285L47.4494 76.1634L43.9874 74.5342L33.1942 81.0508L2.03645 61.7045V28.714L12.8297 21.9937V17.9208L26.6775 9.77498L29.9359 11.6078Z"
                          fill={hud[status].color}
                        />
                      </svg>
                    </Box>
                    <Box
                      width={'100%'}
                      margin={0}
                      height={'100%'}
                      pos={'absolute'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      zIndex={0}
                    >
                      <svg width="75%" height="100%" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.1305 0.260254L24.0859 5.71341L21.3555 4.17971L9.75113 10.9961V14.4044L0.706543 20.0279V47.6345L26.8164 63.8236L35.861 58.3704L38.7621 59.7337L50.3664 53.4285V49.6794L59.2404 44.7375V15.9381L33.1305 0.260254Z"
                          fill={`url(#linear-${status})`}
                        />
                        <defs>
                          <linearGradient id={`linear-${status}`}
                            x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop stopColor={colord(hud[status].color).darken(0.35).toHex()} />
                            <stop offset="1" stopColor={hud[status].color} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Box>
                    <Box as={Icons[hud[status].icon]} size={'1.4vh'} color={hud[status].color} zIndex={1} />
                  </Flex>
                  {/* {generalSettings.showPercentageInStatus && ( */}
                  <Box
                    position={'absolute'}
                    bottom={'-2.5vh'}
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

export default StatusV9;