local musicPlaying = false
RegisterNuiCallback('playSound', function (data, cb)
  local plyCoords = GetEntityCoords(PlayerPedId())
  exports['xsound']:PlayUrlPos('ak4y-hud-music', data.url, 1, plyCoords, {
    onPlayEnd = function()
      musicPlaying = false
    end,
  })
  cb('ok')
end)

RegisterNuiCallback('resumeSong', function (data, cb)
  exports['xsound']:Resume('ak4y-hud-music')
  cb('ok')
end)

RegisterNuiCallback('pauseSong', function (data, cb)
  exports['xsound']:Pause('ak4y-hud-music')
  cb('ok')
end)

Citizen.CreateThread(function()
  while true do
    local sleep = 1000
    if musicPlayer then
      sleep = 100
      local plyCoords = GetEntityCoords(PlayerPedId())
      exports['xsound']:Position('ak4y-hud-music', plyCoords)
    end
    Wait(sleep)
  end
end)