import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { movieDetailsResolver } from './movie-details.resolver';
import { movieDetails } from '../../../../shared/models/movieDetails';

describe('movieDetailsResolver', () => {
  const executeResolver: ResolveFn<movieDetails> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      movieDetailsResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
