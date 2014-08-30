var logger = require('winston')
  , express = require('express')
  , app = express()
  , http = require('http').Server(app)

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { colorize: true });

if (process.env.NODE_ENV === "development") {
  logger.info('development mode');

  app.use(function (req, res, next) {
    logger.info(req.method + " " + req.path);
    next();
  });
}

// Cross Domain
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ALLOW_ORIGIN || "*");
  res.header("Access-Control-Expose-Headers", "X-Filename");
  res.header("Access-Control-Allow-Headers", "Referer, Range, Accept-Encoding, Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
};

app.use(allowCrossDomain);
app.use('/api/v1/', require('./routes'));

module.exports = {
  http: http,
  app: app
}
