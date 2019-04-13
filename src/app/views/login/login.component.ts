import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  onSubmit(evt) {
    evt.preventDefault();
    console.log({ evt });
  }
}
