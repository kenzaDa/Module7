import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  

@Injectable()

export class JwtInterceptor implements HttpInterceptor  {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let jwt = JSON.parse(localStorage.getItem('jwt') as string).token;
        if (jwt) {
        
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt}`
                }
            });
        }
        return next.handle(request);
    }
}
