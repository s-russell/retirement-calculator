import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/login/login.component";
import { RetcalcComponent } from "./views/retcalc/retcalc.component";
import { AuthGuard } from "./services/guards/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "calc",
    component: RetcalcComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "calc",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
