import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { PrimeNgCoreModule } from "./core/primeng-core/primeng-core.module";
import { UserModule } from "./user/user.module";
import { UserComponent } from "./user/user.component";
import { HttpErrorHandlerInterceptor } from "./services/interceptors/http-error-handler.interceptor";
import { AuthorizationCheck } from "./services/authorization-check";
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./services/authentication.service";
import { AuthHeaderInterceptor } from "./services/interceptors/auth-header-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgCoreModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HomeComponent,
          pathMatch: "full",
          canActivate: [AuthorizationCheck],
        },
        {
          path: "user",
          component: UserComponent,
          canActivate: [AuthorizationCheck],
        },
        {
          path: "counter",
          component: CounterComponent,
          canActivate: [AuthorizationCheck],
        },
        {
          path: "fetch-data",
          component: FetchDataComponent,
          canActivate: [AuthorizationCheck],
        },
        { path: "login", component: LoginComponent },
      ],
      { relativeLinkResolution: "legacy" }
    ),
    UserModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    AuthorizationCheck,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
