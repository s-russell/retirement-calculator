import { browser, by, element } from "protractor";

export class CaculatorPage {
  async isVisible() {
    return (
      (await element(by.id("calc-title")).getText()) === "Financial Information"
    );
  }

  getAccountBalance() {
    return element(by.name("account-balance")).getAttribute("value");
  }
}
