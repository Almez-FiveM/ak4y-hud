import React from 'react';
import { selectHud } from '../../Store/store';
import { useSelector } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import StatusList from '../../Constants/StatusList';
import MicrophoneStatus from './MicrophoneStatus';
import { useNuiEvent } from '../../Hooks/useNuiEvent';
import { useDispatch } from 'react-redux';
import { selectGeneralSettings, updateHealth, updateArmor, updateHunger, updateStamina, updateStress, updateThirst } from '../../Store/store';
import Draggable from 'react-draggable';
const hudsWithoutMicrophone = [2, 3, 5, 6, 7, 8, 9]

const StatusBox = () => {
  const hud = useSelector(selectHud);
  const dispatch = useDispatch();
  const generalSettings = useSelector(selectGeneralSettings);

  useNuiEvent('updateStatus', (newHud: any) => {
    dispatch(updateHealth(newHud.health));
    dispatch(updateArmor(newHud.armor));
    dispatch(updateHunger(newHud.food));
    dispatch(updateThirst(newHud.water));
    dispatch(updateStamina(newHud.stamina));
    dispatch(updateStress(newHud.stress));
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
        className={'status-box'}
        zIndex={99}
      >
      <Draggable {...(!generalSettings.editMode && { disabled: true })}>
          <Box
            as={StatusList[hud.selectedStatus].page}
          ></Box>
        </Draggable>
      </Flex>

      {hudsWithoutMicrophone.includes(hud.selectedStatus) && <MicrophoneStatus></MicrophoneStatus>}
    </>
  );
};

export default StatusBox;