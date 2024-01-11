import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieDetails } from '../../../../shared/models/movieDetails';
import { MovieService } from '../../../services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetails!: movieDetails;
  lastSeen: string[] = [];
  iconPosition = 'close';
  previousUrl: string | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private router: Router
  ) {
    this.previousUrl = this.router
      ?.getCurrentNavigation()
      ?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe((movieDetails) => {
      this.movieDetails = movieDetails['movieDetails'];
    });
    this.lastSeen = this.movieService.lastSeen;
  }
  ngOnDestroy() {
    this.movieService.lastSeen.push(this.movieDetails.Poster);
    if (this.movieService.lastSeen.length >= 6)
      this.movieService.lastSeen.shift();
    localStorage.setItem('lastSeen', this.movieService.lastSeen.toString());
  }

  changeRotation() {
    this.iconPosition = this.iconPosition === 'close' ? 'open' : 'close';
  }

  back() {
    this.router.navigateByUrl(
      typeof this.previousUrl === 'undefined' ? '/' : this.previousUrl
    );
  }
}
