var ydm = require('../../ydm')
  , path = require('path')
  , fs = require('fs')
  , logger = require('winston')

module.exports = function(req, res, next) {
  var filePath = path.join(ydm.dropsPath, req.params.name+'.js')
  fs.writeFile(filePath, req.body, function(err) {
    if (err) {
      logger.error(err.stack)
      res.status(500).end(res.message);
    } else {
      logger.info('Created '+req.params.name)
      res.status(201).end('ok');
    }
  })
}
