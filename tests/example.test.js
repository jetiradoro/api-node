/* eslint-disable no-undef */
require("jest-json-matchers/register")
const ExampleService = require("../src/components/example/services/ExampleService")
const LogService = require("../src/libs/LogService")

describe("example tests suite", () => {
  it("test service", async () => {
    const result = ExampleService.testProcess()
    LogService.log({ result })
    expect(JSON.stringify(result)).toBeJSON()
  })
})
