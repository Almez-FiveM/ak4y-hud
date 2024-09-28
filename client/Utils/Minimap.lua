function loadMap()
  DisplayRadar(false)
  if not firstLoad then
    Notify("Loading...", "Please wait while the map is loading.", "success", 5e3, "fa-solid fa-map", "green")
  end
  local defaultAspectRatio = 1.92e3 / 1.08e3
  local resolutionX, resolutionY = GetActiveScreenResolution()
  local aspectRatio = resolutionX / resolutionY
  local minimapOffset = -3e-3
  if aspectRatio > defaultAspectRatio then
    minimapOffset = (defaultAspectRatio - aspectRatio) / 3.6 - 8e-3
  end
  RequestStreamedTextureDict("mapshape", false)
  if not HasStreamedTextureDictLoaded "mapshape" then Wait(150) end
  SetMinimapClipType(0)
  AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "mapshape", "radarmasksm")
  AddReplaceTexture("platform:/textures/graphics", "radarmask1g", "mapshape", "radarmasksm")
  SetMinimapComponentPosition("minimap", "L", "B", 0 + minimapOffset, -0.025, 0.1638, 0.183)
  SetMinimapComponentPosition("minimap_mask", "L", "B", 0 + minimapOffset, 0.3, 0.128, 0.2)
  SetMinimapComponentPosition("minimap_blur", "L", "B", -0.01 + minimapOffset, 0.045, 0.262, 0.3)
  SetBlipAlpha(GetNorthRadarBlip(), 0)
  SetMinimapClipType(0)
  DisplayRadar(true)
  SetRadarBigmapEnabled(true, true)
  Wait(10)
  SetRadarBigmapEnabled(false, false)
  if not firstLoad then
    firstLoad = true
    Citizen.SetTimeout(1e3, function()
      Notify("Loaded", "The map has been loaded.", "success", 5e3, "fa-solid fa-map", "green")
    end)
  end
end

CreateThread(function()
  while true do
    HideHudComponentThisFrame(2)
    HideHudComponentThisFrame(6)
    HideHudComponentThisFrame(7)
    HideHudComponentThisFrame(8)
    HideHudComponentThisFrame(9)
    HideHudComponentThisFrame(21)
    HideHudComponentThisFrame(22)
    Wait(0)
  end
end)