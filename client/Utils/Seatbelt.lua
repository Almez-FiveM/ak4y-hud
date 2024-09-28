RegisterKeyMapping("toggleseatbelt", "Toggle Seat Belt", "keyboard", 'B')
RegisterCommand("toggleseatbelt", function(src, args, raw)
  if vehicleType == "bike" or vehicleType == "boat" then return end
  local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
  if vehicle ~= 0 then
    SeatBelt = not SeatBelt
    if SeatBelt then
      Notify('Seatbelt', 'You have put on your seat belt.', "success", 5e3, "fas fa-car-crash", "green")
    else
      Notify('Seatbelt', 'You removed your seatbelt.', "error", 5e3, "fas fa-car-crash", "red")
    end
  end
end)