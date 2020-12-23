import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { CreaterfcComponent } from "./createrfc/createrfc.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
// import { CommonComponent } from './common/common.component';
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
// import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: "admin/dashboard",
    component: DashboardComponent,
  },
  {
    path: "admin/create-rfc",
    component: CreaterfcComponent,
  },
  // {
  //   path: 'admin/create-rfc',
  //   loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule)
  // },
  {
    path: "",
    component: LoginComponent,
  },

  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
  //   canActivate: [AuthGuardService]
  // },

  // {
  //   path: 'user',
  //   loadChildren: './user/user.module.ts#UserModule'
  // },

  // {
  //   path: 'manager',
  //   loadChildren: './manager/manager.module.ts#ManagerModule',
  // },

  // not found page route
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
