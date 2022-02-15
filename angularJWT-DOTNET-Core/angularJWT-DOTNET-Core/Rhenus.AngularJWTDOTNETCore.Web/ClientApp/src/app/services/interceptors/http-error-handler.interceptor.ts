import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
} from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { MessageService } from "primeng-lts/api";
import { UiLoaderService } from "../ui-loader.service";
import { AuthenticationService } from "../authentication.service";

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService,
    private uiService: UiLoaderService,
    private authenticationService: AuthenticationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        if (error.status === 401) {
          //if 401 response returned from api, logout from application & redirect to login page.
          this.authenticationService.logout();
        }
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: errorMessage,
        });
        this.uiService.unBlockUi();
        return throwError(errorMessage);
      })
    );
  }
}
