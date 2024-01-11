import { movieTypeEnum } from '../enum/movie-type';

export interface movie {
  Poster: string;
  Title: string;
  Type: movieTypeEnum;
  Year: string;
  imdbID: string;
}
