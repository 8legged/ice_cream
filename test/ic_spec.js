/* jshint expr: true */
var expect = require('chai').expect;

var Treat = require('../lib/treat').Treat;
describe('Treat tests', function() {

  var treat;
  beforeEach(function() {
    treat = new Treat('chocolate', '2');
  });
  describe('constructor', function() {
    it('treat should be truthy(exists)', function() {
      expect(treat).to.be.ok;
    });
    it('treat should have flavor property', function() {
      expect(treat).to.have.property('flavor');
    });
    it('treat should have scoops property', function() {
      expect(treat).to.have.property('scoops');
    });
  });
});
