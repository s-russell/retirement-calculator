import { Given, When, Then, Before } from "cucumber";
import { AppPage } from "../pages/app.po";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the home page", async () => await page.navigateTo());

When("I do nothing", () => {});

Then("I should see the title", async () => {
  expect(await page.getTitleText()).to.equal("Welcome to web-tier!");
});
