import { Given, When, Then, Before } from "cucumber";
import { expect } from "chai";

Given("I go to the login page", async function() {
  await this.loginPage.navigateTo();
});

When("I log in successfully", async function() {
  const { username, password } = this.credentials.good;
  await this.loginPage.login(username, password);
});

Then("I see the retirement calculator", async function() {
  const isRetirementCalculatorPage = await this.calculatorPage.isVisible();
  expect(isRetirementCalculatorPage).to.be.true;
});

Then(
  "The retirement calculator is prepopulated with my account info",
  async function() {
    const observedBalance = await this.calculatorPage.getAccountBalance();
    expect(observedBalance).to.contain("10245.10");
  }
);
