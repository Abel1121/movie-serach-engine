import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { PosterComponent } from '../../../../../shared/components/poster/poster.component';
import { TranslateModule } from '@ngx-translate/core';
import { movieTypeEnum } from '../../../../../shared/enum/movie-type';
import { movie } from '../../../../../shared/models/movie';
import { NgOptimizedImage } from '@angular/common';

const movie: movie = {
  Poster: 'some poster link',
  Title: 'batman',
  Type: movieTypeEnum.movie,
  Year: '2005',
  imdbID: 't123123',
};

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent, PosterComponent],
      imports: [TranslateModule.forRoot(), NgOptimizedImage],
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.movie = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show movie data on screen', () => {
    expect(
      fixture.nativeElement.querySelector('.movie-description-title').innerText,
    ).toBe(`movie.title: ${movie.Title}`);
    expect(
      fixture.nativeElement.querySelector('.movie-description-type').innerText,
    ).toBe(`movie.type: searchBar.${movie.Type}`);
    expect(
      fixture.nativeElement.querySelector('.movie-description-year').innerText,
    ).toBe(`movie.year: ${movie.Year}`);
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe(
      movie.Poster,
    );
    expect(fixture.nativeElement.querySelector('img').getAttribute('alt')).toBe(
      `${movie.Title} poster`,
    );
  });
});
