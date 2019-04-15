import { Component, OnInit } from "@angular/core";
import { BalanceService } from "src/app/services/balance.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-retcalc",
  templateUrl: "./retcalc.component.html",
  styleUrls: ["./retcalc.component.scss"]
})
export class RetcalcComponent {
  constructor(
    private userSvc: UserService,
    private balanceSvc: BalanceService
  ) {}

  getUserBalance() {
    return "17";
  }
}
