import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"],
})
export class NavMenuComponent {
  isExpanded = false;
  userLoggedIn = false;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe((userName: string) => {
      if (userName) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
