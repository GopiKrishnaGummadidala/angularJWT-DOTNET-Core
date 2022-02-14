import { User } from "./../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private apiUrl: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.apiUrl = baseUrl + "api/User";
  }

  getUsers() {
    return this.http
      .get<User[]>(this.apiUrl)
      .toPromise()
      .then((res) => <User[]>res)
      .then((data) => {
        return data;
      });
  }
}
