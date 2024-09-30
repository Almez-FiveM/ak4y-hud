local nitros = {}

if Config.Framework == "esx" then
  Framework.RegisterUsableItem(Config.NitroItem, function(src)
    TriggerClientEvent('ak4y-hud:setupNitro', src)
  end)

  Framework.RegisterServerCallback("ak4y-hud:getVehicleNitro", function(src, cb, plate)
    cb(nitros[plate])
  end)
else
  Framework.Functions.CreateUseableItem(Config.NitroItem, function(src)
    TriggerClientEvent('ak4y-hud:setupNitro', src)
  end)

  Framework.Functions.CreateCallback("codev-modernhud:getVehicleNitro", function(src, cb, plate)
    cb(nitros[plate])
  end)
end

RegisterServerEvent('ak4y-hud:setVehicleNitro', function(plate, count)
  nitros[plate] = count
end)

RegisterServerEvent('ak4y-hud:removeNitroItem', function()
  local src = source

  if Config.Framework == "esx" then
    Player = Framework.GetPlayerFromId(src)
    Player.removeInventoryItem(Config.NitroItem, 1)
  else
    Player = Framework.Functions.GetPlayer(src)
    Player.Functions.RemoveItem(Config.NitroItem, 1)
  end
end)