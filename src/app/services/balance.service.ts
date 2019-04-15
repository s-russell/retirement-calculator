import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User, UserService } from "./user.service";
import { ApiRequestService } from "./api-request.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BalanceService {
  constructor(private api: ApiRequestService, private userSvc: UserService) {}

  public getBalanceForUser(): any {
    const balanceCall = this.api.sendRequest<{
      id: Number;
      dollars: Number;
      cents: Number;
    }>("GET", `${environment.backendUrl}/api/balance`);
    balanceCall.subscribe(bal => console.log("looked up balance:", bal));
    return balanceCall;
  }
}
