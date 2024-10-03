import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { updateMenuData, selectMenu } from '../../Store/store';
import { useDispatch } from 'react-redux';
import Icons from '../../Constants/Icons';
import { fetchNui } from '../../Helpers/fetchNui';

const Vehicle = () => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = React.useState('doors');

  const handleClickDoor = (number: number) => {
    fetchNui('toggleVehicleDoor', number);
  };

  const handleClickNeon = (number: number) => {
    fetchNui('toggleVehicleNeon', number);
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
        <Flex>
          <svg width="221" height="112" viewBox="0 0 221 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_359_1066)">
              <path d="M216.238 83.1078C216.238 83.1078 216.238 83.1748 216.171 83.1748L203.838 99.9321C203.771 99.9991 203.771 99.9991 203.704 99.9991L25.4066 103.485C25.3396 103.485 25.3396 103.485 25.2726 103.418L6.16931 88.4701C6.10228 88.4701 6.10228 88.4031 6.10228 88.3361L0.874021 55.827L1.07511 54.5535L6.10228 23.2509C6.10228 23.1839 6.16931 23.1839 6.16931 23.1169L25.3396 8.16941C25.4066 8.16941 25.4066 8.10238 25.4737 8.10238L203.771 11.5879C203.838 11.5879 203.905 11.5879 203.905 11.6549L216.238 28.4122C216.238 28.4122 216.238 28.4792 216.305 28.4792L220.193 55.76L216.238 83.1078Z" fill="#090909" />
              <path d="M1.07502 55.8271L1.27611 54.6206L6.30328 23.318L25.4736 8.37058L203.771 11.8561L216.104 28.6133L219.791 54.6876L219.992 55.8941L219.791 57.1006L216.104 83.1749L203.771 99.9322L25.4065 103.284L6.30329 88.3362L1.27611 57.0336L1.07502 55.8271ZM0.672849 55.8271L0.873936 57.1007L5.90111 88.4032C5.90111 88.4702 5.96814 88.6043 6.03517 88.6713L25.2055 103.619C25.2725 103.686 25.3395 103.686 25.4736 103.686L203.771 100.2C203.905 100.2 204.039 100.133 204.106 100.066L216.439 83.309C216.506 83.2419 216.506 83.1749 216.506 83.1079L220.193 57.0336L220.394 55.8271L220.394 55.7601L220.394 55.693L220.193 54.4865L216.506 28.4122C216.506 28.3452 216.439 28.2782 216.439 28.2112L204.106 11.4539C204.039 11.3869 203.905 11.3199 203.771 11.3199L25.4736 7.83435C25.4065 7.83435 25.2725 7.83435 25.2055 7.90138L6.03517 22.9829C5.96814 23.0499 5.90111 23.117 5.90111 23.251L0.873936 54.5536L0.672849 55.8271Z" fill="#949494" />
              <path d="M6.43733 78.9517L31.3051 98.4572L25.5406 100.401L9.05146 87.2633L6.43733 78.9517ZM6.03516 78.9517C6.03516 79.0188 6.03516 79.0858 6.03516 79.0858L8.64929 87.3974C8.64929 87.4644 8.71632 87.5314 8.78334 87.5985L25.3395 100.669C25.4736 100.736 25.6076 100.803 25.7417 100.736L31.5062 98.7923C31.6402 98.7253 31.7743 98.6583 31.7743 98.4572L31.7743 98.3901C31.7743 98.2561 31.7073 98.122 31.6402 98.055L6.70545 78.6836C6.63842 78.6166 6.57139 78.5496 6.43733 78.5496C6.23624 78.5496 6.03516 78.7506 6.03516 78.9517Z" fill="#949494" />
              <path d="M6.43733 32.702L9.05146 24.3904L25.5406 11.2527L31.3051 13.1966L6.43733 32.702ZM6.03516 32.702C6.03516 32.836 6.10219 32.9701 6.23624 33.0371C6.3703 33.1042 6.57139 33.1042 6.70545 33.0371L31.5732 13.5317C31.6402 13.4647 31.7073 13.3306 31.7073 13.1966L31.7073 13.1295C31.7073 12.9955 31.5732 12.8614 31.4391 12.7944L25.6746 10.8505C25.5406 10.7835 25.4065 10.8505 25.2725 10.9176L8.78334 24.0553C8.71632 24.1223 8.64929 24.1893 8.64929 24.2563L6.03516 32.5679C6.03516 32.635 6.03516 32.635 6.03516 32.702Z" fill="#949494" />
              <path d="M5.36492 55.8269L7.64391 78.0806C7.64391 78.1476 7.64391 78.2146 7.57688 78.2146C7.50985 78.2816 7.44282 78.2816 7.37579 78.2146L5.96818 77.5443C5.90115 77.5443 5.83413 77.4773 5.83413 77.4103L3.08594 55.8269L3.08594 55.7599L5.83412 34.1766C5.83412 34.1096 5.90115 34.0425 5.96818 34.0425L7.37579 33.3722C7.44282 33.3722 7.50985 33.3722 7.57688 33.3722C7.64391 33.4393 7.64391 33.4393 7.64391 33.5063L5.36492 55.8269Z" fill="#090909" />
              <path d="M3.35383 55.8271L6.10202 34.2438L7.50963 33.5735L5.16362 55.8271L7.4426 78.1478L6.03499 77.4775L3.35383 55.8271ZM2.95166 55.8942L5.69985 77.4775C5.69985 77.6116 5.76688 77.7456 5.90094 77.8126L7.30854 78.4829C7.4426 78.55 7.57666 78.55 7.71072 78.4829C7.84478 78.4159 7.9118 78.2818 7.9118 78.1478C7.9118 78.1478 7.9118 78.1478 7.9118 78.0808L5.63282 55.8271L7.9118 33.5735C7.9118 33.5735 7.9118 33.5735 7.9118 33.5065C7.9118 33.3724 7.84477 33.2384 7.71072 33.1713C7.57666 33.1043 7.4426 33.1043 7.30854 33.1713L5.90093 33.8416C5.76688 33.9087 5.69985 34.0427 5.69985 34.1768L2.95166 55.7601C2.95166 55.7601 2.95166 55.8271 2.95166 55.8942Z" fill="#949494" />
              <path d="M8.11314 55.8271L10.5262 79.6894C10.5262 79.7565 10.5262 79.8235 10.4592 79.8235C10.3921 79.8905 10.3251 79.8905 10.2581 79.8235L8.85046 79.0862C8.78343 79.0862 8.78343 79.0192 8.7164 78.9521L6.23633 55.8271L6.23633 55.7601L8.7164 32.6351C8.7164 32.5681 8.78343 32.501 8.85046 32.501L10.2581 31.7637C10.3251 31.6967 10.3921 31.7637 10.4592 31.7637C10.5262 31.8308 10.5262 31.8308 10.5262 31.8978C10.5262 31.9648 8.11314 55.8271 8.11314 55.8271Z" fill="#090909" />
              <path d="M6.43733 55.7597L8.9174 32.6347L10.325 31.8974L7.91197 55.8267L10.325 79.7561L8.9174 79.0188L6.43733 55.7597ZM6.03516 55.7597C6.03516 55.8267 6.03516 55.8267 6.03516 55.7597C6.03516 55.8267 6.03516 55.8267 6.03516 55.8267L8.51523 78.9517C8.51523 79.0858 8.58226 79.2198 8.71632 79.2869L10.1239 80.0242C10.258 80.0912 10.392 80.0912 10.5261 80.0242C10.6602 79.9572 10.7272 79.8231 10.7272 79.689C10.7272 79.689 10.7272 79.689 10.7272 79.622L8.31414 55.7597L10.7272 31.8974C10.7272 31.8974 10.7272 31.8974 10.7272 31.8304C10.7272 31.6963 10.6602 31.5622 10.5261 31.4952C10.392 31.4282 10.258 31.4282 10.1239 31.4952L8.71631 32.2325C8.58226 32.2996 8.51523 32.4336 8.51523 32.5677L6.03516 55.7597Z" fill="#949494" />
              <path d="M212.015 82.3033C212.015 82.3033 212.015 82.3704 211.948 82.3704L202.095 96.1783C202.028 96.2454 201.961 96.2454 201.894 96.2454C201.826 96.2454 201.759 96.1783 201.759 96.1783L200.955 94.7707L200.955 94.7037C200.955 94.6367 200.955 94.6367 201.022 94.5696L210.205 81.7671L213.624 55.7599L210.205 29.8197L201.022 17.0171C201.022 16.9501 200.955 16.9501 200.955 16.8831C200.955 16.816 200.955 16.816 200.955 16.816L201.759 15.4084C201.826 15.3414 201.826 15.3414 201.893 15.3414C201.961 15.3414 202.028 15.3414 202.095 15.4084L211.948 29.2164C211.948 29.2164 211.948 29.2834 212.015 29.2834L215.701 55.7599L212.015 82.3033Z" fill="#090909" />
              <path d="M201.089 16.9503L201.894 15.5427L211.814 29.3507L215.5 55.8271L211.814 82.3036L201.961 96.1115L201.156 94.7039L210.339 81.8343L213.758 55.8271L210.339 29.8199L201.089 16.9503ZM200.687 16.9503C200.687 17.0173 200.687 17.0844 200.754 17.1514L209.937 29.8869L213.288 55.7601L209.937 81.6333L200.754 94.3688C200.687 94.4358 200.687 94.5028 200.687 94.5699C200.687 94.6369 200.687 94.7039 200.754 94.7709L201.558 96.1786C201.625 96.3126 201.759 96.3796 201.894 96.3796C202.028 96.3796 202.162 96.3126 202.229 96.2456L212.082 82.5046C212.149 82.4376 212.149 82.3706 212.149 82.3036L215.836 55.8271L215.836 55.7601L215.836 55.693L212.149 29.2166C212.149 29.1496 212.149 29.0825 212.082 29.0155L202.229 15.2075C202.162 15.0735 202.028 15.0065 201.894 15.0735C201.759 15.0735 201.625 15.1405 201.558 15.2746L200.754 16.6822C200.754 16.8162 200.687 16.8833 200.687 16.9503Z" fill="#949494" />
              <path d="M218.785 55.8939L214.562 82.8395C214.562 82.8395 214.562 82.9066 214.495 82.9066L203.167 98.3902C203.1 98.4573 203.033 98.4573 202.966 98.4573C202.899 98.4573 202.832 98.3902 202.832 98.3232L202.229 97.1167L202.229 97.0497C202.229 96.9826 202.229 96.9826 202.296 96.9156L212.82 82.5044L216.841 55.7598L212.82 29.0823L202.296 14.604C202.296 14.537 202.229 14.537 202.229 14.47L202.229 14.4029L202.832 13.1964C202.832 13.1294 202.899 13.0624 202.966 13.0624C203.033 13.0624 203.1 13.0624 203.167 13.1294L214.495 28.6801C214.495 28.6801 214.495 28.7471 214.562 28.7471L218.785 55.6928C218.785 55.7598 218.785 55.8268 218.785 55.8939Z" fill="#090909" />
              <path d="M202.43 14.5367L203.033 13.3302L214.361 28.8139L218.584 55.7595L214.361 82.7051L203.033 98.1888L202.43 96.9823L213.021 82.437L217.042 55.6925L213.021 28.9479L202.43 14.5367ZM202.028 14.5367C202.028 14.6037 202.028 14.6707 202.095 14.8048L212.618 29.2831L216.573 55.8936L212.618 82.5041L202.095 96.9823C202.028 97.0493 202.028 97.1164 202.028 97.2504C202.028 97.3175 202.028 97.3845 202.095 97.4515L202.698 98.658C202.765 98.7921 202.899 98.8591 203.033 98.8591C203.167 98.8591 203.301 98.7921 203.368 98.7251L214.696 83.2414C214.763 83.1743 214.763 83.1073 214.763 83.0403L218.986 56.0946C218.986 56.0946 218.986 56.0276 218.986 55.9606L218.986 55.8936L214.763 28.8809C214.763 28.8138 214.696 28.7468 214.696 28.6798L203.368 13.1961C203.301 13.062 203.167 12.995 203.033 13.062C202.899 13.1291 202.765 13.1291 202.698 13.2631L202.095 14.4696C202.028 14.4026 202.028 14.4697 202.028 14.5367Z" fill="#949494" />
              <path d="M32.7796 13.7325L41.7615 13.7325C-1.87437 51.939 31.372 88.2017 41.8285 97.9209L32.7796 97.9209L11.7995 80.8955L9.25244 55.8267L11.7995 30.7579L32.7796 13.7325Z" fill="#090909" />
              <path d="M90.2905 55.827L94.8485 89.2744C94.8485 89.3414 94.7814 89.4755 94.7144 89.4755L66.5623 95.8433C66.4952 95.8433 66.4282 95.8433 66.3612 95.7762L62.4735 90.615L62.4065 90.548L58.6528 55.827L58.6528 55.7599L62.4065 21.0389C62.4065 20.9719 62.4064 20.9719 62.4735 20.9719L66.3612 15.8777C66.4282 15.8107 66.4952 15.8107 66.5622 15.8107L94.7144 22.1784C94.7814 22.1784 94.8485 22.3125 94.8485 22.3795L90.2905 55.827Z" fill="#090909" />
              <path d="M58.8538 55.8266L62.6075 21.1056L66.4951 16.0114L94.6473 22.3792L90.0893 55.8266L94.6473 89.2741L66.4951 95.6418L62.6075 90.4806L58.8538 55.8266ZM58.4517 55.8266C58.4517 55.8937 58.4517 55.8937 58.4517 55.8937L62.2053 90.5476C62.2053 90.6147 62.2723 90.6817 62.2723 90.7487L66.16 95.91C66.227 96.044 66.4281 96.111 66.5622 96.044L94.7143 89.6763C94.9154 89.6092 95.0495 89.4752 95.0495 89.2741L95.0495 89.2071L90.4915 55.8266L95.0495 22.3792L95.0495 22.3121C95.0495 22.1111 94.9154 21.977 94.7143 21.91L66.5622 15.5422C66.4281 15.4752 66.227 15.5422 66.16 15.6763L62.2723 20.7705C62.2053 20.8375 62.2053 20.9045 62.2053 20.9716L58.4517 55.6255C58.4517 55.7596 58.4517 55.8266 58.4517 55.8266Z" fill="#949494" />
              <path d="M190.164 81.0299C190.164 81.0969 190.164 81.1639 190.097 81.1639L185.472 84.7835C185.404 84.7835 185.404 84.8505 185.337 84.8505L156.85 84.3143L130.039 85.856L96.39 89.1404C96.2559 89.1404 96.1889 89.0733 96.1889 88.9393L91.832 55.827L91.832 55.7599L96.1889 22.6476C96.1889 22.5136 96.323 22.4465 96.39 22.4465L130.039 25.731L156.85 27.2726L185.337 26.7364C185.404 26.7364 185.404 26.7364 185.472 26.8034L190.097 30.423C190.164 30.49 190.164 30.49 190.164 30.557L190.164 81.0299Z" fill="#090909" />
              <path d="M92.0335 55.7598L96.3904 22.6475L130.039 25.9319L156.851 27.4736L185.338 26.9373L189.963 30.5569L189.963 81.0297L185.338 84.6493L156.851 84.113L130.039 85.6547L96.3904 88.9391L92.0335 55.7598ZM91.6313 55.7598C91.6313 55.8268 91.6313 55.8268 91.6313 55.8938L95.9882 89.0062C95.9882 89.2073 96.1893 89.3413 96.4574 89.3413L130.106 86.0569L156.918 84.5152L185.405 85.0514C185.472 85.0514 185.606 85.0514 185.673 84.9844L190.298 81.3649C190.365 81.2978 190.432 81.1638 190.432 81.0297L190.432 30.6239C190.432 30.4899 190.365 30.3558 190.298 30.2888L185.673 26.6692C185.606 26.6022 185.539 26.6022 185.405 26.6022L156.918 27.1384L130.106 25.5967L96.4574 22.3123C96.2563 22.3123 96.0553 22.4464 95.9882 22.6475L91.6313 55.7598Z" fill="#949494" />
              <path d="M91.028 110.925C91.028 110.992 91.028 110.992 91.028 111.059C90.9609 111.126 90.8939 111.126 90.8269 111.126L82.3812 111.126C82.3142 111.126 82.2472 111.126 82.2472 111.059L69.8468 98.5913C69.7798 98.5243 69.7798 98.5243 69.7798 98.4573L69.7798 98.3902C69.7798 98.3232 69.9138 98.2562 69.9809 98.2562L74.1367 98.2562C74.2037 98.2562 74.2707 98.2562 74.2707 98.3232L76.0135 100.334L85.0624 100.066C85.1294 100.066 85.1965 100.133 85.2635 100.2L90.9609 110.858C91.028 110.858 91.028 110.925 91.028 110.925Z" fill="#090909" />
              <path d="M69.9808 98.4573L74.1366 98.4573L75.9464 100.535L85.1293 100.267L90.8268 110.925L82.3811 110.925L69.9808 98.4573ZM69.5786 98.4573C69.5786 98.5914 69.6456 98.6584 69.7127 98.7255L82.046 111.193C82.113 111.26 82.2471 111.327 82.3141 111.327L90.7598 111.327C90.8938 111.327 91.0279 111.26 91.0949 111.126C91.1619 111.059 91.1619 110.992 91.1619 110.925C91.1619 110.858 91.1619 110.791 91.0949 110.724L85.3975 100.066C85.3304 99.932 85.1964 99.8649 85.0623 99.8649L76.0804 100.133L74.4047 98.1892C74.3377 98.1222 74.2036 98.0552 74.1366 98.0552L69.9808 98.0552C69.8467 98.0552 69.6456 98.1222 69.5786 98.3233C69.5786 98.3233 69.5786 98.3903 69.5786 98.4573Z" fill="#949494" />
              <path d="M91.0278 0.729475L91.0278 0.796508L85.3304 11.4541C85.2633 11.5211 85.1963 11.5882 85.1293 11.5882L76.0804 11.3201L74.3376 13.3309C74.2706 13.398 74.2706 13.3979 74.2036 13.3979L70.0478 13.3979C69.9807 13.3979 69.9137 13.3309 69.8467 13.2639L69.8467 13.1969C69.8467 13.1298 69.8467 13.0628 69.9137 13.0628L82.247 0.595419C82.3141 0.52839 82.3141 0.528386 82.3811 0.528386L90.8268 0.528386C90.8938 0.528386 90.9608 0.595418 91.0278 0.595418C91.0278 0.662447 91.0278 0.662446 91.0278 0.729475Z" fill="#090909" />
              <path d="M69.9808 13.1967L82.3141 0.729314L90.7598 0.729314L85.0623 11.3869L75.8793 11.1188L74.0696 13.1967L69.9808 13.1967ZM69.5786 13.1967C69.5786 13.2637 69.5786 13.3308 69.5786 13.3308C69.6456 13.4648 69.7797 13.5989 69.9808 13.5989L74.1366 13.5989C74.2706 13.5989 74.3377 13.5318 74.4717 13.4648L76.1474 11.521L85.1293 11.7891C85.2634 11.7891 85.3974 11.7221 85.4645 11.588L91.1619 0.930403C91.1619 0.863374 91.229 0.796343 91.229 0.729314C91.229 0.662285 91.229 0.595254 91.1619 0.528225C91.0949 0.394167 90.9609 0.327136 90.8268 0.327136L82.3811 0.327136C82.2471 0.327136 82.1801 0.394173 82.113 0.461202L69.7127 12.9286C69.6456 12.9956 69.5786 13.1297 69.5786 13.1967Z" fill="#949494" />
              <path d="M69.981 13.1965L74.1368 13.1965C74.2708 12.8614 79.6331 2.13675 90.7599 0.729137L82.3143 0.729137L69.981 13.1965Z" fill="#090909" />
              <path d="M64.619 99.1542L94.648 91.9151L125.95 88.7647L122.398 98.618L64.619 99.1542ZM64.2168 99.1542C64.2168 99.4223 64.4179 99.5564 64.619 99.5564L122.331 99.0202C122.465 99.0202 122.666 98.8861 122.733 98.752L126.286 88.9658C126.286 88.8988 126.286 88.8988 126.286 88.8318C126.286 88.7647 126.286 88.6307 126.219 88.5636C126.152 88.4296 126.018 88.4296 125.883 88.4296L94.5809 91.5799L94.5139 91.5799L64.5519 98.752C64.3509 98.8191 64.2168 98.9531 64.2168 99.1542Z" fill="#949494" />
              <path d="M125.95 98.618L129.905 88.8318L155.376 87.3571L161.006 99.1542L125.95 98.618ZM125.548 98.618C125.548 98.685 125.548 98.752 125.615 98.8191C125.682 98.9531 125.816 99.0202 125.95 99.0202L161.006 99.5564C161.14 99.5564 161.274 99.4894 161.341 99.3553C161.408 99.2883 161.408 99.2212 161.408 99.1542C161.408 99.0872 161.408 99.0202 161.341 98.9531L155.711 87.156C155.644 87.022 155.51 86.8879 155.309 86.9549L129.838 88.4296C129.704 88.4296 129.57 88.5636 129.503 88.6977L125.548 98.4839C125.548 98.4839 125.548 98.551 125.548 98.618Z" fill="#949494" />
              <path d="M157.655 87.3573L183.461 87.3573L190.633 93.2558L183.126 99.1544L163.553 99.1544L157.655 87.3573ZM157.252 87.3573C157.252 87.4243 157.252 87.4913 157.319 87.5583L163.285 99.2884C163.352 99.4225 163.486 99.4895 163.62 99.4895L183.193 99.4895C183.26 99.4895 183.394 99.4895 183.461 99.4225L190.968 93.5239C191.035 93.4569 191.102 93.3228 191.102 93.1888C191.102 93.0547 191.035 92.9877 190.968 92.8536L183.729 86.9551C183.662 86.8881 183.595 86.8881 183.461 86.8881L157.655 86.8881C157.521 86.8881 157.386 86.9551 157.319 87.0891C157.252 87.2232 157.252 87.2902 157.252 87.3573Z" fill="#949494" />
              <path d="M64.619 12.4222L122.331 12.9584L125.883 22.7447L94.5809 19.5943L64.619 12.4222ZM64.2168 12.4222L64.2168 12.4892C64.2168 12.5563 64.2838 12.6233 64.2838 12.6903C64.2838 12.7573 64.3509 12.7574 64.4179 12.7574C64.4849 12.7574 64.4849 12.8244 64.5519 12.8244L94.5139 20.0635L94.5809 20.0635L125.883 23.2139C126.018 23.2139 126.152 23.1468 126.219 23.0798C126.286 23.0128 126.286 22.9458 126.286 22.8117C126.286 22.7447 126.286 22.7447 126.286 22.6776L122.733 12.8914C122.666 12.7573 122.532 12.6233 122.331 12.6233L64.619 12.0871C64.619 12.0871 64.619 12.0871 64.5519 12.0871C64.4179 12.02 64.2168 12.2211 64.2168 12.4222Z" fill="#949494" />
              <path d="M125.95 12.9583L161.006 12.4221L155.376 24.2192L129.905 22.7445L125.95 12.9583ZM125.548 12.9583C125.548 13.0253 125.548 13.0924 125.548 13.0924L129.503 22.8786C129.57 23.0126 129.704 23.1467 129.838 23.1467L155.309 24.6213C155.443 24.6213 155.644 24.5543 155.711 24.4202L161.341 12.6231C161.341 12.5561 161.408 12.4891 161.408 12.4221C161.408 12.355 161.408 12.288 161.341 12.221C161.274 12.0869 161.14 12.0199 161.006 12.0199L125.95 12.5561C125.816 12.5561 125.682 12.6232 125.615 12.7572C125.548 12.8242 125.548 12.8913 125.548 12.9583Z" fill="#949494" />
              <path d="M157.655 24.2192L163.62 12.4221L183.193 12.4221L190.7 18.3206L183.461 24.2192L157.655 24.2192ZM157.252 24.2192C157.252 24.2862 157.252 24.3532 157.319 24.4202C157.386 24.5543 157.521 24.6213 157.655 24.6213L183.461 24.6213C183.528 24.6213 183.662 24.6213 183.729 24.5543L190.968 18.6558C191.035 18.5887 191.102 18.4547 191.102 18.3206C191.102 18.1865 191.035 18.0525 190.968 17.9855L183.461 12.0869C183.394 12.0199 183.327 12.0199 183.193 12.0199L163.62 12.0199C163.486 12.0199 163.352 12.0869 163.285 12.221L157.319 24.0181C157.252 24.0851 157.252 24.1521 157.252 24.2192Z" fill="#949494" />
              <path d="M191.363 26.5352L203.562 18.4246L212.343 30.6239L215.762 55.8268L212.343 81.0297L203.629 93.229L191.43 85.1185L195.251 81.7L195.251 30.0207L191.363 26.5352ZM190.961 85.1185C190.961 85.2525 191.028 85.3866 191.162 85.4536L203.361 93.5641C203.562 93.6982 203.763 93.6312 203.898 93.4971L212.678 81.2978C212.745 81.2308 212.745 81.1638 212.745 81.0967L216.164 55.8938L216.164 55.8268L216.164 55.7598L212.745 30.5569C212.745 30.4899 212.678 30.4228 212.678 30.3558L203.898 18.1565C203.763 17.9554 203.562 17.9554 203.361 18.0895L191.162 26.2C191.028 26.267 190.961 26.4011 190.961 26.5352C190.961 26.6692 191.028 26.7362 191.095 26.8033L194.782 30.0877L194.782 81.4989L191.095 84.7833C191.028 84.8504 190.961 84.9174 190.961 84.9844C190.961 84.9844 190.961 85.0515 190.961 85.1185Z" fill="#949494" />
            </g>
            <defs>
              <clipPath id="clip0_359_1066">
                <rect width="111" height="219.654" fill="white" transform="translate(0.672852 111.327) rotate(-90)" />
              </clipPath>
            </defs>
          </svg>
        </Flex>
        <Flex flexDir={'row'} gap={'.4vw'} width={'92%'}>
          <Flex width={'50%'} gap={'.2vw'} height={'3vh'} align={'center'} justify={'center'}
            onClick={() => setSelectedMenu('doors')}
            cursor={'pointer'}
            {...selectedMenu === 'doors' ? {
              bg: 'linear-gradient(90deg, rgba(81, 191, 252, 0.21) 0%, rgba(115, 205, 255, 0.13) 100%)',
              color: '#73CDFF',
              border: '1px solid #50BCF9',
            } : {
              bg: '#fff2',
              color: '#fff7',
            }}
          >
            <Icons.CarDoor size={'.7vw'} />
            <Text fontSize={'.7vw'}>Doors</Text>
          </Flex>
          <Flex width={'50%'} gap={'.2vw'} height={'3vh'} align={'center'} justify={'center'}
            onClick={() => setSelectedMenu('neons')}
            cursor={'pointer'}
            {...selectedMenu === 'neons' ? {
              bg: 'linear-gradient(90deg, rgba(81, 191, 252, 0.21) 0%, rgba(115, 205, 255, 0.13) 100%)',
              color: '#73CDFF',
              border: '1px solid #50BCF9',
            } : {
              bg: '#fff2',
              color: '#fff7',
            }}
          >
            <Icons.Flash size={'.7vw'} />
            <Text fontSize={'.7vw'}>Neons</Text>
          </Flex>
        </Flex>
        {selectedMenu === 'doors' && (
          <Flex overflow={'scroll'} fontFamily={'Rajdhani'} width={'92%'} height={'14vh'} gap={'.3vh'} flexDir={'column'}>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[0] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(0)}>
                <Icons.CarDoor color={menu.vehicleDoors[0] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Front Driver Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[1] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(1)}>
                <Icons.CarDoor color={menu.vehicleDoors[1] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Front Passenger Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[2] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(2)}>
                <Icons.CarDoor color={menu.vehicleDoors[2] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Rear Driver Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[3] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(3)}>
                <Icons.CarDoor color={menu.vehicleDoors[3] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Rear Passenger Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[4] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(4)}>
                <Icons.CarDoor color={menu.vehicleDoors[4] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Hood</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.vehicleDoors[5] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickDoor(5)}>
                <Icons.CarDoor color={menu.vehicleDoors[5] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Trunk</Text>
              </Flex>
            </Flex>
          </Flex>
        )}
        {selectedMenu === 'neons' && (
          <Flex overflow={'scroll'} fontFamily={'Rajdhani'} width={'92%'} height={'14vh'} gap={'.3vh'} flexDir={'column'}>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.neons[0] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickNeon(0)}>
                <Icons.Flash color={menu.neons[0] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Left Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.neons[1] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickNeon(1)}>
                <Icons.Flash color={menu.neons[1] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Right Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.neons[2] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickNeon(2)}>
                <Icons.Flash color={menu.neons[2] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Front Side</Text>
              </Flex>
            </Flex>
            <Flex minH={'3.1vh'} height={'3.1vh'} gap={'.3vw'} width={'100%'}>
              <Flex align={'center'} justify={'center'} bg={menu.neons[3] ? '#58C2FD' : '#252525'} width={'2.5vw'} cursor={'pointer'} onClick={() => handleClickNeon(3)}>
                <Icons.Flash color={menu.neons[3] ? '#133040' : '#858585'} size={'.7vw'} />
              </Flex>
              <Flex align={'center'} px={'.5vw'} bg={'rgba(217, 217, 217, 0.04)'} border={'1px solid rgba(255, 255, 255, 0.27)'} width={'100%'} height={'100%'}>
                <Text fontWeight={'600'} fontSize={'.7vw'} color={'#8C8C8C'}>Back Side</Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Vehicle;