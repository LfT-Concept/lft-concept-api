const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const indexPage = require('../../controllers/app.controller.js');

const user = {
  addUser: (name) => {
    this.name = name;
  }
};

describe('AppController', function() {
  describe('getIndexPage', function() {
    it('when defaults specified, then it should call send only once', function() {
      const req = {};
      const res = {
        send: sinon.spy()
      };

      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
    });
    it('when defaults specified, then it should return Hello', function() {
      const req = {};
      const res = {
        send: sinon.spy()
      };

      indexPage.getIndexPage(req, res);
      expect(res.send.firstCall.args[0]).to.equal('Hello!');
    });
  });
});
describe('User', function() {
  describe('addUser', function() {
    it('should add a user', function() {
      sinon.spy(user, 'addUser');
      user.addUser('John Doe');
      //  console.log(user.addUser);
      expect(user.addUser.calledOnce).to.be.true;
    });
  });
});
