import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoaderService } from '../services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie.service';

describe('TokenInterceptor', () => {
  let tokenInterceptor: TokenInterceptor;
  let client: HttpClient;
  let httpMock: HttpTestingController;
  let movieService: MovieService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        TokenInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });

    tokenInterceptor = TestBed.inject(TokenInterceptor);
    client = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    movieService = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(tokenInterceptor).toBeTruthy();
  });

  it('should add token', () => {
    client.get('http://localhost:4200/api').subscribe();

    const request = httpMock.expectOne(
      `http://localhost:4200/api?apikey=bf5769f2`
    );
    expect(request.request.method).toBe('GET');
  });

  it('should not add token', () => {
    client.get('http://localhost:4200/en.json').subscribe();

    const request = httpMock.expectOne(`http://localhost:4200/en.json`);
    expect(request.request.method).toBe('GET');
  });

  afterEach(() => {
    httpMock.verify();
  });
});
