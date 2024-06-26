import { FormControl, FormGroup, Validators } from '@angular/forms';
import { movieSearchBar } from '../../../../shared/models/movieSearchBar';
import { movieTypeEnum } from '../../../../shared/enum/movie-type';
import { Params } from '@angular/router';

export class MovieSearchFormModel {
  readonly TITLE = 'title';
  readonly TYPE = 'type';
  readonly YEAR = 'year';
  readonly PAGE = 'page';

  formGroup!: FormGroup<movieSearchBar>;

  constructor(form?: Params) {
    this.buildForm(form);
  }

  buildForm(form?: Params) {
    const controls = {
      [this.TITLE]: new FormControl<string>(
        form?.['title'] ?? null,
        Validators.required,
      ),
      [this.TYPE]: new FormControl<movieTypeEnum | null>(
        form?.['type'] ?? null,
      ),
      [this.YEAR]: new FormControl<string | null>(form?.['year'] ?? null),
      [this.PAGE]: new FormControl<string | null>(form?.['page'] ?? null),
    };
    return (this.formGroup = new FormGroup<movieSearchBar>(controls));
  }
}
