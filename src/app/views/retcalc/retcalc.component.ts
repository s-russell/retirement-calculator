import { Component, OnInit } from "@angular/core";
import { BalanceService, Balance } from "src/app/services/balance.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-retcalc",
  templateUrl: "./retcalc.component.html",
  styleUrls: ["./retcalc.component.scss"]
})
export class RetcalcComponent {
  private userBalance: Balance = { dollars: 0, cents: 0 };
  private userDisplayName: String;

  get balance() {
    return `${this.userBalance.dollars}.${(this.userBalance.cents < 10
      ? "0"
      : "") + this.userBalance.cents}`;
  }

  constructor(
    private userSvc: UserService,
    private balanceSvc: BalanceService
  ) {
    this.balanceSvc
      .getUserBalance()
      .subscribe(balance => (this.userBalance = balance));

    const { first, last } = this.userSvc.user;
    this.userDisplayName = `${first} ${last}`;
  }
}
