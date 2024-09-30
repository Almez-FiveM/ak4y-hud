Framework = nil 

if GetResourceState("es_extended") == "started" then
    Framework = exports['es_extended']:getSharedObject()
elseif GetResourceState("qb-core") == "started" then
    Framework = exports["qb-core"]:GetCoreObject()
end

function registerServerCallback(...)
    if GetResourceState("es_extended") == "started" then
        Framework.RegisterServerCallback(...)
    else
        Framework.Functions.CreateCallback(...)
    end
end