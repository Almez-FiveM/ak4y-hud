CreateThread(function()
  local carSpeed, realSpeed, gear, vehicleFuel = nil
  while true do
    local ped = PlayerPedId()
    isInVehicle = IsPedInAnyVehicle(ped, false)
    if isInVehicle then
      DisplayRadar(1)
      local vehicle = GetVehiclePedIsIn(ped, false)
      _, lightsOn, highlightsOn = GetVehicleLightsState(vehicle)
      local lights = 0 
      if lightsOn == 1 then 
        lights = 1 
      end
      if highlightsOn == 1 then 
        lights = 2 
      end
      vehicleRunning = GetIsVehicleEngineRunning(vehicle)
      carSpeed = GetEntitySpeed(vehicle)
      realSpeed = ("%.1d"):format(math.ceil(carSpeed * 2.236936))
      gear = GetVehicleCurrentGear(vehicle)
      vehicleFuel = GetVehicleFuelLevel(vehicle) or 0
      vehReversing = false
      if GetEntitySpeedVector(vehicle, true).y < -0.1 then
        vehReversing = true
      else
        vehReversing = false
      end
      local rpm = GetVehicleCurrentRpm(vehicle)
      if gear == 0 then
        gearText = "N"
      elseif gear > 0 then
        gearText = "D" .. gear
      end
      if vehReversing then gearText = "R" end

      local vehType = "car"
      
      if IsThisModelABike(GetEntityModel(vehicle)) then vehType = "bike" elseif IsThisModelABoat(GetEntityModel(vehicle)) then vehType = "boat" elseif IsThisModelAHeli(GetEntityModel(vehicle)) then vehType = "plane" elseif IsThisModelAPlane(GetEntityModel(vehicle)) then vehType = "plane" end
      
      if Config.UseCustomFuel then 
        fuel = Config.CustomFuel(vehicle)
      end

      SendReactMessage("updateSpeedometer", {
        speed = realSpeed,
        fuel = vehicleFuel,
        rpm = rpm,
        gear = gearText,
        nitrous = 0,
        seatbelt = SeatBelt,
        engine = vehicleRunning,
        lights = lights,
        speedometerVisible = true,
        vehType = vehType
      })
    else
      SendReactMessage("updateSpeedometer", {
        speedometerVisible = false,
      })
    end
    Wait(100)
  end
end)

RegisterCommand('hud', function ()
  SendReactMessage("toggleSettings", true)
  SetNuiFocus(true, true)
end)