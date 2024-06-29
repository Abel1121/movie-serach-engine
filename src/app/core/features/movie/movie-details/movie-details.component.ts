import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieDetails } from '../../../../shared/models/movieDetails';
import { MovieService } from '../../../services/movie.service';
import { lastSeen } from '../../../../shared/models/lastSeen';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetails!: movieDetails;
  lastSeens: lastSeen[] = [];
  iconPosition = 'close';
  previousUrl: string | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
  ) {
    this.previousUrl = this.router
      ?.getCurrentNavigation()
      ?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe((movieDetails) => {
      this.movieDetails = movieDetails['movieDetails'];
    });
    this.lastSeens = this.movieService.lastSeens;
  }
  ngOnDestroy() {
    if (this.movieDetails) {
      if (this.movieService.lastSeens.length)
        this.movieService.lastSeens = this.movieService.lastSeens.filter(
          (item) => item?.title !== this.movieDetails?.Title,
        );
      this.movieService.lastSeens.push({
        poster: this.movieDetails.Poster,
        title: this.movieDetails.Title,
        imdbID: this.movieDetails.imdbID,
      });

      if (this.movieService.lastSeens.length >= 6)
        this.movieService.lastSeens.shift();
      localStorage.setItem(
        'lastSeen',
        this.movieService.lastSeens
          .map((item) => JSON.stringify(item))
          .toString(),
      );
    }
  }

  changeRotation() {
    this.iconPosition = this.iconPosition === 'close' ? 'open' : 'close';
  }

  back() {
    this.router.navigateByUrl(
      typeof this.previousUrl === 'undefined' ? '/' : this.previousUrl,
    );
  }
}
