import { browser, by, element } from "protractor";

export class CalculatorPage {
  navigateTo() {
    return browser.get("/calc");
  }

  async isVisible() {
    return await element(by.id("calc-title")).isPresent();
  }

  async getUserDisplayName() {
    return await element(by.id("user-display-name")).getText();
  }

  getAccountBalance() {
    return element(by.id("current-balance")).getText();
  }

  async setCurrentAge(age: number) {
    const ageInput = by.name("currentAge");
    await element(ageInput).sendKeys(age);
  }

  async validateInput() {
    // clicking the title of the retirement calculator
    // will blur the current input, initiating validation
    await element(by.id("calc-title")).click();
  }

  isValid() {
    //TODO: figure out how to check of form is valid
    return true;
  }

  async logout() {
    await element(by.buttonText("Logout")).click();
  }
}
