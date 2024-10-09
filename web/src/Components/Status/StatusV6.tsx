import { selectHud, selectGeneralSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { colord } from "colord";
import Icons from '../../Constants/Icons';

const hudList = ["health", "armor", "hunger", "thirst", "stamina", "stress"];

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
}

const StatusV6 = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const generalSettings = useSelector(selectGeneralSettings);
  let top = "10%";
  // fetch resolution
  const resolution = window.screen.width;
  if (resolution > 1920) {
    top = "10%";
  }

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
        mb={'12vh'}
      >
        {hudList.map((status, index) => {
          if (hud[status].visible) {
            return (
              <Flex
                key={index}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'.25vw'}
                flexDirection={'column'}
                className='hexagon-2th'
                _before={
                  {
                    borderTopColor: hud[status].color,
                    borderRightColor: hud[status].color,
                  }
                }

                _after={
                  {
                    borderBottomColor: hud[status].color,
                    borderLeftColor: hud[status].color,
                  }
                }
              >
                <Flex
                  width={'5vh'}
                  height={'3vh'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  position={'relative'}
                  boxSizing={'border-box'}
                  pos={'relative'}
                  borderColor={hud[status].color}
                  borderStyle={'solid'}
                  borderWidth={'.15vw'}
                  borderTop={0}
                  borderBottom={0}
                >
                  <Box as={Icons[hud[status].icon]}
                    size={'1.8vh'} color={'#FFF'}
                    className='status-icon-gradient'
                    zIndex={1} />
                  <Box
                    pos={'absolute'}
                    width={'95%'}
                    margin={0}
                    height={'5vh'}
                    clipPath={'polygon(50% 0, 50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0% 75%, 0% 25%)'}
                    zIndex={0}
                    overflow={'hidden'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    {...hud[status].value >= 99 && { bg: `${hud[status].color}` }}
                  >
                    <Box
                      pos={'absolute'}
                      top={hud[status].value ? `${100 - hud[status].value}%` : '100%'}
                      {...hud[status].value >= 99 && { top: top }}
                      right={'0'}
                      width={'100%'}
                      height={'100%'}
                      zIndex={0}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.5769 6.34615L43.5769 29.776C43.5769 30.787 43.0462 31.7239 42.179 32.2436L24.0444 43.1123C22.7858 43.8666 21.2142 43.8666 19.9556 43.1123L0.769882 31.6137C0.554741 31.4847 0.423077 31.2523 0.423077 31.0015L0.423077 3.66643C0.423077 2.47107 1.77191 1.77356 2.74735 2.4645C7.21065 5.62601 13.1533 5.73662 17.7312 2.7434L20.522 0.918597C20.9767 0.621308 21.5332 0.522959 22.0622 0.6464L33.409 3.29399C33.6671 3.35421 33.9313 3.38462 34.1963 3.38462L40.6154 3.38462C42.251 3.38462 43.5769 4.71054 43.5769 6.34615Z"
                          fill={colord(hud[status].color).lighten(0.025).toHex()} stroke={hud[status].color} strokeWidth="2" />
                      </svg>
                    </Box>
                  </Box>
                </Flex>
                {generalSettings.showPercentageInStatus && (
                  <Box
                    position={'absolute'}
                    bottom={'-2.5vh'}
                  >
                    <Text fontSize={'1.2vh'} color={hud[status].color}>
                      {hud[status].value + '%'}
                    </Text>
                  </Box>
                )}
              </Flex>
            )
          } else {
            return null;
          }
        })}
      </Flex>
    </>
  );
};

export default StatusV6;