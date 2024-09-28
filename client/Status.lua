ESX = exports["es_extended"]:getSharedObject()
local ped = PlayerPedId()
local SeatBelt = false

CreateThread(function()
  Wait(500)
  loadMap()
  Wait(500)
  -- SetNuiFocus(true, true)
  SetRadarBigmapEnabled(false, false)
  local PlayerData = ESX.GetPlayerData()

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
    local accounts = PlayerData.accounts
    local money = 0
    local bank = 0
    for i = 1, #accounts do
      if accounts[i].name == "money" then
        money = accounts[i].money
      elseif accounts[i].name == "bank" then
        bank = accounts[i].money
      end
    end
    health = (health - 100) * 100 / (maxHealth - 100)
    local armor = GetPedArmour(ped)
    SendReactMessage("updateStatus", {
      health = health,
      armor = armor,
      food = hunger,
      water = thirst,
    })
    local plyWeapon = exports.ox_inventory:getCurrentWeapon()
    print(json.encode(plyWeapon))
    if plyWeapon == nil then
      plyWeapon = {
        name = "",
        label = "",
        metadata = {
          ammo = 0
        }
      }
    end
    SendReactMessage("updateInfo", {
      onlineCount = '233',
      id = GetPlayerServerId(PlayerId()),
      cash = money,
      bank = bank,
      job = PlayerData.job.label,
      weapon = plyWeapon.name,
      weaponLabel = plyWeapon.label,
      ammoCount = plyWeapon.metadata.ammo,
      ammoMax = plyWeapon.name ~= "" and GetMaxAmmoInClip(ped, GetHashKey(plyWeapon.name)) or 0
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