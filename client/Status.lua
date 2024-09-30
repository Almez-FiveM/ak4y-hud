ESX = exports["es_extended"]:getSharedObject()
local ped = PlayerPedId()
local SeatBelt = false

CreateThread(function()
  local PlayerData = ESX.GetPlayerData()
  while PlayerData.accounts == nil do
    Wait(100)
    PlayerData = ESX.GetPlayerData()
  end

  Wait(500)
  loadMap()
  Wait(500)
  AddEventHandler("esx_status:onTick", function(data)
    for i = 1, #data do
      if data[i].name == "hunger" then hunger = math.floor(data[i].percent) end
      if data[i].name == "thirst" then thirst = math.floor(data[i].percent) end
    end
  end)
  while true do
    local PlayerData = ESX.GetPlayerData()
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