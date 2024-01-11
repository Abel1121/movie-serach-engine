import { FormControl } from '@angular/forms';
import { movieTypeEnum } from '../enum/movie-type';

export interface movieSearchBar {
  title: FormControl<string | null>;
  type: FormControl<movieTypeEnum | null>;
  year: FormControl<string | null>;
  page: FormControl<string | null>;
}
