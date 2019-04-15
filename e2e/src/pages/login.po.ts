import { browser, by, element } from "protractor";

export class LoginPage {
  navigateTo() {
    return browser.get("/login");
  }

  async login(username: string, password: string) {
    await element(by.name("username")).sendKeys(username);
    await element(by.name("password")).sendKeys(password);
    return element(by.buttonText("Login")).click();
  }
}
