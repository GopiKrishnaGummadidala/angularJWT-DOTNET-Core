import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { UserComponent } from "./user/user.component";
import { TableModule } from "primeng-lts/table";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent, pathMatch: "full" },
        { path: "user", component: UserComponent },
        { path: "counter", component: CounterComponent },
        { path: "fetch-data", component: FetchDataComponent },
      ],
      { relativeLinkResolution: "legacy" }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
