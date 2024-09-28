CreateThread(function()
  local carSpeed, realSpeed, gear, vehicleFuel = nil
  while true do
    local ped = PlayerPedId()
    isInVehicle = IsPedInAnyVehicle(ped, false)
    if isInVehicle then
      DisplayRadar(1)
      local vehicle = GetVehiclePedIsIn(ped, false)
      _, lightsOn, highlightsOn = GetVehicleLightsState(vehicle)
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
        vites = "N"
      elseif gear > 0 then
        vites = "D" .. gear
      end
      if vehReversing then vites = "R" end
      SendReactMessage("updateVehicle", {
        speed = realSpeed,
        fuel = vehicleFuel,
        rpm = rpm,
        gear = vites,
        lightsOn = lightsOn,
        nitro = vehicleNitro,
        engineHealth = GetVehicleEngineHealth(vehicle),
        seatBelt = SeatBelt
      })
    else
      SendNUIMessage({ action = "hideVehicle" })
    end
    Wait(100)
  end
end)