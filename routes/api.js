var config = require('../config');
var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {

  var response = {
    "status": 400,
    "message": "Bad request"
  };

  if (req._body) {
    var slackTeamId = req.body.team_id;
    var slackToken = req.body.token;
    if (slackTeamId && slackTeamId === process.env.slackTeamId &&
        slackToken && slackToken === process.env.slackToken) {
      response = {
        "response_type": "in_channel",
        "text": "Custom Slack Command Test",
      }
      if (body.text) {
        response.attachments = [{ "text": "You said " + body.text }];
      }
    }
  }
  res.status(400);
  res.json(response);
});

module.exports = router;
