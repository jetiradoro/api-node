/* eslint-disable no-undef */
require("jest-json-matchers/register");
const ExampleService = require("../src/components/example/services/ExampleService");

describe("example tests suite", () => {
  it("test service", async () => {
    const result = ExampleService.testProcess();

    expect(JSON.stringify(response)).toBeJSON();
  });
});
