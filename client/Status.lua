ESX = exports["es_extended"]:getSharedObject()
local ped = PlayerPedId()
local SeatBelt = false

CreateThread(function()
  loadMap()
  Wait(500)
  SetRadarBigmapEnabled(false, false)
  AddEventHandler("esx_status:onTick", function(data)
    for i = 1, #data do
      if data[i].name == "hunger" then hunger = math.floor(data[i].percent) end
      if data[i].name == "thirst" then thirst = math.floor(data[i].percent) end
    end
  end)
  while true do
    local health = GetEntityHealth(ped)
    local maxHealth = GetPedMaxHealth(ped)
    health = (health - 100) * 100 / (maxHealth - 100)
    local armor = GetPedArmour(ped)
    SendReactMessage("updateStatus", {
      health = health,
      armor = armor,
      food = hunger,
      water = thirst,
    })
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