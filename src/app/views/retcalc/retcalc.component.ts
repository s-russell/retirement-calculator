import { Component, OnInit } from "@angular/core";
import { BalanceService, Balance } from "src/app/services/balance.service";

@Component({
  selector: "app-retcalc",
  templateUrl: "./retcalc.component.html",
  styleUrls: ["./retcalc.component.scss"]
})
export class RetcalcComponent {
  private userBalance: Balance = { dollars: 0, cents: 0 };

  get balance() {
    return `${this.userBalance.dollars}.${(this.userBalance.cents < 10
      ? "0"
      : "") + this.userBalance.cents}`;
  }

  constructor(private balanceSvc: BalanceService) {
    this.balanceSvc
      .getUserBalance()
      .subscribe(balance => (this.userBalance = balance));
  }
}
