Config = {}

Config.SpeedType = "KMH" -- KMH or MPH
Config.NitroKey = "X"
Config.SeatBeltKey = "B"

Config.SpeedMultiplier = 2.236936

Config.UseCustomFuel = false -- If you want to use custom fuel script, set this to true and set the export name below
Config.CustomFuel = function(vehicle)
    return exports['LegacyFuel']:GetFuel(vehicle)
end

---@class NotifyType: string | "info" | "success" | "error" | "warning"
---@param title string The title of the notification
---@param message string The message of the notification
---@param type NotifyType The type of the notification
---@param length number The length of the notification
---@param icon string The icon of the notification
Config.Notify = function(title, message, type, length, icon)
  TriggerEvent("ox_lib:notify", {
    title = title,
    description = message,
    type = type,
    duration = length,
    icon = icon
  })
end

Config.StressNotify = true
Config.MinStressToBlur = 50
Config.WhitelistedWeaponStress = { -- Weapons that won't stress
    `weapon_petrolcan`,
    `weapon_hazardcan`,
    `weapon_fireextinguisher`,
    `weapon_candycane`,
    `weapon_flashlight`,
    `weapon_ball`,
    `weapon_acidpackage`,
    `weapon_snowball`,
    `weapon_fertilizercan`,
    `gadget_parachute`,
    `weapon_flare`,
}

Config.AddStress = {
    ["on_shoot"] = {
        min = 1,
        max = 2,
        enable = true,
        chance = 20, -- Change to get stressed
    },
    ["on_fastdrive"] = {
        min = 1,
        max = 3,
        enable = true,
        minSpeed = 110, -- Minimum speed to get stressed
        chance = 50, -- Change to get stressed
    },
}

Config.RemoveStress = {
    ["on_eat"] = {
        min = 5,
        max = 10,
        enable = true,
    },
    ["on_drink"] = {
        min = 5,
        max = 10,
        enable = true,

    },
    ["on_swim"] = {
        min = 5,
        max = 10,
        enable = true,

    },
    ["on_run"] = {
        min = 5,
        max = 10,
        enable = true,
    }
}