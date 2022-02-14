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

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

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
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: errorMessage,
        });
        return throwError(errorMessage);
      })
    );
  }
}
