var bodyParser = require('body-parser')
  , authorize = require('../middleware/authorize')
  , create = require('../middleware/create')
  , perform = require('../middleware/perform')

module.exports = function (r) {
  r.route('/drops/:name')
  .all(authorize)
  /*
   * POST /drops/:name
   * Create or replace a drop
   * Body should contain a JavaScript drop definition
   */
  .post(bodyParser.text({
    type: 'application/javascript'
  }), create)

  r.route('/drops/:name/:action')
  .all(authorize)
  /*
   * POST /drops/:name/:action
   * Perform an action against a drop
   */
  .post(bodyParser.json(), perform)
}
