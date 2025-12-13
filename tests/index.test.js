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

test("getting data from db works", (done) => {
  request(app)
    .get("/user/jana@email.com")
    .expect("Content-Type", /json/)
    .expect({
      user: {
        id: "12e03de4-2f81-41d8-a960-3cf4138356a8",
        email: "jana@email.com",
        name: "Jana",
      },
    })
    .expect(200, done);
});

test("return null if no user found", (done) => {
  request(app)
    .get("/user/null@email.com")
    .expect("Content-Type", /json/)
    .expect({
      user: null,
    })
    .expect(200, done);
});
