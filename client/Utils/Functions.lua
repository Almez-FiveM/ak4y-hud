if GetResourceState("es_extended") == "started" then
  Config.FetchUserInfo = function()
    local PlayerData = ESX.GetPlayerData()
    local accounts = PlayerData.accounts
    local plyJobLabel = PlayerData.job.label
    for i = 1, #accounts do
      if accounts[i].name == "money" then
        money = accounts[i].money
      elseif accounts[i].name == "bank" then
        bank = accounts[i].money
      end
    end

    local plyWeapon = exports.ox_inventory:getCurrentWeapon()
    if plyWeapon == nil then
      plyWeapon = {
        name = "",
        label = "",
        metadata = {
          ammo = 0
        }
      }
    end

    local hour = GetClockHours()
    local minute = GetClockMinutes()
    if hour < 10 then
      hour = "0" .. hour
    end
    if minute < 10 then
      minute = "0" .. minute
    end

    SendReactMessage("updateInfo", {
      onlineCount = '233',
      id = GetPlayerServerId(PlayerId()),
      cash = money,
      bank = bank,
      job = plyJobLabel,
      weapon = plyWeapon.name,
      weaponLabel = plyWeapon.label,
      ammoCount = plyWeapon.metadata.ammo,
      ammoMax = plyWeapon.name ~= "" and GetMaxAmmoInClip(ped, GetHashKey(plyWeapon.name)) or 0,
      time = hour .. ":" .. minute
    })
  end
end

Framework = nil 

if GetResourceState("es_extended") == "started" then
    Framework = exports['es_extended']:getSharedObject()
elseif GetResourceState("qb-core") == "started" then
    Framework = exports["qb-core"]:GetCoreObject()
end

local firstLoad = false

function triggerServerCallback(...)
    if Config.Framework == "esx" then
        Framework.TriggerServerCallback(...)
    else
        Framework.Functions.TriggerCallback(...)
    end
end

function ragdollP()
	if not SeatBelt then 
		playerPed = PlayerPedId()
		local position = GetEntityCoords(playerPed)
		SetEntityCoords(playerPed, position.x, position.y, position.z - 0.47, true, true, true)
		SetEntityVelocity(playerPed, prevVelocity.x, prevVelocity.y, prevVelocity.z)
		Wait(1)
		SetPedToRagdoll(playerPed, 1000, 1000, 0, 0, 0, 0)
	end
end

function IsWhitelistedWeaponStress(weapon)
    if weapon then
        for _, v in pairs(Config.WhitelistedWeaponStress) do
            if weapon == v then
                return true
            end
        end
    end
    return false
end

function table_size(tbl)
    local count = 0
    for _ in pairs(tbl) do count = count + 1 end
    return count
end