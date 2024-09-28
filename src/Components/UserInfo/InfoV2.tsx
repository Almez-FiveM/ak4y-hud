import { selectUserInfoSettings, selectConfig } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Flex, Text, Image, Grid } from '@chakra-ui/react';
import Icons from '../../Constants/Icons';

const InfoV2 = () => {
  const userInfo = useSelector(selectUserInfoSettings);
  const config = useSelector(selectConfig);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  return (
    <>
      <Flex
        position={'absolute'}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        height={'40vh'}
        w={'100%'}
        gap={'.5vw'}
      >
        <Flex width={'100%'} height={'100%'} filter={'drop-shadow(0px 0px 8px rgba(0, 0, 0, .7))'} flexDir={'column'} gap={4} align={'flex-end'}>
          <Flex width={'100%'} height={'22%'} gap={4} mr={'.6vw'}>
            <Flex width={'14vw'} height={'5vw'}>
              <Grid width={'100%'} height={'100%'} gridTemplateColumns={'repeat(2, 1fr)'} gap={2}>
                <Flex bg={'rgba(55,55,55,0.37)'} justify={'center'} align={'center'} gap={2} gridArea={'1 / 1 / 2 / 2'}>
                  <Flex>
                    <Icons.CarDoor size={'1.2vw'} />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <Text fontWeight={600} lineHeight={1}>BANK</Text>
                    <Text lineHeight={1}>{formatter.format(userInfo.bank)}</Text>
                  </Flex>
                </Flex>
                <Flex bg={'rgba(55,55,55,0.37)'} justify={'center'} align={'center'} gap={2} gridArea={'1 / 2 / 2 / 3'}>
                  <Flex>
                    <Icons.CarDoor size={'1.2vw'} />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <Text fontWeight={600} lineHeight={1}>CASH</Text>
                    <Text lineHeight={1}>{formatter.format(userInfo.cash)}</Text>
                  </Flex>
                </Flex>
                <Flex bg={'rgba(55,55,55,0.37)'} width={'100%'} justify={'center'} align={'center'} gap={2} gridArea={'2 / 1 / 3 / 3'}>
                  <Flex>
                    <Icons.CarDoor size={'1.2vw'} />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <Text fontWeight={600} lineHeight={1}>12.54PM</Text>
                  </Flex>
                </Flex>
              </Grid>
            </Flex>
            <Flex>
              <Image
                src={config.serverLogo}
                width={'5vw'}
                h={'5vw'}
              />
            </Flex>
          </Flex>
          <Flex width={'14vw'} height={'5vw'} mr={'1.35vw'} flexDir={'column'} pt={'1vh'} align={'flex-end'}>
            <Grid width={'100%'} height={'100%'} gridTemplateColumns={'repeat(2, 1fr)'} gap={2}>
              <Flex bg={'rgba(55,55,55,0.37)'} justify={'center'} align={'center'} gap={2} gridArea={'1 / 1 / 2 / 2'}>
                <Flex>
                  <Icons.CarDoor size={'1.2vw'} />
                </Flex>
                <Flex flexDir={'column'}>
                  <Text fontWeight={600} lineHeight={1}>{userInfo.onlineCount}</Text>
                </Flex>
              </Flex>
              <Flex bg={'rgba(55,55,55,0.37)'} justify={'center'} align={'center'} gap={2} gridArea={'1 / 2 / 2 / 3'}>
                <Flex>
                  <Icons.CarDoor size={'1.2vw'} />
                </Flex>
                <Flex flexDir={'column'}>
                  <Text fontWeight={600} lineHeight={1}>{userInfo.id}</Text>
                </Flex>
              </Flex>
              <Flex bg={'rgba(55,55,55,0.37)'} width={'100%'} justify={'center'} align={'center'} gap={2} gridArea={'2 / 1 / 3 / 3'}>
                <Flex>
                  <Icons.CarDoor size={'1.2vw'} />
                </Flex>
                <Flex flexDir={'column'}>
                  <Text fontWeight={600} lineHeight={1}>{userInfo.job}</Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
          <Flex flexDir={'column'} align={'flex-end'} mr={'1.35vw'} mt={'2vh'} gap={4}>
            <Flex
              width={'100%'}
              height={'5vh'}
            >
              <Image
                src='https://files.catbox.moe/j0cv3z.png'
                width={'100%'}
                height={'100%'}
                objectFit={'contain'}
                objectPosition={'end'}
              />
            </Flex>
            <Flex height={'2.5vw'} gap={2}>
              <Flex flexDir={'column'} justify={'center'} align={'flex-end'}>
                <Text fontWeight={600} lineHeight={1}>BANK</Text>
                <Text lineHeight={1}>{formatter.format(userInfo.bank)}</Text>
              </Flex>
              <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                  <Icons.GasPump size={'.7vw'} />
                </Flex>
                <Flex pos={'absolute'} width="2.5vw" height="2.5vw">
                  <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#D4D4D4" />
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.25" />
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#E1FF00" strokeWidth="1" />
                  </svg>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default InfoV2;