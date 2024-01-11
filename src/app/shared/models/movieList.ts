import { movie } from './movie';

export interface movieList {
  response: boolean;
  Search: movie[];
  totalResults: number;
}
