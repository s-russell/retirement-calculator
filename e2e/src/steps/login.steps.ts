import { Given, When, Then, Before } from "cucumber";
import { expect } from "chai";

Given("I go to the login page", async function() {
  await this.loginPage.navigateTo();
});

Given("I am not logged in", async function() {
  await this.loginPage.navigateTo();
});

When(/I log in (successfully|unsuccessfully)/, async function(
  successAdverb: string
) {
  const { username, password } =
    successAdverb === "successfully"
      ? this.credentials.good
      : this.credentials.bad;
  await this.loginPage.login(username, password);
});

When("I go to the retirement calculator page", async function() {
  await this.calculatorPage.navigateTo();
});

Then("I see the retirement calculator", async function() {
  const isRetirementCalculatorPage = await this.calculatorPage.isVisible();
  expect(isRetirementCalculatorPage).to.be.true;
});

Then("I see my user information", async function() {
  expect(await this.calculatorPage.getUserDisplayName()).to.equal(
    "Steve Stevenson"
  );
});

Then(
  "The retirement calculator is prepopulated with my account info",
  async function() {
    const observedBalance = await this.calculatorPage.getAccountBalance();
    expect(observedBalance).to.contain("10245.10");
  }
);

When("I log out", async function() {
  await this.calculatorPage.logout();
});

Then("I am redirected to the login page", async function() {
  expect(await this.loginPage.isVisible()).to.be.true;
});
