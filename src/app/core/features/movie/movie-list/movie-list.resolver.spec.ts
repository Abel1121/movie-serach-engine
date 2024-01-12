import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movieListResolver } from './movie-list.resolver';
import { movieList } from '../../../../shared/models/movieList';

describe('movieListResolver', () => {
  const executeResolver: ResolveFn<movieList | []> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      movieListResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
