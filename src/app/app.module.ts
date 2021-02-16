import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
// import { FormsComponent } from './forms/forms.component';
// import { TablesComponent } from './tables/tables.component';
// import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
// import { DataTableModule } from "angular-6-datatable";
// import { CommonComponent } from './common/common.component';
import { LoginComponent } from "./login/login.component";
// import { SignupComponent } from './signup/signup.component';
import { SharedService } from "./shared.service";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
// import { UserProfileComponent } from './user/user-profile/user-profile.component';
// import { ManagerProfileComponent } from './manager/manager-profile/manager-profile.component';
// import { NotificationsComponent } from './notifications/notifications.component';
import { AuthInterceptorService } from "./auth-interceptor.service";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { FileUploadModule } from "ng2-file-upload";
import { HotTableModule } from "@handsontable/angular";
// import { UserServicesComponent } from './user-services/user-services.component';
// import { UserActivitiesComponent } from './user-activities/user-activities.component';
// import { UserChatComponent } from './user-chat/user-chat.component';
// import { AttandanceComponent } from './attandance/attandance.component';
// import { LeavesComponent } from './leaves/leaves.component';
// import { AccountsComponent } from './accounts/accounts.component';
// import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
// import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
// import { CompaniesComponent } from './companies/companies.component';
// import { TasksComponent } from './tasks/tasks.component';
import { TableModule } from "primeng/table";
import { ToastrModule } from "ng6-toastr-notifications";
import { DatacolumnfilterPipe } from "./datacolumnfilter.pipe";
// import { SiteInfoComponent } from './site-info/site-info.component';
import { SettingsService } from "./settings.service";
import { CreaterfcComponent } from "./createrfc/createrfc.component";
// import { BlockChainComponent } from './block-chain/block-chain.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    DatacolumnfilterPipe,
    CreaterfcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    BrowserAnimationsModule,
    FileUploadModule,
    HotTableModule.forRoot(),
    ToastrModule.forRoot(),
    TableModule,
  ],
  providers: [
    SharedService,
    AuthService,
    AuthGuardService,
    SettingsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
