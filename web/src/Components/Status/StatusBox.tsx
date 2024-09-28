import React from 'react';
import { selectHud } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import StatusList from '../../Constants/StatusList';
import MicrophoneStatus from './MicrophoneStatus';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { useDispatch } from 'react-redux';
import { updateHealth, updateArmor, updateHunger, updateStamina, updateStress, updateThirst } from '../../Store/store';
const hudsWithoutMicrophone = [2, 3, 5, 6, 7, 8, 9]

const StatusBox = () => {
  const hud = useSelector(selectHud);
  const dispatch = useDispatch();

  useNuiEvent('updateStatus', (newHud: any) => {
    dispatch(updateHealth(newHud.health));
    dispatch(updateArmor(newHud.armor));
    dispatch(updateHunger(newHud.food));
    dispatch(updateThirst(newHud.water));
    // dispatch(updateStamina(newHud.stamina));
    // dispatch(updateStress(newHud.stress));
  });

  return (
    <>
      <Flex
        position={'absolute'}
        bottom={0}
        left={0}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'row'}
      >
        <Box
          as={StatusList[hud.selectedStatus].page}
        ></Box>
      </Flex>

      {hudsWithoutMicrophone.includes(hud.selectedStatus) && <MicrophoneStatus></MicrophoneStatus>}
    </>
  );
};

export default StatusBox;