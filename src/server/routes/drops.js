function authorize(req, res, next) {
  next()
}

var bodyParser = require('body-parser')

module.exports = function (r) {
  r.route('/drops/:name')
  .all(authorize)
  /*
   * POST /drops/:name
   * Create or replace a drop
   * Body should contain the valid JavaScript drop definition
   */
  .post(
    bodyParser.text({ type: 'application/javascript' }),
    function(req, res, next) {
      console.log(req.body);
      res.status(201).end();
    }
  )
}
