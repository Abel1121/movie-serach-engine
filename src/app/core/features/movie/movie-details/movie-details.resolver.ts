import { ResolveFn } from '@angular/router';
import { movieDetails } from '../../../../shared/models/movieDetails';
import { MovieService } from '../../../services/movie.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const movieDetailsResolver: ResolveFn<movieDetails> = (
  route,
  state
): Observable<movieDetails> => {
  return inject(MovieService).getMovieDetails(route?.paramMap?.get('imdbId')!);
};
