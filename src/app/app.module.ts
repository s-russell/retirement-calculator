import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./views/login/login.component";
import { RetcalcComponent } from "./views/retcalc/retcalc.component";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RetcalcComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
