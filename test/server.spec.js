const supertest = require("supertest");
const assert = require("assert");
const account = require("../routes/apis/account");
 
describe("GET /", function() {
	it("it should have status code 200", function() {
		supertest(account)
		.get("/")
		.expect(200)
		.end(function(err, res) {
			if (err) done(err);
			done();
		});
	});
});

 it("it shoud has response with hope key with value of loop", function(){
      supertest(account)
        .get("/")
        .expect(account)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
 });

 describe("POST /", function(){
    it("it shoud return status code 200 is name exists", function() {
      supertest(account)
        .post("/")
        .send({name: "Micheal", accountnumber: "009484747", email: "micheal@gmail.com"})
        .expect(200)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });

it("it shoud return status code 400 if we dosent send anything", function(){
    supertest(account)
      .post("/")
      .send({})
      .expect(400)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });

 describe("PUT /", function(){
    it("it shoud return status code 200 is name exists", function() {
      supertest(account)
        .put("/")
        .send({name: "Micheal", accountnumber: "009484747", email: "micheal@gmail.com"})
        .expect(200)
        .end(function(err, res){
          if (err) done(err);
          done();
        });
    });
  });

it("it shoud return status code 400 if we dosent post anything", function(){
    supertest(account)
      .put("/")
      .send({})
      .expect(400)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });