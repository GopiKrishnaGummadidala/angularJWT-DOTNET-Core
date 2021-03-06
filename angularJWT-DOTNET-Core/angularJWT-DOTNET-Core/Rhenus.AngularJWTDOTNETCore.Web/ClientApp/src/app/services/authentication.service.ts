import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(localStorage.getItem("UserName"));
  public currentUser: Observable<string>;
  constructor(private http: HttpClient) {
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserName(): string {
    return localStorage.getItem("UserName");
  }

  login(username: string, password: string) {
    return this.http.post<any>("/api/login", { username, password }).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("TokenInfo", JSON.stringify(user));
          localStorage.setItem("UserName", username);
        }
        this.currentUserSubject.next(username);
        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("TokenInfo");
    localStorage.removeItem("UserName");
    this.currentUserSubject.next(null);
  }
}
