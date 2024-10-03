import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react';
import { updateMenuData, selectMenu } from '../../Store/store';
import { useDispatch } from 'react-redux';
import Icons from '../../Constants/Icons';
import drill_bunny from '../../Assets/games/drill_bunny.png';
import hextris from '../../Assets/games/hextris.png';
import pacman from '../../Assets/games/pacman.png';
import pool_billard from '../../Assets/games/pool_billard.png';
import tetris from '../../Assets/games/tetris.png';
import tower_build from '../../Assets/games/tower_build.png';
import soon from '../../Assets/games/soon.png';
import GamesFrame from './GamesFrame';

const GameList = [
  {
    name: 'Pool Billard',
    image: pool_billard,
    url: 'https://henshmi.github.io/Classic-Pool-Game/',
  },
  {
    name: 'Drill Bunny',
    image: drill_bunny,
    url: 'https://dreamshowadventures.github.io/LudumDare29/',
  },
  {
    name: 'Pacman',
    image: pacman,
    url: 'https://rishabhdevbanshi.github.io/Pacman-Game/',
  },
  {
    name: 'Hextris',
    image: hextris,
    url: 'https://fosiper.com/games/hextris-lite/',
  },
  {
    name: 'Tetris',
    image: tetris,
    url: 'https://tetris.hericl.es/',
  },
  {
    name: 'Tower Build',
    image: tower_build,
    url: 'https://iamkun.github.io/tower_game/',
  },
  {
    name: 'SOON',
    image: soon,
    url: '',
  },
  {
    name: 'SOON',
    image: soon,
    url: '',
  },
  {
    name: 'SOON',
    image: soon,
    url: '',
  },
];

const Games = () => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();
  const [hoveredGame, setHoveredGame] = React.useState<string>('');
  const handleGameClick = (url: string) => {
    dispatch(updateMenuData('gameURL', url));
  };

  return (
    <>
      <Flex
        width={'100%'}
        height={'100%'}
        flexDir={'column'}
        gap={'1vh'}
        bg={'linear-gradient(89.97deg, #090909 6.79%, #0F0F0F 53.56%, #0B0B0B 96.72%)'}
        border={'1px solid rgba(255, 255, 255, 0.15)'}
        borderBottomColor={'transparent'}
        py={'1vh'}
        align={'center'}
        borderRadius={'12px 12px 0px 0px'}
        overflow={'hidden'}
      >
        <Grid width={'100%'} overflow={'scroll'} gridTemplateColumns={'repeat(3, 1fr)'} gap={'.5vw'} px={'.5vw'}>
          {GameList.map((game, index) => (
            <>
              <Flex
                key={index}
                fontFamily={'Rajdhani'}
                pos={'relative'}
                flexDir={'column'}
                width={'100%'}
                height={'10vh'}
                cursor={'pointer'}
                onMouseEnter={() => {
                  if(game.name !== 'SOON')  setHoveredGame(game.name)
                }}
                onMouseLeave={() => setHoveredGame('')}
                onClick={() => handleGameClick(game.url)}
              >
                <Flex flexDir={'column'} px={'.5vw'} py={'1.2vh'}
                  width={'100%'}
                  height={'100%'}
                  bg={'rgba(217, 217, 217, 0.08)'}
                  clipPath={'polygon(0% 0%, 0% 100%, 25% 100%, 87% 100%, 100% 87%, 100% 100%, 25% 100%, 100% 100%, 100% 0%)'}
                >
                  <Box
                    pos={'absolute'}
                    width={'30px'}
                    height={'30px'}
                    borderRadius={'50%'}
                    left={0}
                    right={0}
                    margin={'0 auto'}
                    top={'50%'}
                    transform={'translateY(-50%)'}
                    bg={'#D9D9D9'}
                    filter={'blur(25px)'}
                    {...(hoveredGame === game.name && { bg: '#70C9C2' })}
                  />
                  <Text fontWeight={600} fontSize={'.8vw'} lineHeight={'1'} {...(hoveredGame === game.name && { color: '#70C9C2' })}>
                    {game.name.toUpperCase()}
                  </Text>
                  <Text fontWeight={500} fontSize={'.6vw'} {...(hoveredGame === game.name && { color: '#70C9C2' })}>
                    GAME
                  </Text>
                </Flex>
                <Box
                  width={'60%'}
                  bg={`url(${game.image})`}
                  height={'55%'}
                  bgRepeat={'no-repeat'}
                  bgPosition={'center'}
                  backgroundSize={'cover'}
                  pos={'absolute'}
                  bottom={0}
                  left={0}
                  filter={'saturate(0)'}
                  {...(hoveredGame === game.name && { filter: 'saturate(1)' })}
                ></Box>
                <Box
                  pos={'absolute'}
                  width={'10px'}
                  height={'10px'}
                  right={0}
                  bottom={0}
                  bg={'#737373'}
                  // make the triangle
                  clipPath={'polygon(0% 0%, 100% 0%, 100% 100%)'}
                  transform={'rotate(90deg)'}
                />
              </Flex>
            </>
          ))}
        </Grid>
      </Flex>
      <GamesFrame />
    </>
  );
};

export default Games;