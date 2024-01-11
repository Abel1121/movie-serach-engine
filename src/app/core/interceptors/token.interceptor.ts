import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN } from '../../../environments/environments';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('/api') === -1) return next.handle(request);
    const requestWithToken = request.clone({
      params: request.params.set('apikey', TOKEN.OMDAPI),
    });
    return next.handle(requestWithToken);
  }
}
