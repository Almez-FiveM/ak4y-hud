import React from 'react';
import { Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import { selectUserInfoSettings } from '../../Store/store';
import { useSelector } from 'react-redux';
import InfoList from '../../Constants/InfoList';
interface SettingsItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  index?: number;
  click?: (index: number) => void;
}

const InfoItem: React.FC<SettingsItemProps> = ({ children, style, index, click}) => {
  const info = useSelector(selectUserInfoSettings);
  const isSelected = info.selectedUserInfo === index;
  const axis = style?.flexDirection === 'column' ? 'row' : 'column';
  const StatusData = InfoList[index as number];
  return (
    <Flex
      width={'100%'}
      height={'60%'}
      className="settings-item"
      bg={'#272223'}
      border={'1px solid  rgba(255, 255, 255, 0.15)'}
      position={'relative'}
      overflow={'hidden'}
    >
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
        className='settings-item-content'
      >
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          height={'100%'}
        >
          <Image
            src={StatusData.image}
            width={'80%'}
          />
        </Flex>
        <Divider w={'100%'}></Divider>
        <Flex
          width={'100%'}
          height={'40%'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          paddingLeft={'1.5vw'}
        >
          <Text
            fontSize={'1vw'}
            color={'#FFF'}
            width={'100%'}
            fontWeight={'semibold'}
            lineHeight={'1'}
          >
            {StatusData.label}
          </Text>
          <Text
            fontSize={'.6vw'}
            lineHeight={'1'}
          >
            {StatusData.desc}
          </Text>
        </Flex>
      </Box>
      <Box
        pos={'absolute'}
        left={'0'}
        top={'0'}
        fontSize={'.6vw'}
        padding={'0.5vh .6vw'}
        bg={isSelected ? '#E33952' : '#6D6D6D'}
      >
        <Text>{isSelected ? 'SELECTED' : 'NOT ACTIVE'}</Text>
      </Box>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={2}
        pos={'absolute'}
        top={'1vh'}
        right={'.6vw'}
      >
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          cursor={'pointer'}
          onClick={
            () => {
              click && click(index as number);
            }
          }
          {...isSelected ? {
            style: {
              filter: 'drop-shadow(0px 0px 8px rgba(232, 17, 49, 0.87))',
            }
          } : {}}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9705 13.9705 18 9 18C4.02943 18 0 13.9705 0 9C0 4.02943 4.02943 0 9 0C13.9705 0 18 4.02943 18 9ZM12.6273 6.2727C12.8909 6.5363 12.8909 6.9637 12.6273 7.22727L8.12727 11.7273C7.86366 11.9909 7.43634 11.9909 7.1727 11.7273L5.3727 9.92727C5.1091 9.66366 5.1091 9.23634 5.3727 8.97273C5.6363 8.70912 6.0637 8.70912 6.3273 8.97273L7.65 10.2954L11.6727 6.2727C11.9363 6.0091 12.3637 6.0091 12.6273 6.2727Z"
              {...isSelected ? {
                fill: '#E33952',
              } : {
                fill: '#6D6D6D',
              }}
            />
          </svg>
        </Flex>
      </Flex>
      <Box
        pos={'absolute'}
        bottom={'0'}
        width={'75px'}
        height={'3px'}
        bg={'#6D6D6D'}
      ></Box>
      <Box
        className='settings-item-indicator'
        borderRadius={'50%'}
        position={'absolute'}
        {...axis === 'row' ? {
          right: '0',
          top: '0',
          transform: 'translate(50%, -50%)',
          width: '5.5vh',
          height: '5.5vh',
        } : {
          width: '75%',
          height: '5.5vh',
          bottom: '-2.5vh',
        }}
      >
      </Box>
    </Flex>
  );
};

export default InfoItem;
