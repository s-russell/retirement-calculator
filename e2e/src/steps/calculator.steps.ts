import { Given, When, Then } from "cucumber";
import { expect } from "chai";

Given("the default client", async function() {
  await this.calculatorPage.setCurrentAge(20);
  await this.calculatorPage.setRetirementAge(65);
  await this.calculatorPage.setAnnualIncome(40000);
  await this.calculatorPage.setSavingsRate(1.0);
});

Given("the client's current age is {int}", async function(age) {
  await this.calculatorPage.setCurrentAge(age);
});

When("the client information is validated", async function() {
  await this.calculatorPage.validateInput();
});

Then("the client can calculate their retirement", async function() {
  expect(await this.calculatorPage.isValid()).to.be.true;
});

Then("the client cannot calculate their retirement", async function() {
  expect(await this.calculatorPage.isValid()).to.be.false;
});
