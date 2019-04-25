import { browser, by, element, ElementHelper } from "protractor";

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

  private async setField(fieldName: string, val: number | string) {
    const input = by.name(fieldName);
    await element(input).clear();
    await element(input).sendKeys(val);
  }

  async setCurrentAge(age: number) {
    await this.setField("currentAge", age);
  }

  async setRetirementAge(age: number) {
    await this.setField("retirementAge", age);
  }

  async setAnnualIncome(income: number) {
    await this.setField("annualIncome", income);
  }

  async setSavingsRate(rate: number) {
    await this.setField("savingsRate", rate);
  }

  async validateInput() {
    // clicking the title of the retirement calculator
    // will blur the current input, initiating validation
    await element(by.id("calc-title")).click();
  }

  async isValid() {
    return await element(
      by.buttonText("Calculate Retirement Balance")
    ).isEnabled();
  }

  async logout() {
    await element(by.buttonText("Logout")).click();
  }
}
