Config = {}

Config.SpeedType = "KMH" -- KMH or MPH

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

