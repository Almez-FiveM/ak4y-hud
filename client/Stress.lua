stress = 0
SpeedMultiplier = Config.SpeedMultiplier
CreateThread(function()
  while true do
    Wait(3000)
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  end
end)

CreateThread(function()
  if Config.AddStress["on_fastdrive"].enable then
    while true do
      local ped = PlayerPedId()
      if math.random() < (Config.AddStress["on_fastdrive"].chance / 100) and IsPedInAnyVehicle(ped, false) then
        local speed = GetEntitySpeed(GetVehiclePedIsIn(ped, false)) * SpeedMultiplier
        if speed >= (SpeedMultiplier == 3.6 and Config.AddStress["on_fastdrive"].minSpeed or Config.AddStress["on_fastdrive"].minSpeed / 1.6) then
          stress = stress + math.random(Config.AddStress["on_fastdrive"].min, Config.AddStress["on_fastdrive"].max)
          if stress > 100 then
            stress = 100
          end
          SendNUIMessage({
            action = "stress",
            stress = stress,
          })
        end
      end

      Wait(10000)
    end
  end
end)

CreateThread(function()
  local sleep = 2000
  if Config.AddStress["on_shoot"].enable then
    while true do
      local ped = PlayerPedId()
      local weapon = GetSelectedPedWeapon(ped)
      if IsPedArmed(ped, 4) then
        if weapon ~= `WEAPON_UNARMED` then
          sleep = 0
          if IsPedShooting(ped) then
            if math.random() < (Config.AddStress["on_shoot"].chance / 100) and not IsWhitelistedWeaponStress(weapon) then
              stress = stress + math.random(Config.AddStress["on_shoot"].min, Config.AddStress["on_shoot"].max)
              if stress > 100 then
                stress = 100
              end
              SendNUIMessage({
                action = "stress",
                stress = stress,
              })
            end
          end
        end
      else
        sleep = 2000
      end
      Wait(sleep)
    end
  end
end)

CreateThread(function()
  local sleep = 2000
  while true do
    local ped = PlayerPedId()
    if stress >= Config.MinStressToBlur then
      sleep = 20000
      SetTransitionTimecycleModifier('hud_def_blur', 2.0)
      PushTimecycleModifier()
      Wait(2000)
      SetTransitionTimecycleModifier("default", 2.0)
      Wait(1000)
      ClearTimecycleModifier()
    elseif Config.MinStressToBlur < 50 then
      sleep = 2000
    end

    Wait(sleep)
  end
end)

RegisterNetEvent("esx_status:add")
AddEventHandler('esx_status:add', function(_type)
  if Config.RemoveStress["on_eat"].enable and _type == "hunger" then
    stress = stress - math.random(Config.RemoveStress["on_eat"].min, Config.RemoveStress["on_eat"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  elseif Config.RemoveStress["on_drink"].enable and _type == "thirst" then
    stress = stress - math.random(Config.RemoveStress["on_drink"].min, Config.RemoveStress["on_drink"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  end
end)

AddEventHandler('esx:onPlayerDeath', function()
  stress = 0
  SendNUIMessage({
    action = "stress",
    stress = stress,
  })
end)

-- QBCORE EAT
RegisterNetEvent('consumables:client:Eat')
AddEventHandler('consumables:client:Eat', function()
  if Config.RemoveStress["on_eat"].enable then
    stress = stress - math.random(Config.RemoveStress["on_eat"].min, Config.RemoveStress["on_eat"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  end
end)

-- QBCORE DRINK
RegisterNetEvent('consumables:client:Drink')
AddEventHandler('consumables:client:Drink', function()
  if Config.RemoveStress["on_eat"].enable then
    stress = stress - math.random(Config.RemoveStress["on_drink"].min, Config.RemoveStress["on_drink"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  end
end)

-- ESX DRINK & EAT
RegisterNetEvent("esx_status:add")
AddEventHandler('esx_status:add', function(_type)
  if Config.RemoveStress["on_eat"].enable and _type == "hunger" then
    stress = stress - math.random(Config.RemoveStress["on_eat"].min, Config.RemoveStress["on_eat"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  elseif Config.RemoveStress["on_drink"].enable and _type == "thirst" then
    stress = stress - math.random(Config.RemoveStress["on_drink"].min, Config.RemoveStress["on_drink"].max)
    if stress < 0 then
      stress = 0
    end
    SendNUIMessage({
      action = "stress",
      stress = stress,
    })
  end
end)

CreateThread(function()
  while true do
    if Config.RemoveStress["on_swim"].enable then
      if IsPedSwimming(PlayerPedId()) and stress >= 0 then
        stress = stress - math.random(Config.RemoveStress["on_swim"].min, Config.RemoveStress["on_swim"].max)
        if stress < 0 then
          stress = 0
        end
        SendNUIMessage({
          action = "stress",
          stress = stress,
        })
      end
    end

    if Config.RemoveStress["on_run"].enable then
      if IsPedRunning(PlayerPedId()) and stress >= 0 then
        stress = stress - math.random(Config.RemoveStress["on_run"].min, Config.RemoveStress["on_run"].max)
        if stress < 0 then
          stress = 0
        end
        SendNUIMessage({
          action = "stress",
          stress = stress,
        })
      end
    end

    if stress >= 50 then
      if Config.StressNotify == true then
        Config.Notify(Translations[Config.Locale]["STRESS"],
          string.format(Translations[Config.Locale]["YOUR_STRESS"], stress), "error", 5000, "fa-solid fa-brain", "red")
      end
    end

    Wait(10000)
  end
end)

RegisterNetEvent("ak4y-hud:stress:add", function(val)
  stress = stress + val
  if stress > 100 then
    stress = 100
  end
  SendNUIMessage({
    action = "stress",
    stress = stress,
  })
end)

RegisterNetEvent("ak4y-hud:stress:decrease", function(val)
  stress = stress - val
  if stress < 0 then
    stress = 0
  end
  SendNUIMessage({
    action = "stress",
    stress = stress,
  })
end)

exports('GetStress', function()
  return stress
end)