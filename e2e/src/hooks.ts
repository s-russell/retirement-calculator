import { Before } from "cucumber";
import { LoginPage } from "./pages/login.po";
import { CalculatorPage } from "./pages/calculator.po";

//attach page objects to world
Before(function() {
  this.loginPage = new LoginPage();
  this.calculatorPage = new CalculatorPage();
});

//set up credentials
Before(function() {
  this.credentials = {
    good: {
      username: "sstevenson",
      password: "ss"
    },
    bad: {
      username: "somerandomperson",
      password: "badpassword"
    }
  };
});
