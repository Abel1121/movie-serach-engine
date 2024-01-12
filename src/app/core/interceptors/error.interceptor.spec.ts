import { TestBed } from '@angular/core/testing';
import {
  HttpErrorResponse,
  HttpResponse,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('ErrorInterceptor', () => {
  let errorInterceptor: ErrorInterceptor;
  let client: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    });

    errorInterceptor = TestBed.inject(ErrorInterceptor);
    client = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(errorInterceptor).toBeTruthy();
  });

  it('should handle and log HTTP error', async () => {
    const errorMessage = 'Sample error message';
    const consoleSpy = spyOn(console, 'error');
    const errorResponse = new HttpErrorResponse({
      error: errorMessage,
      status: 500,
      statusText: 'Internal Server Error',
      url: '/api',
    });

    const httpReqPromise = firstValueFrom(client.get('/api'));
    httpMock.expectOne('/api').flush(errorMessage, errorResponse);

    try {
      await httpReqPromise;
      fail('It should have not succeeded');
    } catch (error) {
      expect(error instanceof HttpErrorResponse).toBeTrue();
      expect(error).toEqual(errorResponse);
      expect(consoleSpy).toHaveBeenCalledWith(errorResponse);
    }
  });

  it('should not log error responses', async () => {
    const httpResponse = new HttpResponse({
      status: 200,
      statusText: 'OK',
    });
    const httpReqPromise = firstValueFrom(client.get('/en.json'));
    httpMock.expectOne('/en.json').flush(httpResponse);

    try {
      const response = await httpReqPromise;
      expect(response).toEqual(httpResponse);
      expect(console.error).not.toHaveBeenCalled();
    } catch (error) {
      fail('It should have not thrown');
    }
  });
});
