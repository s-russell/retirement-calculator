import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ApiRequestService } from "src/app/services/api-request.service";
import { Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  constructor(
    private userSvc: UserService,
    private api: ApiRequestService,
    private router: Router
  ) {}

  logout() {
    this.userSvc.user = null;
    this.api.token = null;
    this.router.navigateByUrl("login");
  }
}
