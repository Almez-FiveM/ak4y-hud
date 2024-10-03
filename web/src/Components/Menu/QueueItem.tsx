import React from 'react';
import { useSelector } from 'react-redux';
import {
  Divider, Flex, Text,
} from '@chakra-ui/react';
import { selectMenu, updateMenuData } from '../../Store/store';
import { useDispatch } from 'react-redux';

interface QueueItemProps {
  id: number;
  data: {
    songName: string;
    artist: string;
  };
  handleMoveUp: (id: number) => void;
  handleMoveDown: (id: number) => void;
}

const QueueItem: React.FC<QueueItemProps> = ({ id, data, handleMoveUp, handleMoveDown }) => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();

  const handleRemoveFromQueue = (id: number) => {
    dispatch({ type: 'REMOVE_SONG_FROM_QUEUE', payload: id });
  }

  const handlePlaySong = (id: number) => {
    let newMedia = {
      ...menu.media,
      currentURL: menu.media.queuedSongs[id].url,
    }
    dispatch(updateMenuData('media', newMedia));
    dispatch({ type: 'REMOVE_SONG_FROM_QUEUE', payload: id });
  }

  return (
    <Flex overflow={'hidden'} borderRadius={'4px'} minHeight={'4.5vh'} width={'100%'} height={'4vh'} bg={'rgba(255, 255, 255, 0.04)'} align={'center'}>
      <Flex width={'65%'} height={'100%'} align={'center'} gap={'.6vw'} fontFamily={'Rajdhani'}>
        <Divider boxShadow={'0px 0px 35px 12px rgba(80, 188, 249, 0.59)'} height={'45%'} width={'3px'} bg={'#50BCF9'} opacity={'1'} borderRadius={'0px 2px 2px 0px'} />
        <Text fontSize={'.7vw'} fontWeight={'700'} color={'#50BCF9'}>{(id + 1)}</Text>
        <Flex fontFamily={'Roboto'} gap={'.4vh'} ml={'.5vw'} flexDir={'column'} width={'75%'}>
          <Text lineHeight={'1'} fontSize={'.7vw'} width={'100%'} 
            whiteSpace={'nowrap'} overflow={'hidden'}
            textOverflow={'ellipsis'} color={'#FFFFFF'}
          >{data.songName}</Text>
          <Text lineHeight={'1'} fontSize={'.6vw'} color={'#666666'}>{data.artist}</Text>
        </Flex>
      </Flex>
      <Flex width={'45%'} height={'100%'} align={'center'} justify={'flex-end'} px={'.8vw'} gap={'.6vw'} fontFamily={'Roboto'}>
        <Flex gap={'0.1vw'}>
          <Flex align={'center'} justify={'center'} cursor={'pointer'} onClick={() => {handleMoveUp(id)}}>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.2394 0.771037C5.37025 0.770719 5.49896 0.80427 5.61301 0.868428C5.72706 0.932585 5.82256 1.02517 5.89023 1.13716L10.1363 8.07815C10.208 8.19517 10.2471 8.3292 10.2497 8.4664C10.2522 8.6036 10.2181 8.73898 10.1508 8.85858C10.0846 8.97703 9.98797 9.07571 9.87096 9.14446C9.75395 9.21321 9.62073 9.24956 9.48502 9.24976L0.993774 9.24976C0.858059 9.24956 0.724846 9.21321 0.607834 9.14446C0.490822 9.07571 0.394234 8.97704 0.328002 8.85858C0.260726 8.73898 0.226595 8.6036 0.229136 8.4664C0.231677 8.3292 0.270796 8.19517 0.342455 8.07815L4.58856 1.13716C4.65623 1.02517 4.75173 0.932585 4.86578 0.868428C4.97983 0.80427 5.10854 0.770719 5.2394 0.771037Z" fill="#717171" />
            </svg>
          </Flex>
          <Flex align={'center'} justify={'center'} cursor={'pointer'} onClick={() => {handleMoveDown(id)}}>
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.23961 9.24971C5.10875 9.25003 4.98004 9.21648 4.86599 9.15232C4.75195 9.08817 4.65644 8.99559 4.58877 8.88359L0.342665 1.9426C0.271007 1.82558 0.231888 1.69155 0.229347 1.55435C0.226806 1.41716 0.260936 1.28177 0.328213 1.16217C0.394444 1.04372 0.491032 0.945039 0.608044 0.876288C0.725057 0.807537 0.85827 0.771194 0.993985 0.770996L9.48523 0.770996C9.62094 0.771194 9.75416 0.807537 9.87117 0.876288C9.98818 0.945039 10.0848 1.04372 10.151 1.16217C10.2183 1.28177 10.2524 1.41716 10.2499 1.55435C10.2473 1.69155 10.2082 1.82558 10.1365 1.9426L5.89045 8.88359C5.82277 8.99559 5.72727 9.08817 5.61322 9.15232C5.49917 9.21648 5.37046 9.25003 5.23961 9.24971Z" fill="#717171" />
            </svg>
          </Flex>
        </Flex>
        <Flex align={'center'} justify={'center'} cursor={'pointer'}
          onClick={() => {
            handleRemoveFromQueue(id);
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.000488281" y="1.50952" width="2.13494" height="11.7422" rx="0.597784" transform="rotate(-45 0.000488281 1.50952)" fill="#717171" />
            <rect x="1.50977" y="9.81274" width="2.13494" height="11.7422" rx="0.597784" transform="rotate(-135 1.50977 9.81274)" fill="#717171" />
          </svg>
        </Flex>
        <Flex align={'center'} justify={'center'} cursor={'pointer'} onClick={() => {handlePlaySong(id)}}>
          <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47872 5.01039C8.47904 5.14125 8.44549 5.26996 8.38133 5.38401C8.31717 5.49805 8.22459 5.59356 8.11259 5.66123L1.1716 9.90733C1.05458 9.97899 0.920552 10.0181 0.783356 10.0207C0.64616 10.0232 0.510773 9.98906 0.391177 9.92179C0.272721 9.85556 0.174043 9.75897 0.105292 9.64196C0.0365411 9.52494 0.000197929 9.39173 0 9.25602V0.76477C0.000197929 0.629056 0.0365411 0.495843 0.105292 0.37883C0.174043 0.261818 0.272721 0.16523 0.391177 0.0989983C0.510773 0.0317218 0.64616 -0.0024085 0.783356 0.000132165C0.920552 0.00267283 1.05458 0.0417924 1.1716 0.113451L8.11259 4.35955C8.22459 4.42723 8.31717 4.52273 8.38133 4.63678C8.44549 4.75083 8.47904 4.87954 8.47872 5.01039Z" fill="#717171" />
          </svg>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QueueItem;