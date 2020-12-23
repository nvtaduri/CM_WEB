import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateRFCComponent } from "./create-rfc/create-rfc.component";

@NgModule({
  declarations: [CreateRFCComponent],
  imports: [CommonModule, AdminModule],
})
export class AdminModule {}
