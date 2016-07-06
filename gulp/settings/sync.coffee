browser = require 'browser-sync'

sync =
    dev  : browser.create()
    doc  : browser.create()
    dist : browser.create()

exports.sync = sync
