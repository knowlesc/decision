var config = require('../config');
var express = require('express');
var sinon = require('sinon');
var router = express.Router();

router.post('/test', function(req, res, next) {

  var response = {
    "status": 400,
    "message": "Bad request"
  };
  res.status(400);

  if (req._body) {
    var slackTeamId = req.body.team_id;
    var slackToken = req.body.token;

    if (slackTeamId && slackTeamId === process.env.slackTeamId &&
        slackToken && slackToken === process.env.slackToken) {
      response = {
        "response_type": config.slack_response_type,
        "text": config.slack_command_title,
      }
      if (req.body.text) {
        response.attachments = [{ "text": "You said " + req.body.text }];
      }
      res.status(200);
    }
  }
  
  res.json(response);
});

module.exports = router;
