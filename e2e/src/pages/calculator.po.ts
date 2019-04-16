import { browser, by, element } from "protractor";

export class CaculatorPage {
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

  async logout() {
    await element(by.buttonText("Logout")).click();
  }
}
