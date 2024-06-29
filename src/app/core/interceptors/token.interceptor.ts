import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.includes(environment.OMDAPI)) return next.handle(request);
    const requestWithToken = request.clone({
      params: request.params.set('apikey', environment.OMDTOKEN),
    });
    return next.handle(requestWithToken);
  }
}
