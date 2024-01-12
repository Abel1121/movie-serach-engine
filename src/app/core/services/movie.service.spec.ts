import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { movieList } from '../../shared/models/movieList';
import { movieDetails } from '../../shared/models/movieDetails';
import { movieTypeEnum } from '../../shared/enum/movie-type';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    movieService = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('should send an HTTP GET request for movie list', () => {
    const mockParam = {
      title: 'Superman',
      year: '2005',
      type: 'movie',
      page: '1',
    };
    const expectedUrl = `http://localhost:4200/api?s=${mockParam.title}&y=${mockParam.year}&type=${mockParam.type}&page=${mockParam.page}`;
    const mockResponse: movieList = {
      Search: [
        {
          Title: 'Stereophonics: Superman',
          Year: '2005',
          imdbID: 'tt12569332',
          Type: movieTypeEnum.movie,
          Poster:
            'https://m.media-amazon.com/images/M/MV5BZWY4YmE3YzAtNzlkMS00OGZlLTg3MTMtZTQ5MDE1ZjdmYmU4XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg',
        },
      ],
      totalResults: '1',
      Response: 'True',
    };

    movieService.getMovieList(mockParam).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpTestingController.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should send an HTTP GET request for movie details', () => {
    const mockImdbId = 'tt12569332';
    const expectedUrl = `http://localhost:4200/api?i=${mockImdbId}`;
    const mockResponse: movieDetails = {
      Title: 'Stereophonics: Superman',
      Year: '2005',
      Rated: 'N/A',
      Released: '20 Jun 2005',
      Runtime: '4 min',
      Genre: 'Short, Music',
      Director: 'N/A',
      Writer: 'N/A',
      Actors: 'Stereophonics',
      Plot: 'N/A',
      Language: 'English',
      Country: 'UK',
      Awards: 'N/A',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZWY4YmE3YzAtNzlkMS00OGZlLTg3MTMtZTQ5MDE1ZjdmYmU4XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg',
      Ratings: [],
      Metascore: 'N/A',
      imdbRating: 'N/A',
      imdbVotes: 'N/A',
      imdbID: 'tt12569332',
      Type: movieTypeEnum.movie,
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    };

    movieService.getMovieDetails(mockImdbId).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpTestingController.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
