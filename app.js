'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const bp = require('body-parser')

app.use(bp.json())

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 8080;
  app.listen(port, (err) => {
		if (!err) {

			console.log('Server started on port ' + port);
		} else
			console.log(err);
	});
});
