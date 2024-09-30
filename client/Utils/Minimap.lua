function loadMap()
  DisplayRadar(false)
  if not firstLoad then
    Config.Notify("Loading...", "Please wait while the map is loading.", "success", 5e3, "fa-solid fa-map", "green")
  end
  local defaultAspectRatio = 1.92e3 / 1.08e3
  local resolutionX, resolutionY = GetActiveScreenResolution()
  local aspectRatio = resolutionX / resolutionY
  local minimapOffset = -0.005
  if aspectRatio > defaultAspectRatio then
    minimapOffset = (defaultAspectRatio - aspectRatio) / 3.6 - 8e-3
  end
  RequestStreamedTextureDict("mapshape", false)
  if not HasStreamedTextureDictLoaded "mapshape" then Wait(150) end
  SetMinimapClipType(1)
  AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "mapshape", "radarmasksm")
  AddReplaceTexture("platform:/textures/graphics", "radarmask1g", "mapshape", "radarmasksm")
  SetMinimapComponentPosition("minimap", "L", "B", 0 + minimapOffset, -0.060, 0.1638, 0.183)
  SetMinimapComponentPosition("minimap_mask", "L", "B", 0 + minimapOffset, -0.030, 0.128, 0.2)
  SetMinimapComponentPosition("minimap_blur", "L", "B", -0.01 + minimapOffset, -0.015, 0.285, 0.3)
  SetBlipAlpha(GetNorthRadarBlip(), 0)
  SetMinimapClipType(1)
  DisplayRadar(true)
  SetRadarBigmapEnabled(true, true)
  Wait(10)
  SetRadarBigmapEnabled(false, false)
  if not firstLoad then
    firstLoad = true
    Citizen.SetTimeout(1e3, function()
      Config.Notify("Loaded", "The map has been loaded.", "success", 5e3, "fa-solid fa-map", "green")
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

-- local MinimapEditMode = false
-- RegisterCommand('mapEditMode', function()
--   if not MinimapEditMode then
--     MinimapEditMode = true
--     Config.Notify("Minimap Edit Mode", "You can now move the minimap using arrow keys.", "info", 5e3, "fa-solid fa-map",
--     "blue")
--     Config.Notify("Minimap Edit Mode", "Use enter to exit the minimap edit mode.", "info", 5e3, "fa-solid fa-map", "blue")
--   else
--     MinimapEditMode = false
--     Config.Notify("Minimap Edit Mode", "You have exited the minimap edit mode.", "info", 5e3, "fa-solid fa-map", "blue")
--   end
-- end)

-- Citizen.CreateThread(function()
--   local minimapOffset = -0.005
--   local defaultAspectRatio = 1.92e3 / 1.08e3
--   local resolutionX, resolutionY = GetActiveScreenResolution()
--   local aspectRatio = resolutionX / resolutionY
--   if aspectRatio > defaultAspectRatio then
--     minimapOffset = (defaultAspectRatio - aspectRatio) / 3.6 - 8e-3
--   end
--   local MinimapOffset = {
--     ["minimap"] = {
--       posX = 0 + minimapOffset,
--       posY = -0.060,
--     },
--     ["minimap_mask"] = {
--       posX = 0 + minimapOffset,
--       posY = -0.030,
--     },
--     ["minimap_blur"] = {
--       posX = -0.01 + minimapOffset,
--       posY = -0.015,
--     },
--   }

--   while true do
--     local sleep = 1000
--     print(MinimapEditMode)
--     if MinimapEditMode then
--       -- check if player using arrow keys to move the minimap
--       sleep = 0
--       print(IsControlPressed(0, 174), IsControlPressed(0, 175), IsControlPressed(0, 172), IsControlPressed(0, 173))
--       if IsControlPressed(0, 174) then
--         MinimapOffset["minimap"].posX = MinimapOffset["minimap"].posX - 0.001
--         MinimapOffset["minimap_mask"].posX = MinimapOffset["minimap_mask"].posX - 0.001
--         MinimapOffset["minimap_blur"].posX = MinimapOffset["minimap_blur"].posX - 0.001
--       end

--       if IsControlPressed(0, 175) then
--         MinimapOffset["minimap"].posX = MinimapOffset["minimap"].posX + 0.001
--         MinimapOffset["minimap_mask"].posX = MinimapOffset["minimap_mask"].posX + 0.001
--         MinimapOffset["minimap_blur"].posX = MinimapOffset["minimap_blur"].posX + 0.001
--       end

--       if IsControlPressed(0, 172) then
--         MinimapOffset["minimap"].posY = MinimapOffset["minimap"].posY + 0.001
--         MinimapOffset["minimap_mask"].posY = MinimapOffset["minimap_mask"].posY - 0.001
--         MinimapOffset["minimap_blur"].posY = MinimapOffset["minimap_blur"].posY - 0.001
--       end

--       if IsControlPressed(0, 173) then
--         MinimapOffset["minimap"].posY = MinimapOffset["minimap"].posY - 0.001
--         MinimapOffset["minimap_mask"].posY = MinimapOffset["minimap_mask"].posY + 0.001
--         MinimapOffset["minimap_blur"].posY = MinimapOffset["minimap_blur"].posY + 0.001
--       end

--       SetMinimapComponentPosition("minimap", "L", "B", MinimapOffset["minimap"].posX, MinimapOffset["minimap"].posY,
--         0.1638, 0.183)
--       SetMinimapComponentPosition("minimap_mask", "L", "B", MinimapOffset["minimap_mask"].posX,
--         MinimapOffset["minimap_mask"].posY, 0.128, 0.2)
--       SetMinimapComponentPosition("minimap_blur", "L", "B", MinimapOffset["minimap_blur"].posX,
--         MinimapOffset["minimap_blur"].posY, 0.285, 0.3)
--       SetMinimapComponentPosition("bigmap", "L", "B", MinimapOffset["minimap_blur"].posX,
--         MinimapOffset["minimap_blur"].posY, 0.285, 0.3)
--     end
--     Wait(sleep)
--   end
-- end)
