import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CreateRFCComponent} from './create-rfc/create-rfc.component'
const routes: Routes = [
  {
    path: 'admin/create-rfc',
    component: CreateRFCComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
