import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PosterComponent } from '../../../../shared/components/poster/poster.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrintJsonPrettyPipe } from '../../../../shared/pipe/print-json-pretty.pipe';
import { movieDetails } from '../../../../shared/models/movieDetails';
import { movieTypeEnum } from '../../../../shared/enum/movie-type';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

const movieDetails: movieDetails = {
  Title: 'Batman: The Animated Series',
  Year: '1992–1995',
  Rated: 'TV-PG',
  Released: '05 Sep 1992',
  Runtime: '23 min',
  Genre: 'Animation, Action, Adventure',
  Director: 'N/A',
  Writer: 'Bob Kane, Eric Radomski, Bruce Timm',
  Actors: 'Kevin Conroy, Loren Lester, Efrem Zimbalist Jr.',
  Plot: 'The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.',
  Language: 'English',
  Country: 'United States',
  Awards: 'Won 1 Primetime Emmy. 5 wins & 19 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '9.0/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '9.0',
  imdbVotes: '113,945',
  imdbID: 'tt0103359',
  Type: movieTypeEnum.series,
  totalSeasons: '4',
  Response: 'True',
};

xdescribe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent,
        ButtonComponent,
        PosterComponent,
        PrintJsonPrettyPipe,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        NgOptimizedImage,
      ],
      providers: [
        MovieService,
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ ...movieDetails }),
          },
        },
        {
          provide: Router,
          useValue: {
            getCurrentNavigation: () => {
              previousNavigation: {
                finalUrl: 'undefined';
              }
            },
          },
        },
      ],
    });

    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.movieDetails = movieDetails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
