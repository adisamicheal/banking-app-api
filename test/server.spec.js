const supertest = require("supertest");
const assert = require('assert');
const account = require('../routes/apis/account');

describe("GET /", function() {
  it("it should have a response of all the bank accounts", function() {
    supertest(account)
      .get("/")
      .expect({ 
      name: "name",
      accountnumber: "accountnumber",
      email: "email",})
      .end(function(err, res){
      if (err) done(err);
      done();
    });
  });
});

describe("GET /single/:id", function() {
  it("it should have details of a single bank account", function() {
    let eachAccount = { 
      name: "name",
      accountnumber: "accountnumber",
      email: "email"
      }
      supertest(account)
      .get("/single/:id")
      .expect(eachAccount)
      .expect(function(res) {
      assert.equal(res.body.message, 'Details of a single account accepted');
      done();
    });
  });
});

describe("POST /createnew", function(){
  it("To create a new bank account", function() {
    let eachAccount = { 
      name: "name",
      accountnumber: "accountnumber",
      email: "email"
      }
      supertest(account)
      .post("/createnew")
      .send(eachAccount)
      .expect(eachAccount)
      .expect(function(res) {
      assert.equal(res.body.message, 'New account created');
      done();
    });
  });
});

it("it shoud return status code 400 if nothing is sent", function(){
  supertest(account)
    .post("/createnew")
    .send({})
    .expect(400)
    .expect(function(res) {
    assert.equal(res.body.message, 'No details yet');
    done();
  });
});

describe("PUT /edit/:id", function(){
  it("To edit an existing bank account", function() {
    let editedAccount = { 
      name: "name",
      accountnumber: "accountnumber",
      email: "email",
      }
      supertest(account)
      .post("/edit/:id")
      .send(editedAccount)
      .expect(editedAccount)
      .expect(function(res) {
      assert.equal(res.body.message, 'Account Edited !');
      done();
    });
  });
});

it("It should return a status code 400 if nothing is sent", function(){
  supertest(account)
    .post("/edit/:id")
    .send({})
    .expect(400)
    .expect(function(res) {
    assert.equal(res.body.message, 'Please input details');
    done();
  });
});

describe("DELETE /:id", function() {
  it("It should have details of a single bank account", function() {
    let eachAccount = { 
      name: "name",
      accountnumber: "accountnumber",
      email: "email",
      }
      supertest(account)
      .get("/:id")
      .expect(eachAccount)
      .expect(function(res) {
      assert.equal(res.body.message, 'Account Deleted !');
      done();
    });
  });
});