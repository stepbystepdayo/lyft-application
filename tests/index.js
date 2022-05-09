const supertest = require("supertest");
const app = require("../index");

describe("testing express app", () => {
  // positive testing
  it("should return Hello Everyone", (testDone) => {
    supertest(app)
      .get("/")
      .expect(200, /Hello Everyone!/, testDone);
  });
  // negative testing
  it("should return 404", (testDone) => {
    supertest(app)
      .get("/whatever")
      .expect(404, /unsupported route/, testDone);
  });
});

// $(npm bin)/nyc --report-dir ${COVERAGE_DIR:-artifacts/coverage} --reporter lcov $(npm bin)/mocha tests/*.js
