import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MovieService } from './core/services/movie.service';
import { LoaderService } from './core/services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private movieService: MovieService,
    public loaderService: LoaderService
  ) {
    translate.setDefaultLang('pl');
    translate.addLangs(['pl', 'en']);
    if (localStorage.getItem('language') === null) {
      localStorage?.setItem('language', 'pl');
    }
    translate.use(localStorage.getItem('language') || 'pl');
    if (localStorage.getItem('lastSeen') !== null) {
      movieService.lastSeen =
        localStorage.getItem('lastSeen')?.split(',') || [];
    }
  }
  title = 'movie-search-engine';
}
