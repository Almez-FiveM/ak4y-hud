import { selectUserInfoSettings, selectConfig } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Flex, Text, Image, Grid } from '@chakra-ui/react';
import Icons from '../../Constants/Icons';
const InfoV1 = () => {
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
          <Flex width={'100%'} height={'22%'}>
            <Flex width={'14vw'} height={'5vw'}>
              <Grid width={'100%'} height={'100%'} gridTemplateColumns={'repeat(2, 1fr)'}>
                <Flex height={'2.5vw'} gap={2}>
                  <Flex flexDir={'column'} width={'3vw'} align={'flex-end'} justify={'center'}>
                    <Text fontSize={'.8vw'} fontWeight={'600'} >ONLINE</Text>
                    <Text fontSize={'.6vw'}>{userInfo.onlineCount}</Text>
                  </Flex>
                  <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                    <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                      <Icons.GasPump size={'.7vw'} />
                    </Flex>
                    <Flex pos={'absolute'} width="2.5vw" height="2.5vw" >
                      <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#paint0_radial_252_980)" />
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#B91FD1" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#E02BFD" strokeWidth="1" />
                        <defs>
                          <radialGradient id="paint0_radial_252_980" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                            <stop stopColor="#E02BFD" stopOpacity="0.83" />
                            <stop offset="1" stopColor="#B91FD1" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex height={'2.5vw'} gap={2}>
                  <Flex width={'3vw'} flexDir={'column'} align={'flex-end'} justify={'center'}>
                    <Text fontSize={'.8vw'} fontWeight={'600'} >CASH</Text>
                    <Text fontSize={'.6vw'}>{formatter.format(userInfo.cash)}</Text>
                  </Flex>
                  <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                    <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                      <Icons.GasPump size={'.7vw'} />
                    </Flex>
                    <Flex pos={'absolute'} width="2.5vw" height="2.5vw" >
                      <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#blue_cash)" />
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#2066CD" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#619DF8" strokeWidth="1" />
                        <defs>
                          <radialGradient id="blue_cash" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                            <stop stopColor="#2B7FFD" stopOpacity="0.83" />
                            <stop offset="1" stopColor="#2066CD" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex height={'2.5vw'} gap={2}>
                  <Flex width={'3vw'} flexDir={'column'} align={'flex-end'} justify={'center'}>
                    <Text fontSize={'.8vw'} fontWeight={'600'} >ID</Text>
                    <Text fontSize={'.6vw'}>{userInfo.id}</Text>
                  </Flex>
                  <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                    <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                      <Icons.GasPump size={'.7vw'} />
                    </Flex>
                    <Flex pos={'absolute'} width="2.5vw" height="2.5vw" >
                      <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#red_id)" />
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#D12121" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#F95E5E" strokeWidth="1" />
                        <defs>
                          <radialGradient id="red_id" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                            <stop stopColor="#FD2B2B" stopOpacity="0.83" />
                            <stop offset="1" stopColor="#D12121" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex height={'2.5vw'} gap={2}>
                  <Flex width={'3vw'} flexDir={'column'} align={'flex-end'} justify={'center'}>
                    <Text fontSize={'.8vw'} fontWeight={'600'} >BANK</Text>
                    <Text fontSize={'.6vw'}>{formatter.format(userInfo.bank)}</Text>
                  </Flex>
                  <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                    <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                      <Icons.GasPump size={'.7vw'} />
                    </Flex>
                    <Flex pos={'absolute'} width="2.5vw" height="2.5vw" >
                      <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#green_bank)" />
                        <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#1ECE79" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                        <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#5DF3AB" strokeWidth="1" />
                        <defs>
                          <radialGradient id="green_bank" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                            <stop stopColor="#2BFD98" stopOpacity="0.83" />
                            <stop offset="1" stopColor="#1ECE79" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </Flex>
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
          <Flex pr={'1.35vw'} flexDir={'column'} gap={6} pt={'1vh'} align={'flex-end'}>
            <Flex height={'2.5vw'} gap={2}>
              <Flex width={'5vw'} gap={'.4vh'} flexDir={'column'} align={'flex-end'} justify={'center'}>
                <Text fontSize={'.8vw'} fontWeight={'600'} >JOB</Text>
                <Text fontSize={'.6vw'}>{userInfo.job}</Text>
              </Flex>
              <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                  <Icons.GasPump size={'.7vw'} />
                </Flex>
                <Flex pos={'absolute'} width="2.5vw" height="2.5vw">
                  <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#yellow_job)" />
                    <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#CEB220" />
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                    <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#F6DE5E" strokeWidth="1" />
                    <defs>
                      <radialGradient id="yellow_job" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                        <stop stopColor="#FDDB2B" stopOpacity="0.83" />
                        <stop offset="1" stopColor="#CEB220" />
                      </radialGradient>
                    </defs>
                  </svg>
                </Flex>
              </Flex>
            </Flex>
            {userInfo.weaponLabel !== '' && (<Flex flexDir={'column'} align={'flex-end'}>
              <Flex
                width={'70%'}
                height={'5vh'}
              >
                <Image
                  src={`${config.inventoryImagePath}${userInfo.weapon}.png`}
                  width={'100%'}
                  height={'100%'}
                  objectFit={'contain'}
                  objectPosition={'end'}
                />
              </Flex>
              <Flex height={'2.5vw'} gap={2}>
                <Flex width={'5vw'} gap={'.4vh'} flexDir={'column'} align={'flex-end'} justify={'center'}>
                  <Text fontSize={'.8vw'} fontWeight={'600'} >{userInfo.weaponLabel}</Text>
                  <Text fontSize={'.6vw'}>{userInfo.ammoCount}/{userInfo.ammoMax}</Text>
                </Flex>
                <Flex width="2.5vw" height="2.5vw" justify={'flex-end'}>
                  <Flex w={'90%'} h={'100%'} justify={'center'} align={'center'} height={'2.5vw'} zIndex={1}>
                    <Icons.GasPump size={'.7vw'} />
                  </Flex>
                  <Flex pos={'absolute'} width="2.5vw" height="2.5vw">
                    <svg width={'100%'} height={'100%'} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="url(#blue_weapon)" />
                      <path d="M6.0206 14.3842L11.707 23.9437L7.06383 23.9437C6.1078 23.9437 5.22438 23.4337 4.74637 22.6057L0.772157 15.7222C0.294141 14.8942 0.294141 13.8742 0.772157 13.0462L4.74637 6.16269C5.22439 5.33474 6.10779 4.82471 7.06383 4.82471L11.707 4.82471L6.0206 14.3842Z" fill="black" fillOpacity="0.2" />
                      <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="#2066CD" />
                      <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" fill="black" fillOpacity="0.2" />
                      <path d="M29.7113 15.5541L24.0646 25.3344C23.6463 26.0589 22.8733 26.5052 22.0368 26.5052L10.7434 26.5052C9.90689 26.5052 9.13391 26.0589 8.71564 25.3344L3.06895 15.5541C2.65069 14.8296 2.65069 13.937 3.06895 13.2126L8.71564 3.43223C9.13391 2.70778 9.90689 2.2615 10.7434 2.2615L22.0368 2.2615C22.8733 2.2615 23.6463 2.70778 24.0646 3.43223L29.7113 13.2126C30.1295 13.937 30.1295 14.8296 29.7113 15.5541Z" stroke="#619DF8" strokeWidth="1" />
                      <defs>
                        <radialGradient id="blue_weapon" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.76603 14.3842) rotate(137.872) scale(16.4557 18.0742)">
                          <stop stopColor="#2B7FFD" stopOpacity="0.83" />
                          <stop offset="1" stopColor="#2066CD" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>)}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default InfoV1;