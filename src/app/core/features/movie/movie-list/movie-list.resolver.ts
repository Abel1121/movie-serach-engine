import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { movieList } from '../../../../shared/models/movieList';
import { Observable } from 'rxjs';

export const movieListResolver: ResolveFn<movieList | []> = (
  route,
  state
): Observable<movieList> | [] => {
  if (route.queryParams['title']) {
    return inject(MovieService).getMovieList(route?.queryParams);
  } else {
    return [];
  }
};
