var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/test', function(req, res, next) {
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
