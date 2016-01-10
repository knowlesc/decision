var config = require('../config');
var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {

  if (req._body) {
    var body = req.body;
    if (body.team_id === process.env.slackTeamId) {
      console.log("token good")
    } else { console.log("token bad") }

    if (body.token === process.env.slackToken) {
      console.log("team id good")
    } else { console.log("team id bad") }

    if (body.team_id === process.env.slackTeamId &&
        body.token === process.env.slackToken) {
      console.log(req.body)
    }
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
