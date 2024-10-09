import { Box, Flex, Grid, Input } from '@chakra-ui/react';
import React from 'react';
import {
  selectHud, updateHealth,
  updateArmor, updateHunger,
  updateStamina, updateStress,
  updateThirst,
} from '../../Store/store';
import { useSelector, useDispatch } from 'react-redux';
import Icons from '../../Constants/Icons';
import { SketchPicker } from 'react-color';
import { toggleSettingsMenu, toggleEditMode } from '../../Store/store';
const hudList = ["microphone", "health", "armor", "hunger", "thirst", "stamina", "stress"];

interface HudStatus {
  visible: boolean;
  icon: keyof typeof Icons;
  color: string;
  value: number;
}

const EditMode = () => {
  const hud = useSelector(selectHud) as Record<string, HudStatus>;
  const dispatch = useDispatch();
  const [microphoneColorToggle, setMicrophoneColorToggle] = React.useState(false);
  const [healthColorToggle, setHealthColorToggle] = React.useState(false);
  const [armorColorToggle, setArmorColorToggle] = React.useState(false);
  const [hungerColorToggle, setHungerColorToggle] = React.useState(false);
  const [thirstColorToggle, setThirstColorToggle] = React.useState(false);
  const [staminaColorToggle, setStaminaColorToggle] = React.useState(false);
  const [stressColorToggle, setStressColorToggle] = React.useState(false);

  const handleVisibility = (key: string) => {
    const type = 'UPDATE_' + key.toUpperCase() + '_DATA';
    dispatch({ type: type, payload: { visible: !hud[key].visible } });
  };

  const handleColorChange = (key: string, value: string) => {
    const type = 'UPDATE_' + key.toUpperCase() + '_DATA';

    dispatch({ type: type, payload: { color: value } });
  }

  const closeAllColorPickers = () => {
    setMicrophoneColorToggle(false);
    setHealthColorToggle(false);
    setArmorColorToggle(false);
    setHungerColorToggle(false);
    setThirstColorToggle(false);
    setStaminaColorToggle(false);
    setStressColorToggle(false);
  }

  return (
    <>
      <Flex pos={'absolute'} w={'26vw'} h={'14vh'} left={0} top={'5%'} right={0} margin={'auto'} align={'center'} justify={'center'} pt={'1.5vh'} zIndex={99}>
        <Flex width={'100%'} height={'fit-content'} textAlign={'center'} justify={'center'} align={'center'} flexDir={'column'} gap={'1vh'}>
          <Flex bg={'#1a1a1a'} width={'100%'} height={'14vh'} borderRadius={'4px'} justify={'center'} align={'center'}>
            <Grid templateColumns="repeat(7, 1fr)" gap={'0.6vw'} alignItems={'center'}>
              {hudList.map((key) => (
                <Flex key={key} flexDir={'column'} gap={'0.6vw'} align={'center'}>
                  <Box
                    as={Icons[hud[key].icon]}
                    color={hud[key].color}
                    size={'24px'}
                  />
                  <Box
                    width={'20px'}
                    height={'20px'}
                    bg={hud[key].color}
                    borderRadius={'4px'}
                    onClick={() => {
                      switch (key) {
                        case 'microphone':
                          closeAllColorPickers();
                          setMicrophoneColorToggle(!microphoneColorToggle);
                          break;
                        case 'health':
                          closeAllColorPickers();
                          setHealthColorToggle(!healthColorToggle);
                          break;
                        case 'armor':
                          closeAllColorPickers();
                          setArmorColorToggle(!armorColorToggle);
                          break;
                        case 'hunger':
                          closeAllColorPickers();
                          setHungerColorToggle(!hungerColorToggle);
                          break;
                        case 'thirst':
                          closeAllColorPickers();
                          setThirstColorToggle(!thirstColorToggle);
                          break;
                        case 'stamina':
                          closeAllColorPickers();
                          setStaminaColorToggle(!staminaColorToggle);
                          break;
                        case 'stress':
                          closeAllColorPickers();
                          setStressColorToggle(!stressColorToggle);
                          break;
                      }
                    }}
                  />
                  <Input
                    type={'number'}
                    width={'64px'}
                    textAlign={'center'}
                    height={'24px'}
                    fontSize={'12px'}
                    placeholder='80'
                  />
                  <Flex align={'center'} justify={'center'}
                    cursor={'pointer'}
                    onClick={() => handleVisibility(key)}
                    {...(hud[key].visible ? { opacity: 1 } : { opacity: 0.5 })}
                  >
                    <svg width="14" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.65 5.0002C4.65 4.25463 5.25444 3.6502 6 3.6502C6.74556 3.6502 7.35 4.25463 7.35 5.0002C7.35 5.74576 6.74556 6.35019 6 6.35019C5.25444 6.35019 4.65 5.74576 4.65 5.0002Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.0002C0 5.98383 0.254976 6.31509 0.764934 6.97761C1.78318 8.30044 3.49087 9.80019 6 9.80019C8.50914 9.80019 10.2168 8.30044 11.2351 6.97761C11.745 6.31509 12 5.98383 12 5.0002C12 4.01656 11.745 3.68531 11.2351 3.02279C10.2168 1.69993 8.50914 0.200195 6 0.200195C3.49087 0.200195 1.78318 1.69993 0.764934 3.02279C0.254976 3.68531 0 4.01656 0 5.0002ZM6 2.7502C4.75736 2.7502 3.75 3.75755 3.75 5.0002C3.75 6.24286 4.75736 7.2502 6 7.2502C7.24266 7.2502 8.25 6.24286 8.25 5.0002C8.25 3.75755 7.24266 2.7502 6 2.7502Z" fill="white" />
                    </svg>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Flex>
          <Flex
            bg={'#1a1a1a'}
            width={'30%'}
            height={'6vh'}
            borderRadius={'4px'}
            justify={'center'}
            align={'center'}
            cursor={'pointer'}
            onClick={() => {
              closeAllColorPickers();
              dispatch(toggleEditMode());
              dispatch(toggleSettingsMenu(false));          
            }}
          >
            Confirm
          </Flex>
        </Flex>
      </Flex>
      <Flex pos={'absolute'} left={'35%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.microphone.color}
          onChange={(color) => handleColorChange('microphone', color.hex)}
          styles={{ default: { picker: { display: microphoneColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'37.5%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.health.color}
          onChange={(color) => handleColorChange('health', color.hex)}
          styles={{ default: { picker: { display: healthColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'41%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.armor.color}
          onChange={(color) => handleColorChange('armor', color.hex)}
          styles={{ default: { picker: { display: armorColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'44%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.hunger.color}
          onChange={(color) => handleColorChange('hunger', color.hex)}
          styles={{ default: { picker: { display: hungerColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'47%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.thirst.color}
          onChange={(color) => handleColorChange('thirst', color.hex)}
          styles={{ default: { picker: { display: thirstColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'51%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.stamina.color}
          onChange={(color) => handleColorChange('stamina', color.hex)}
          styles={{ default: { picker: { display: staminaColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
      <Flex pos={'absolute'} left={'55%'} top={'16%'} zIndex={99}>
        <SketchPicker
          color={hud.stress.color}
          onChange={(color) => handleColorChange('stress', color.hex)}
          styles={{ default: { picker: { display: stressColorToggle ? 'block' : 'none' } } }}
        />
      </Flex>
    </>
  );
};

export default EditMode;