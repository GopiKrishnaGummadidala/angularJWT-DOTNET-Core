import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiLoaderService {
  public uiBlocked$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  public blockUi(): void {
    this.uiBlocked$.next(true);
  }

  public unBlockUi(): void {
    this.uiBlocked$.next(false);
  }
}
