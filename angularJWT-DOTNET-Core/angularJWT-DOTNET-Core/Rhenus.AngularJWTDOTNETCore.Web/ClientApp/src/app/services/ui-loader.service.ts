import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiLoaderService {
  private uiBlockedSub = new BehaviorSubject<boolean>(false);
  public uiBlocked$ = this.uiBlockedSub.asObservable();

  constructor() {}

  public blockUi(): void {
    this.uiBlockedSub.next(true);
  }

  public unBlockUi(): void {
    this.uiBlockedSub.next(false);
  }
}
