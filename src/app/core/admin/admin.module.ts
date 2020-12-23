import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from './admin-routing.module';
import { CreateRFCComponent } from "./create-rfc/create-rfc.component";
@NgModule({
  declarations: [CreateRFCComponent],
  imports: [CommonModule, AdminModule,AdminRoutingModule],
})
export class AdminModule {}
