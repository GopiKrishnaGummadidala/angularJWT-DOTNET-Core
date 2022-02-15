import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UiLoaderService } from "./services/ui-loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public uiBlocked$: Observable<boolean>;
  title = "app";
  constructor(private uiService: UiLoaderService) {}

  ngOnInit() {
    this.uiBlocked$ = this.uiService.uiBlocked$;
  }
}
