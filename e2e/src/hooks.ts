import { Before, BeforeAll } from "cucumber";
import { LoginPage } from "./pages/login.po";
import { CaculatorPage } from "./pages/calculator.po";

//attach page objects to world
Before(function() {
  this.loginPage = new LoginPage();
  this.calculatorPage = new CaculatorPage();
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
