const app = require("../app");
const request = require("supertest");

// testing routes & controllers

test("index route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "John Doe" })
    .expect(200, done);
});

test("testing routes works", (done) => {
  request(app)
    .post("/test")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request(app)
        .get("/test")
        .expect({ array: ["hey"] })
        .expect(200, done);
    });
});

// testing db operations

/* test("") */