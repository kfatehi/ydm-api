var path = require('path')
  , dropsHome = path.resolve(__dirname+'/../drops')
  , Ydm = require('ydm')

module.exports = new Ydm({ dropsPath: dropsHome })
