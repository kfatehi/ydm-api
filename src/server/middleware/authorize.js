var logger = require('winston');
var secret = process.env.YDM_API_SECRET;

if (!secret) logger.warn('YDM_API_SECRET is unset. No authorization will take place!');
else logger.info('API secret set. Make sure to use SSL!')


module.exports = function(req, res, next) {
  if (!secret) next();
  else {
    if (req.get('X-Auth-Token') === secret) next();
    else res.status(401).end();
  }
}
