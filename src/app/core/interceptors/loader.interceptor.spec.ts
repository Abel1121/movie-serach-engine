import { TestBed } from '@angular/core/testing';
import { LoaderInterceptor } from './loader.interceptor';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoaderService } from '../services/loader.service';
import { firstValueFrom } from 'rxjs';
const httpResponse = new HttpResponse({
  status: 200,
  statusText: 'OK',
});
describe('LoaderInterceptor', () => {
  let loaderInterceptor: LoaderInterceptor;
  let client: HttpClient;
  let httpMock: HttpTestingController;
  let loaderService: LoaderService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        LoaderInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true,
        },
      ],
    });

    loaderInterceptor = TestBed.inject(LoaderInterceptor);
    loaderService = TestBed.inject(LoaderService);
    client = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(loaderInterceptor).toBeTruthy();
  });

  it('should start busy() after get request', async () => {
    const loaderSpy = spyOn(loaderService, 'busy');

    const httpReqPromise = firstValueFrom(client.get('/api'));
    httpMock.expectOne('/api').flush(httpResponse);

    try {
      await httpReqPromise;
      expect(loaderSpy).toHaveBeenCalled();
    } catch (e) {
      fail('It should have not thrown');
    }
  });
  it('should run idle() after end request', async () => {
    const loaderSpy = spyOn(loaderService, 'idle');

    const httpReqPromise = firstValueFrom(client.get('/api'));
    httpMock.expectOne('/api').flush(httpResponse);

    try {
      await httpReqPromise;
      expect(loaderSpy).toHaveBeenCalled();
    } catch (e) {
      fail('It should have not thrown');
    }
  });
});
