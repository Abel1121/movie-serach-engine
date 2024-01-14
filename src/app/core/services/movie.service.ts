import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { movieList } from '../../shared/models/movieList';
import { Observable } from 'rxjs';
import { movieDetails } from '../../shared/models/movieDetails';
import { Params } from '@angular/router';
import { lastSeen } from '../../shared/models/lastSeen';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  lastSeens: lastSeen[] = [];

  getMovieList(param: Params) {
    let params = new HttpParams().set('s', param['title']);
    if (param['year']) params = params.set('y', param['year']);
    if (param['type']) params = params.set('type', param['type']);
    if (param['page']) params = params.set('page', param['page']);
    return this.http.get<movieList>(environment.OMDAPI, { params });
  }

  getMovieDetails(imdbId: string): Observable<movieDetails> {
    const params = new HttpParams().set('i', `${imdbId}`);
    return this.http.get<movieDetails>(environment.OMDAPI, { params });
  }
}
