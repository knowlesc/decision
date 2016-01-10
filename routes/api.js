var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
    var response = {
    "response_type": "in_channel",
    "text": "Text",
    "attachments": [
        {
            "text":"Attachment"
        }
    ]
}
  res.json({test: "test"});
});

module.exports = router;
