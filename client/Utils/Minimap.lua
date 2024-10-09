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
  SendReactMessage("updateConfigData", {
    key = "serverLogo",
    value = Config.ServerLogo
  })
  SendReactMessage("updateConfigData", {
    key = "inventoryImagePath",
    value = Config.InventoryImagePath
  })
end

Citizen.CreateThread(function()
  local minimapXOffset = 0.0
  local minimapYOffset = 0.0
  -- İlk olarak mevcut ekran çözünürlüğünü al ve referans çözünürlük olarak kullan
  local initialScreenW, initialScreenH = GetActiveScreenResolution()

  -- Minimap bileşenlerini yeniden ayarlama işlevi
  local function updateMinimapPosition()
    -- Mevcut ekran çözünürlüğünü al
    local screenW, screenH = GetActiveScreenResolution()

    -- Ölçek faktörlerini hesapla
    local scaleX = screenW / initialScreenW
    local scaleY = screenH / initialScreenH

    -- Boyutları biraz büyütmek için çarpan kullanın (örneğin 1.2 ile %20 büyütülecek)
    local sizeMultiplier = 1.265

    -- Haritanın, maskenin ve bulanıklığın yeni konumları (ölçeklendirilmiş ve boyutu büyütülmüş)
    SetMinimapComponentPosition("minimap", "L", "B", (-0.0045 * scaleX) + minimapXOffset,
      (-0.022 * scaleY) + minimapYOffset, 0.150 * scaleX * sizeMultiplier, 0.188 * scaleY * sizeMultiplier)
    SetMinimapComponentPosition("minimap_mask", "L", "B", (-0.0045 * scaleX) + minimapXOffset,
      (0.000 * scaleY) + minimapYOffset, 0.111 * scaleX * sizeMultiplier, 0.159 * scaleY * sizeMultiplier)
    SetMinimapComponentPosition("minimap_blur", "L", "B", (-0.045 * scaleX) + minimapXOffset,
      (0.020 * scaleY) + minimapYOffset, 0.266 * scaleX * sizeMultiplier, 0.237 * scaleY * sizeMultiplier)
  end

  while true do
    if MinimapEditMode then
      -- Minimap'i düzenleme modu
      if IsControlPressed(0, 174) then     -- Sol ok
        minimapXOffset = minimapXOffset - 0.001
      elseif IsControlPressed(0, 175) then -- Sağ ok
        minimapXOffset = minimapXOffset + 0.001
      end
      if IsControlPressed(0, 172) then     -- Yukarı ok
        minimapYOffset = minimapYOffset - 0.001
      elseif IsControlPressed(0, 173) then -- Aşağı ok
        minimapYOffset = minimapYOffset + 0.001
      end

      if IsControlJustPressed(0, 201) then -- Enter tuşu
        -- Düzenleme modunu kapat
        MinimapEditMode = false
        SetNuiFocus(true, true)
        SendReactMessage("toggleSettings", true)
      end

      -- Minimap konumunu güncelle
      updateMinimapPosition()

      -- Kısa bir gecikme
      Wait(10)
    else
      Wait(500) -- Düzenleme modunda değilse daha uzun süre bekle
    end
  end
end)

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

local MinimapEditMode = false
RegisterNuiCallback('setMinimapEditMode', function(data, cb)
  MinimapEditMode = data
  if MinimapEditMode then
    Config.Notify("Minimap Edit Mode", "You can now move the minimap using arrow keys.", "info", 5e3, "fa-solid fa-map",
      "blue")
    Config.Notify("Minimap Edit Mode", "Use enter to exit the minimap edit mode.", "info", 5e3, "fa-solid fa-map", "blue")
    SendReactMessage("toggleSettings", false)
    SetNuiFocus(false, false)
  else
    Config.Notify("Minimap Edit Mode", "You have exited the minimap edit mode.", "info", 5e3, "fa-solid fa-map", "blue")
    DisplayRadar(false)
    SetBigmapActive(true, false)
    Wait(100)
    SetBigmapActive(false, false)
    DisplayRadar(true)
  end
end)

RegisterNuiCallback('toggleMinimap',  function (data)
  local minimapState = data.showMinimap; -- 0 = hide, 1 = circle, 2 = square
  
end)