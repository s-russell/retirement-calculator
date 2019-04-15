import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  private username: string = "";
  private password: string = "";

  constructor(private userSvc: UserService, private router: Router) {}

  async onSubmit(evt) {
    evt.preventDefault();
    await this.userSvc.login(this.username, this.password);
    this.router.navigateByUrl("/calc");
  }
}
