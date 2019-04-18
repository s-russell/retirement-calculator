import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Given("the client's current age is {int}", async function(age) {
  await this.calculatorPage.setCurrentAge(age);
});

When("the client age validator runs", async function() {
  await this.calculatorPage.validateInput();
});

Then(/the client validation (passes|fails)./, async function(result: string) {
  const valid = result === "passes";

  expect(await this.calculatorPage.isValid()).to.be[valid ? "true" : "false"];
});
