var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {
  if (req._body) {
    console.log(req.body)
  }
  
  var response = {
    "response_type": "in_channel",
    "text": "Text",
    "attachments": [
      {
        "text":"Attachment"
      }
    ]
  }
  res.json(response);
});

module.exports = router;
