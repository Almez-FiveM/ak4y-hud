import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SettingsConst from '../../Constants/Settings';
import { toggleSettingsMenu } from '../../Store/store';
import { useDispatch } from 'react-redux';

const selected_button = 'https://files.catbox.moe/wzq95s.png';
const header_button = 'https://files.catbox.moe/s1jwkn.png';
interface SettingsHeaderProps {
  onClick?: (index: number) => void;
  selected?: number;
}

const SettignsHeader: React.FC<SettingsHeaderProps> = ({ onClick, selected }) => {
  const dispatch = useDispatch();
  return (
    <Flex
    className="settings-header"
    justifyContent={'space-between'}
    direction={'row'}
    w={'100%'}
    h={'7vh'}
    bg={'#120E0F'}
    overflow={'hidden'}
  >
    <Flex className="header-buttons"
      justifyContent={'center'}
      alignItems={'center'}
      w={'4vw'}
      h={'100%'}
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
      >
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4627 8.31754L21.4904 7.34518C17.1942 3.04904 10.2288 3.04904 5.93262 7.34518C1.63647 11.6413 1.63647 18.6068 5.93262 22.9029C10.2288 27.1991 17.1942 27.1991 21.4904 22.9029C23.9887 20.4045 25.0342 17.0035 24.6268 13.7496M22.4627 8.31754H16.6285M22.4627 8.31754V2.4834" stroke="white" strokeWidth="3.45" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Flex>
    </Flex>
    <Flex className="header-page-buttons"
      justifyContent={'center'}
      alignItems={'center'}
      w={'60%'}
      h={'100%'}
      overflow={'hidden'}
      gap={4}
    >
      {Object.keys(SettingsConst).map((key, index) => {
        const settingsKey = parseInt(key) as keyof typeof SettingsConst;
        return (
          <Flex
            key={index}
            className="header-page-button"
            justifyContent={'center'}
            alignItems={'center'}
            w={'25%'}
            h={'100%'}
            bgImage={selected === settingsKey ? 'url(' + selected_button + ')' : 'url(' + header_button + ')'}
            bgSize={'contain'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            onClick={() => onClick && onClick(index)}

            {...(selected === settingsKey ? { filter: 'drop-shadow(0px 0px 50.3283px rgba(232, 17, 49, 0.94))' } : {})}
          >
            <Text
              color={'white'}
              fontSize={'.7vw'}
              fontWeight={600}
            >
              {SettingsConst[settingsKey].label}
            </Text>
          </Flex>
        )
      })}
    </Flex>
    <Flex className="header-buttons"
      justifyContent={'center'}
      alignItems={'center'}
      w={'4vw'}
      h={'100%'}
      cursor={'pointer'}
      onClick={() => dispatch(toggleSettingsMenu(false))}
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
      >
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.8501 19.5209V0.824518H3.15371V6.57726H12.0295L0.523987 18.0827L4.59176 22.1505L16.0974 10.645V19.5209H21.8501Z" fill="white" />
        </svg>
      </Flex>
    </Flex>
  </Flex>
  );
};

export default SettignsHeader;
