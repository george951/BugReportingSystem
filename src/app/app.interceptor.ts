import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({setHeaders:{
      Authorization: "code.hub.ng5.token"
    }})
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            console.log('200 status code');
          }

          if (event.status === 203) {
            console.log('203 status code');
          }
        }
        return event;
      }),
      catchError (error => {
        console.log(error)
        return throwError(error)
      })
    );
  }
  constructor() { }
}
