var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var config = require('../config');
var app = require('../app.js');

describe('API', function() {

  beforeEach(function() {
    process.env.slackTeamId = "team_id";
    process.env.slackToken = "token";
    config.slack_response_type = 'response';
    config.slack_command_title = 'title';
  })

  describe('Slack command', function() {

    var url = '/api/test';
    var body = {};

    describe('invalid request', function() {

      beforeEach(function() {
        body = {};
      });

      it('should respond with 400 status', function(done) {
        request(app)
          .post(url)
          .send(body)
          .end(function(err, res) {
            if (err) throw err;
            res.should.have.property('status', 400);
            done();
          });
      });
    });
    
    describe('valid request', function() {

      beforeEach(function() {
        body = {
          token: 'token',
          team_id: 'team_id'
        };
      });

      it('should respond with 200 status', function(done) {
        request(app)
          .post(url)
          .send(body)
          .end(function(err, res) {
            if (err) throw err;
            res.should.have.property('status', 200);
            done();
          });
      });

      it('should have correct response type and text', function(done) {
        request(app)
          .post(url)
          .send(body)
          .end(function(err, res) {
            if (err) throw err;
            res.body.response_type.should.equal(config.slack_response_type);
            res.body.text.should.equal(config.slack_command_title);
            done();
          });
      });
    });
  });
});