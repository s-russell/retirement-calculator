import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule
} from "@angular/material";

@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
