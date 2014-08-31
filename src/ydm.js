var path = require('path')
  , dropsPath = path.resolve(process.env.YDM_API_DROPS || path.join(process.env.HOME, ".ydm-api", "drops"))
  , Ydm = require('ydm')
  , logger = require('winston')

logger.info('Using drops path '+dropsPath)
logger.info('You can override the drops path with env var YDM_API_DROPS')

module.exports = new Ydm({
  dropsPath: dropsPath
});
