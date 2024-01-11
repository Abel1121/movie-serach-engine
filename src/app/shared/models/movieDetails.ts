import { rating } from './rating';
import { movieTypeEnum } from '../enum/movie-type';

export interface movieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: movieTypeEnum;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
