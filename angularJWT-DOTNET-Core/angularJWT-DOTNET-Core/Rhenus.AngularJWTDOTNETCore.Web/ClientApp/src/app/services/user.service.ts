import { User } from "./../models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  addUser(user: User) {
    return this.http
      .post<boolean>(this.apiUrl, user)
      .toPromise()
      .then((res) => <boolean>res)
      .then((data) => {
        return data;
      });
  }

  updateUser(user: User) {
    return this.http
      .put<boolean>(this.apiUrl, user)
      .toPromise()
      .then((res) => <boolean>res)
      .then((data) => {
        return data;
      });
  }

  deleteUser(id: Number) {
    return this.http
      .delete<boolean>(this.apiUrl + "?id=" + id)
      .toPromise()
      .then((res) => <boolean>res)
      .then((data) => {
        return data;
      });
  }
}
