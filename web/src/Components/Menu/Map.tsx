import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Box, Divider, Flex, Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { selectMenu, updateMenuData } from '../../Store/store';
import { useDispatch } from 'react-redux';
import QueueItem from './QueueItem';
import Icons from '../../Constants/Icons';
import { usePlayer } from '../../Contexts/PlayerContext';


const Map = () => {
  const menu = useSelector(selectMenu);
  const list = menu.media.queuedSongs;
  const dispatch = useDispatch();
  const { player } = usePlayer();

  const handleVolumeChange = (value: number) => {
    let newMedia = {
      ...menu.media,
      volume: value
    }
    dispatch(updateMenuData('media', newMedia));
  }

  const secondsToMinutes = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let remainingSecondsString = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${minutesString}:${remainingSecondsString}`;
  }

  const handleNextSong = () => {
    if (menu.media.queuedSongs.length > 0) {
      let newMedia = {
        ...menu.media,
        currentURL: menu.media.queuedSongs[0].url,
      }

      dispatch(updateMenuData('media', newMedia));
      dispatch({ type: 'REMOVE_SONG_FROM_QUEUE', payload: 0 });
    } else {
      dispatch(updateMenuData('media', {
        ...menu.media,
        thumbnail: 'https://files.catbox.moe/i5bfz3.png',
        currentURL: '',
        currentSong: {
          ...menu.media.currentSong,
          songName: 'NO MEDIA',
          artist: 'Artist',
          duration: 0,
          currentTime: 0
        }
      }));
    }
  }

  const handlePauseOrPlay = () => {
    if (player) {
      if (player.getPlayerState() === 1) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  }

  return (
    <>
      <Flex
        width={'100%'}
        height={'100%'}
        flexDir={'column'}
        align={'center'}
        justify={'flex-end'}
        overflow={'hidden'}
        paddingBottom={'.5vh'}
      >
        <Flex width={'100%'} bg={'#171717'} borderRadius={'4px'}>
          <Flex overflow={'hidden'} pos={'relative'} flexDir={'column'} width={'100%'} height={'8vh'} align={'center'} justify={'flex-end'} gap={'1vh'} paddingBottom={'1vh'} px={'.5vw'}>
            <Flex width={'100%'} height={'40%'} align={'center'} justifyContent={'space-between'}>
              <Flex align={'center'} gap={'.5vw'} width={'50%'}>
                <Flex width={'2vw'} height={'2vw'}>
                  <img src={menu.media.thumbnail} alt="" width={'100%'} />
                </Flex>
                <Flex flexDir={'column'} justify={'center'} lineHeight={'1'} width={'65%'} fontFamily={'Rajdhani'}>
                  <Text fontSize={'.8vw'} fontWeight={600} color={'#fff'}
                    whiteSpace={'nowrap'} overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    width={'100%'}
                  >{menu.media.currentSong.songName}</Text>
                  <Text fontSize={'.65vw'} color={'#7D7D7D'} fontWeight={600}>{menu.media.currentSong.artist}</Text>
                </Flex>
              </Flex>
              <Flex width={'45%'} gap={'.5vw'} align={'center'} justify={'space-between'}>
                <Flex width={'65%'} gap={'.5vw'}>
                  <svg style={{'transform': 'rotate(180deg)'}} width="12" height="15" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.63163 7.22074C8.87275 6.81877 9.00011 6.35884 9.00011 5.8901C9.00011 5.42136 8.87275 4.96143 8.63163 4.55946C8.55749 4.43572 8.45828 4.32885 8.34037 4.24574C8.22246 4.16262 8.08847 4.10509 7.94701 4.07684L6.77977 3.84312C6.71016 3.82934 6.64738 3.79211 6.60189 3.73763L5.17611 2.02573C4.36118 1.04671 3.95303 0.55789 3.58969 0.689575C3.22497 0.82126 3.22497 1.45831 3.22497 2.73242V9.04916C3.22497 10.3226 3.22497 10.9589 3.589 11.0913C3.95234 11.2223 4.36049 10.7335 5.17542 9.75516L6.60327 8.04256C6.64858 7.98823 6.7111 7.95101 6.78046 7.93708L7.9477 7.70335C8.08916 7.67511 8.22315 7.61758 8.34106 7.53446C8.45897 7.45134 8.55749 7.34448 8.63163 7.22074Z" fill="#D4D4D4" />
                    <path d="M1.47652 3.4522C0.833244 4.09545 0.470309 4.9669 0.466822 5.87661C0.463335 6.78632 0.81958 7.66053 1.45791 8.30869" fill="#D4D4D4" />
                  </svg>
                  <Slider aria-label='slider-ex-1' value={menu.media.volume} onChange={handleVolumeChange}>
                    <SliderTrack>
                      <SliderFilledTrack bg={'#fff'} />
                    </SliderTrack>
                    <SliderThumb borderRadius={'2px'} height={'12px'} width={'4px'} />
                  </Slider>
                </Flex>
                <Flex width={'30%'} height={'15px'} align={'center'} justify={'center'} gap={'.6vw'} cursor={'pointer'} onClick={handlePauseOrPlay}>
                  <Flex align={'center'} justify={'center'}>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.23316 9.29185V1.18536C5.23316 0.415751 4.90821 0.10791 4.0873 0.10791H2.01792C1.19701 0.10791 0.87207 0.415751 0.87207 1.18536V9.29185C0.87207 10.0614 1.19701 10.3693 2.01792 10.3693H4.0873C4.90821 10.3693 5.23316 10.0614 5.23316 9.29185Z" fill="#898989" />
                      <path d="M11.1335 9.29185V1.18536C11.1335 0.415751 10.8086 0.10791 9.98769 0.10791H7.91831C7.10311 0.10791 6.77246 0.415751 6.77246 1.18536V9.29185C6.77246 10.0614 7.0974 10.3693 7.91831 10.3693H9.98769C10.8086 10.3693 11.1335 10.0614 11.1335 9.29185Z" fill="#898989" />
                    </svg>
                  </Flex>
                  <Flex align={'center'} justify={'center'} cursor={'pointer'} onClick={handleNextSong}>
                    <svg width="9" height="11" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.109863 1.90301V6.57927C0.109863 7.537 1.15065 8.13802 1.98134 7.65915L4.00918 6.4913L6.03703 5.31858C6.86772 4.83971 6.86772 3.64255 6.03703 3.16369L4.00918 1.99096L1.98134 0.823125C1.15065 0.344261 0.109863 0.940394 0.109863 1.90301Z" fill="#898989" />
                      <path d="M8.16211 7.25854V1.21899" stroke="#898989" strokeWidth="0.732956" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex width={'100%'} height={'fit-content'} gap={'.5vw'} align={'center'} justify={'center'} userSelect={'none'}>
              <Text fontSize={'.6vw'}>{secondsToMinutes(menu.media.currentSong.currentTime)}</Text>
              <Slider aria-label='slider-ex-2' value={menu.media.currentSong.currentTime} min={0} max={menu.media.currentSong.duration}>
                <SliderTrack>
                  <SliderFilledTrack bg={'#11A8FD'} />
                </SliderTrack>
                <SliderThumb borderRadius={'50%'} bg={'#11A8FD'} />
              </Slider>
              <Text fontSize={'.6vw'}>{secondsToMinutes(menu.media.currentSong.duration)}</Text>
            </Flex>
            <Flex
              pos={'absolute'}
              bg={'#50BCF9'}
              width={'10vw'}
              bottom={'-8vh'}
              height={'4vw'}
              borderRadius={'50%'}
              filter={'blur(50px)'}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Map;