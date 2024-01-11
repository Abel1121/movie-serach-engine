import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { movieList } from '../../../../shared/models/movieList';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList!: movieList;
  pages!: number;
  currentPage = 1;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((movieList) => {
      this.movieList = movieList['movieList'];
      this.pages = Math.ceil(this.movieList.totalResults / 10);
      this.currentPage = Number(
        this.activatedRoute.snapshot.queryParamMap.get('page')
      );
    });
  }
  identify(index: number, movie: movie) {
    return movie.imdbID;
  }
}