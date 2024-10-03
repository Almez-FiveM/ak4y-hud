fx_version 'cerulean'

game 'gta5'
author 'almez#0 & ak4y'
description 'Ak4y Hud | discord.gg/ak4y'

client_scripts {
  'client/**',
}

shared_scripts {
  'Config.lua',
}

-- server_scripts {
--   'server/*.lua',
-- }

-- ui_page {
--   'web/debug/index.html',
-- }

-- files {
--   "web/debug/index.html",
-- }

ui_page {
  "web/build/index.html",
}

files {
  "web/build/index.html",
  "web/build/static/js/*.js",
  "web/build/static/css/*.css",
  "web/build/static/media/*.png",
  "web/build/static/media/*.svg",
  "web/build/static/media/*.ico",
}

lua54 'yes'