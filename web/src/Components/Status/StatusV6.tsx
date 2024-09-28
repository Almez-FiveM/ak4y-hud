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
                  borderWidth={'4px'}
                  borderTop={0}
                  borderBottom={0}
                >
                  <Box as={Icons[hud[status].icon]}
                    size={'1.8vh'} color={'#FFF'}
                    className='status-icon-gradient'
                    zIndex={1} />
                  <Box
                    pos={'absolute'}
                    width={'80%'}
                    margin={0}
                    height={'4vh'}
                    clipPath={'polygon(50% 0, 50% 0, 100% 25%, 100% 75%, 50% 100%, 50% 100%, 0% 75%, 0% 25%)'}
                    zIndex={0}
                    overflow={'hidden'}
                  // background={colorDarken(hud[status].color, 0.45)}
                  >
                    <Box
                      pos={'absolute'}
                      top={hud[status].value ? `${80 - hud[status].value}%` : '100%'}
                      {...hud[status].value >= 99 && { top: '0%' }}
                      right={'0'}
                      width={'100%'}
                      height={'100%'}
                      zIndex={0}
                    >
                      {/* <svg width="50" height="70" viewBox="0 0 60 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.1331 2.04941C28.6012 1.74334 29.1376 1.5575 29.6948 1.50837L45.3038 0.131934C46.2861 0.0453143 47.2746 0.202132 48.1819 0.588513L57.1931 4.42623C58.8952 5.15115 60 6.82247 60 8.67256L60 62C60 64.4853 57.9853 66.5 55.5 66.5L28.8462 66.5H2.2962C1.02805 66.5 0 65.472 0 64.2038L0 6.58288C0 4.48463 2.36764 3.26028 4.07986 4.4731V4.4731C9.9728 8.64727 17.8189 8.79332 23.8631 4.84134L28.1331 2.04941Z"
                        fill={hud[status].color} />
                      <path d="M59.4231 12.6726L59.4231 62C59.4231 64.1667 57.6667 65.9231 55.5 65.9231H30H2.15472C1.28333 65.9231 0.576923 65.2167 0.576923 64.3453L0.576923 10.5829C0.576923 8.95284 2.41624 8.0017 3.74639 8.94389C9.8327 13.255 17.9363 13.4059 24.1788 9.32421L28.4489 6.53228C28.8375 6.27815 29.2829 6.12385 29.7455 6.08306L45.3545 4.70663C46.2424 4.62834 47.1358 4.77008 47.9558 5.1193L56.967 8.95702C58.4564 9.59133 59.4231 11.0537 59.4231 12.6726Z"
                        fill={colord(hud[status].color).darken(0.15).toHex()}
                        stroke={colord(hud[status].color).lighten(0.025).toHex()}
                        strokeWidth="1"
                      />
                    </svg> */}
                      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.5769 6.34615L43.5769 29.776C43.5769 30.787 43.0462 31.7239 42.179 32.2436L24.0444 43.1123C22.7858 43.8666 21.2142 43.8666 19.9556 43.1123L0.769882 31.6137C0.554741 31.4847 0.423077 31.2523 0.423077 31.0015L0.423077 3.66643C0.423077 2.47107 1.77191 1.77356 2.74735 2.4645C7.21065 5.62601 13.1533 5.73662 17.7312 2.7434L20.522 0.918597C20.9767 0.621308 21.5332 0.522959 22.0622 0.6464L33.409 3.29399C33.6671 3.35421 33.9313 3.38462 34.1963 3.38462L40.6154 3.38462C42.251 3.38462 43.5769 4.71054 43.5769 6.34615Z"
                          fill={colord(hud[status].color).lighten(0.025).toHex()} stroke={hud[status].color} strokeWidth="2" />
                      </svg>

                    </Box>
                  </Box>
                </Flex>
                {generalSettings.showPercentageInStatus &&(
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