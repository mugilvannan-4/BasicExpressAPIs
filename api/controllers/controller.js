'use strict';



function addition(req, res) {
 var out = req.body.a + req.body.b
 res.status(200).send({ result: out})
}


module.exports = {
    addition: addition
  };