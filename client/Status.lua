local ped = PlayerPedId()
local SeatBelt = false

CreateThread(function()
  hunger = 0
  thirst = 0
   
  if GetResourceState("es_extended") == "started" then
    local PlayerData = getPlayerData()
    while PlayerData.accounts == nil do
      Wait(100)
      PlayerData = getPlayerData()
    end
    AddEventHandler("esx_status:onTick", function(data)
      for i = 1, #data do
        if data[i].name == "hunger" then hunger = math.floor(data[i].percent) end
        if data[i].name == "thirst" then thirst = math.floor(data[i].percent) end
      end
    end)
  elseif GetResourceState("qb-core") == "started" then
    local PlayerData = getPlayerData()
    CreateThread(function()
      while true do
        hunger = PlayerData.metadata["hunger"]
        thirst = PlayerData.metadata["thirst"]
  
        Wait(2000)
      end
    end)
  end

  Wait(500)
  loadMap()
  Wait(500)

  while true do
    local PlayerData = getPlayerData()
    local health = GetEntityHealth(ped)
    local maxHealth = GetPedMaxHealth(ped)
    local money = 0
    local bank = 0
    health = (health - 100) * 100 / (maxHealth - 100)
    local armor = GetPedArmour(ped)
    local stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId())
    -- make it int for the frontend
    stamina = math.floor(stamina)
    SendReactMessage("updateStatus", {
      health = health,
      armor = armor,
      food = hunger,
      water = thirst,
      stress = exports["ak4y-hud"]:GetStress(),
      stamina = stamina
    })

    Config.FetchUserInfo()
    UpdateMenuInfo()
    Wait(300)
  end
end)

---@param action string The action you wish to target
---@param data any The data you wish to send along with this action
function SendReactMessage(action, data)
  SendNUIMessage({
    action = action,
    data = data
  })
end

RegisterNuiCallback('disableFocus', function(data, cb)
  SetNuiFocus(false, false)
  cb('ok')
end)

RegisterNuiCallback('toggleMinimap', function(data, cb)
  DisplayRadar(data.showMinimap)
  cb('ok')
end)


local controlsOn = false
Citizen.CreateThread(function ()
  while true do 
    -- is left ctrl and mouse 1 pressed
    DisableControlAction(0, 36, true)
    if IsDisabledControlPressed(0, 36) then
      DisableControlAction(0, 24, true)
      if IsDisabledControlPressed(0, 24) then
        SetNuiFocus(true, true)
        controlsOn = true
      end
    end
    Wait(1)
  end
end)

RegisterNuiCallback('escapePressed', function (data, cb)
  SetNuiFocus(false, false)
  controlsOn = false
  SendReactMessage("toggleSettings", false)
  cb('ok')
end)

local vehicleDoors = {
  [0] = false,
  [1] = false,
  [2] = false,
  [3] = false,
  [4] = false,
  [5] = false,
}

local neons = {
  [0] = false,
  [1] = false,
  [2] = false,
  [3] = false,
}

function UpdateMenuInfo()
  local hour = GetClockHours()
  local minute = GetClockMinutes()
  if hour < 10 then
    hour = "0" .. hour
  end
  if minute < 10 then
    minute = "0" .. minute
  end 

  local IsNight = false
  if tonumber(hour) >= 20 or tonumber(hour) < 6 then
    IsNight = true
  end

  local ped = PlayerPedId()
  local vehicle = GetVehiclePedIsIn(ped, false)
  if vehicle ~= 0 then
    for i = 0, 5 do
      vehicleDoors[i] = GetVehicleDoorAngleRatio(vehicle, i) > 0.1
    end

    for i = 0, 3 do
      neons[i] = IsVehicleNeonLightEnabled(vehicle, i)
    end
  else
    for i = 0, 5 do
      vehicleDoors[i] = false
    end

    for i = 0, 3 do
      neons[i] = false
    end
  end

  local coords = GetEntityCoords(ped)
  local streetHash, roadHash = GetStreetNameAtCoord(table.unpack(coords))
  SendReactMessage("updateMenuData", {
    time = hour .. ":" .. minute,
    nightMode = IsNight,
    vehicleDoors = vehicleDoors,
    neons = neons,
    streetName = GetStreetNameFromHashKey(streetHash)
  })
end