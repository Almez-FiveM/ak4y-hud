import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import Icons from '../../Constants/Icons';
import { colord } from "colord";
import Draggable from 'react-draggable';
import React from 'react';
import ReactDOM from 'react-dom';

const hudList = ["health", "armor", "hunger", "thirst", "stamina", "stress"];

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
  translateX: number;
  translateY: number;
}

const StatusV10 = () => {
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
        mb={'8vh'}
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
                >
                  <Flex
                    width={'4.5vh'}
                    height={'4.5vh'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'relative'}
                    boxSizing={'border-box'}
                    pos={'relative'}
                    className='status-circular-wrapper'
                  >
                    <Box as={Icons[hud[status].icon]} size={'1.4vh'} color={hud[status].color} zIndex={1} />
                    {[...Array(5)].map((_, i) => {
                      const thresholds = [80, 60, 40, 20, 0];
                      let opacity = hud[status].value >= thresholds[i] ? 1 : 0.5;
                      if (i === 4 && hud[status].value === 0) opacity = 0.5;
                      return (
                        <Box
                          key={i}
                          position={'absolute'}
                          width={'100%'}
                          height={'100%'}
                          transform={`rotate(${i * 72}deg)`}
                          opacity={opacity}
                          filter={`drop-shadow(0px 0px 10px ${colord(hud[status].color).alpha(0.5).toHex()})`}
                        >
                          <svg style={{ transform: 'rotate(150deg)', boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)' }} width="30" height="13" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_216_1039" maskUnits="userSpaceOnUse" x="-2.01072e-06" y="-1.61732e-06" width="27" height="12" fill="black">
                              <rect fill="white" x="-2.01072e-06" y="-1.61732e-06" width="27" height="12" />
                              <path d="M25.5001 7.19326C25.6976 7.51438 25.5935 7.93604 25.263 8.1176C21.6307 10.1134 17.5081 11.1087 13.3352 10.9906C9.16272 10.8726 5.10628 9.64617 1.59821 7.44888C1.27845 7.2486 1.19876 6.82124 1.41486 6.51196L4.79205 1.6785C5.00198 1.37804 5.41295 1.30203 5.72594 1.49278C8.07479 2.92427 10.7735 3.72291 13.5477 3.80139C16.3218 3.87987 19.0633 3.23513 21.4928 1.9388C21.8164 1.76612 22.2226 1.86585 22.4148 2.17827L25.5001 7.19326Z" />
                            </mask>
                            <g filter="url(#filter0_i_216_1021)">
                              <path d="M25.5001 7.19326C25.6976 7.51438 25.5935 7.93604 25.263 8.1176C21.6307 10.1134 17.5081 11.1087 13.3352 10.9906C9.16272 10.8726 5.10628 9.64617 1.59821 7.44888C1.27845 7.2486 1.19876 6.82124 1.41486 6.51196L4.79205 1.6785C5.00198 1.37804 5.41295 1.30203 5.72594 1.49278C8.07479 2.92427 10.7735 3.72291 13.5477 3.80139C16.3218 3.87987 19.0633 3.23513 21.4928 1.9388C21.8164 1.76612 22.2226 1.86585 22.4148 2.17827L25.5001 7.19326Z"
                                {...(opacity === 1 ? {
                                  fill: hud[status].color,
                                  fillOpacity: 1
                                } : {
                                  fill: '#525252',
                                  fillOpacity: 0.17
                                })}
                              />
                            </g>
                            <path d="M25.5001 7.19326C25.6976 7.51438 25.5935 7.93604 25.263 8.1176C21.6307 10.1134 17.5081 11.1087 13.3352 10.9906C9.16272 10.8726 5.10628 9.64617 1.59821 7.44888C1.27845 7.2486 1.19876 6.82124 1.41486 6.51196L4.79205 1.6785C5.00198 1.37804 5.41295 1.30203 5.72594 1.49278C8.07479 2.92427 10.7735 3.72291 13.5477 3.80139C16.3218 3.87987 19.0633 3.23513 21.4928 1.9388C21.8164 1.76612 22.2226 1.86585 22.4148 2.17827L25.5001 7.19326Z" stroke="white" strokeOpacity="0.18" strokeWidth="1.3468" mask="url(#path-1-outside-1_216_1039)" />
                            <defs>
                              <filter id="filter0_i_216_1021" x="0.946655" y="0.871094" width="33.6664" height="16.3057" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3" />
                                <feGaussianBlur stdDeviation="1.3468" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_216_1021" />
                              </filter>
                            </defs>
                          </svg>
                        </Box>
                      )
                    })}
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
    </>
  );
};

export default StatusV10;