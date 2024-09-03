import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { selectHud } from '../../Store/store';
import { useSelector } from 'react-redux';
interface SettingsItemProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  index?: number;
  click?: (index: number) => void;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ children, style, index, click}) => {
  const hud = useSelector(selectHud);
  const isSelected = hud.selectedStatus === index;
  console.log(isSelected);
  const axis = style?.flexDirection === 'column' ? 'row' : 'column';
  console.log(axis);
  return (
    <Flex
      {...axis === 'row' ? {
        style: {
          ...style,
          width: '50%',
          height: '8.8vh',
        }
      } : {
        style: {
          ...style,
          width: '12vw',
          height: '20vh',
        }
      }}
      className="settings-item"
      bg={'#272223'}
      border={'1px solid  rgba(255, 255, 255, 0.15)'}
      position={'relative'}
      overflow={'hidden'}
    >
      {children}
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
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          {...isSelected ? {
            style: {
              filter: 'drop-shadow(0px 0px 8px rgba(232, 17, 49, 0.87))',
            }
          } : {}}
        >
          <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.36327 0C7.32826 0 6.38563 0.558203 4.50046 1.67462L3.86285 2.05222C1.97765 3.16864 1.03505 3.72684 0.51753 4.64628C-1.66164e-07 5.56571 0 6.68212 0 8.91499V9.67011C0 11.903 -1.66164e-07 13.0194 0.51753 13.9388C1.03505 14.8582 1.97765 15.4164 3.86285 16.5328L4.50046 16.9105C6.38563 18.0269 7.32826 18.5851 8.36327 18.5851C9.39836 18.5851 10.3409 18.0269 12.2262 16.9105L12.8637 16.5328C14.7489 15.4164 15.6916 14.8582 16.2091 13.9388C16.7266 13.0194 16.7266 11.903 16.7266 9.67011V8.91499C16.7266 6.68212 16.7266 5.56571 16.2091 4.64628C15.6916 3.72684 14.7489 3.16864 12.8637 2.05222L12.2262 1.67462C10.3409 0.558203 9.39836 0 8.36327 0ZM4.87859 9.29255C4.87859 7.368 6.43878 5.80784 8.36327 5.80784C10.2878 5.80784 11.848 7.368 11.848 9.29255C11.848 11.2171 10.2878 12.7773 8.36327 12.7773C6.43878 12.7773 4.87859 11.2171 4.87859 9.29255Z"
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

export default SettingsItem;
