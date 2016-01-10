var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {
  console.log(req)
  var response = {
    "response_type": "in_channel",
    "text": "Text",
    "attachments": [
      {
        "text":"Attachment"
      }
    ]
    "request": req
  }
  res.json(response);
});

module.exports = router;
