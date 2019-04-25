import { LoginPage } from "./pages/login.po";
import { CalculatorPage } from "./pages/calculator.po";

//overwrite cucumber's World with a custom World
//that includes type information
declare module "cucumber" {
  type Credential = {
    username: string;
    password: string;
  };

  interface World {
    loginPage: LoginPage;
    calculatorPage: CalculatorPage;
    credentials: {
      good: Credential;
      bad: Credential;
    };
  }
}
